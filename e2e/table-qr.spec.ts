import { test, expect } from '@playwright/test';

test.describe('Table QR Modal Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opens and closes the table QR printable stand modal', async ({ page }) => {
    // 1. Scroll to footer and click the QR modal button
    const qrModalTrigger = page.getByRole('button', { name: 'Cetak Stand Meja QR' }).first();
    await qrModalTrigger.scrollIntoViewIfNeeded();
    await qrModalTrigger.click();

    // 2. Assert Modal is displayed
    const modalHeading = page.getByRole('heading', { name: 'Kartu Meja QR Siap Cetak' });
    await expect(modalHeading).toBeVisible();

    // 3. Assert instructions are visible
    await expect(page.getByText('Buka Menu di HP')).toBeVisible();

    // 4. Close the modal via close button
    const closeButton = page.getByRole('button', { name: 'Tutup modal' });
    await closeButton.click();

    // 5. Assert modal is hidden
    await expect(modalHeading).not.toBeVisible();
  });
});
