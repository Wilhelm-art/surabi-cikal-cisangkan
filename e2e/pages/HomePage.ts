import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly popularDishesSection: Locator;
  readonly menuSection: Locator;
  readonly floatingCartBar: Locator;
  readonly cartModal: Locator;
  readonly customerNameInput: Locator;
  readonly notesInput: Locator;
  readonly checkoutWhatsappButton: Locator;
  readonly clearCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByRole('button', { name: 'Kembali ke atas beranda' });
    this.popularDishesSection = page.locator('section').filter({ hasText: 'Varian Terfavorit' });
    this.menuSection = page.locator('#menu');
    this.floatingCartBar = page.getByRole('button', { name: 'Buka rincian keranjang pesanan' });
    this.cartModal = page.getByRole('heading', { name: 'Keranjang Pesanan Surabi' });
    this.customerNameInput = page.getByPlaceholder('Contoh: Ibu Rina / Kang Adit');
    this.notesInput = page.getByPlaceholder('Contoh: Kuah kinca dipisah, oncom agak pedas...');
    this.checkoutWhatsappButton = page.getByRole('button', { name: 'Kirim Pesanan ke WhatsApp' });
    this.clearCartButton = page.getByRole('button', { name: 'Kosongkan' });
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page.getByRole('heading', { level: 1 })).toBeVisible();
  }

  async addDishToCart(dishName: string) {
    const addButton = this.page.getByRole('button', { name: `Tambah ${dishName} ke pesanan` }).first();
    await addButton.scrollIntoViewIfNeeded();
    await addButton.click();
  }

  async incrementDish(dishName: string) {
    const incButton = this.page.getByRole('button', { name: `Tambah porsi ${dishName}` }).first();
    await incButton.click();
  }

  async decrementDish(dishName: string) {
    const decButton = this.page.getByRole('button', { name: `Kurangi porsi ${dishName}` }).first();
    await decButton.click();
  }

  async openCart() {
    const editButton = this.page.getByRole('button', { name: 'Edit / Pesan' });
    await editButton.click();
    await expect(this.cartModal).toBeVisible();
  }
}
