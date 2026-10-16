import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem } from '../types';
import { BUSINESS_INFO } from '../data/business';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export const formatRupiah = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

interface CartContextType {
  cart: Record<string, CartItem>;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  getItemQuantity: (itemId: string) => number;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  getCheckoutWhatsAppUrl: (customerName?: string, deliveryMethod?: string, notes?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, CartItem>>(() => {
    try {
      const saved = localStorage.getItem('surabi_cikal_cart');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('surabi_cikal_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const current = prev[item.id];
      const newQty = (current?.quantity || 0) + 1;
      return {
        ...prev,
        [item.id]: { item, quantity: newQty }
      };
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[itemId];
      if (!current) return prev;
      const newQty = current.quantity + delta;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
      return {
        ...prev,
        [itemId]: { ...current, quantity: newQty }
      };
    });
  };

  const getItemQuantity = (itemId: string): number => {
    return cart[itemId]?.quantity || 0;
  };

  const clearCart = () => {
    setCart({});
  };

  const cartItems = Object.values(cart) as CartItem[];
  const totalCount = cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.item.priceNum * item.quantity,
    0
  );

  const getCheckoutWhatsAppUrl = (
    customerName?: string,
    deliveryMethod: string = 'Ambil Sendiri di Warung',
    notes?: string
  ): string => {
    if (cartItems.length === 0) {
      return BUSINESS_INFO.waLink;
    }

    let message = `Halo Bapak Asep (Surabi Cikal Cisangkan), saya ingin memesan:\n\n`;
    cartItems.forEach((entry: CartItem) => {
      const subtotal = entry.item.priceNum * entry.quantity;
      message += `• ${entry.quantity}x ${entry.item.name} = Rp ${formatRupiah(subtotal)}\n`;
    });

    message += `\nTotal: Rp ${formatRupiah(totalPrice)} (${totalCount} porsi)`;
    if (customerName?.trim()) {
      message += `\nNama Pemesan: ${customerName.trim()}`;
    }
    message += `\nMetode: ${deliveryMethod}`;
    if (notes?.trim()) {
      message += `\nCatatan Tambahan: ${notes.trim()}`;
    }
    message += `\n\nApakah pesanan ini bisa diproses sekarang? Terima kasih.`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${BUSINESS_INFO.waNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemQuantity,
        clearCart,
        totalCount,
        totalPrice,
        getCheckoutWhatsAppUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
