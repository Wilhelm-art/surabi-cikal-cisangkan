import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Shopping Cart & WhatsApp Checkout Journey', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('happy path: add items, increment/decrement, customize notes, and verify WhatsApp checkout URL', async ({ page }) => {
    // 1. Initial State: No cart visible
    await expect(page.getByRole('button', { name: 'Buka rincian keranjang pesanan' })).not.toBeVisible();

    // 2. Add Surabi Oncom to cart
    await homePage.addDishToCart('Surabi Oncom');
    await expect(page.getByRole('button', { name: 'Buka rincian keranjang pesanan' })).toBeVisible();
    await expect(page.getByText('1 Porsi Surabi Dipilih')).toBeVisible();

    // 3. Increment Surabi Oncom to 2 portions
    await homePage.incrementDish('Surabi Oncom');
    await expect(page.getByText('2 Porsi Surabi Dipilih')).toBeVisible();

    // 4. Decrement Surabi Oncom back to 1 portion
    await homePage.decrementDish('Surabi Oncom');
    await expect(page.getByText('1 Porsi Surabi Dipilih')).toBeVisible();

    // 5. Open Cart Drawer
    await homePage.openCart();

    // 6. Fill Customer Information
    await homePage.customerNameInput.fill('Kang Adit Cimahi');

    // 7. Select Quick Note Chip
    const chipButton = page.getByRole('button', { name: 'Kuah Kinca Dipisah' });
    if (await chipButton.isVisible()) {
      await chipButton.click();
      await expect(homePage.notesInput).toHaveValue(/Kuah Kinca Dipisah/);
    }

    // 8. Spy on window.open call when clicking checkout
    await page.evaluate(() => {
      (window as any).__lastOpenedUrl = '';
      window.open = (url?: string | URL) => {
        (window as any).__lastOpenedUrl = String(url);
        return null;
      };
    });

    await homePage.checkoutWhatsappButton.click();

    const checkoutUrl = await page.evaluate(() => (window as any).__lastOpenedUrl);

    // 9. Assert URL targets correct WhatsApp number and contains order details
    expect(checkoutUrl).toContain('https://wa.me/6289656461483');
    expect(checkoutUrl).toContain('Kang%20Adit%20Cimahi');
    expect(checkoutUrl).toContain('Surabi%20Oncom');
  });

  test('failure state & cleanup: empty cart hides the floating bar', async ({ page }) => {
    await homePage.addDishToCart('Surabi Oncom');
    await expect(page.getByRole('button', { name: 'Buka rincian keranjang pesanan' })).toBeVisible();

    // Click quick clear trash icon
    const trashButton = page.getByRole('button', { name: 'Batal dan kosongkan keranjang' });
    await trashButton.click();

    // Floating bar must disappear
    await expect(page.getByRole('button', { name: 'Buka rincian keranjang pesanan' })).not.toBeVisible();
  });
});
