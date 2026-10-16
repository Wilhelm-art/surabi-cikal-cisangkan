import { test, expect } from '@playwright/test';

test.describe('Menu Filtering & Search Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('filters menu by keyword and category tabs', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Cari rasa: kinca, oncom, keju, telur...');
    await searchInput.scrollIntoViewIfNeeded();

    // 1. Search for 'kinca'
    await searchInput.fill('kinca');
    await expect(page.getByText('Surabi Kinca / Polos')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Surabi Telor Oncom', exact: true })).not.toBeVisible();

    // 2. Clear search input
    const clearSearch = page.getByRole('button', { name: 'Hapus kata kunci pencarian' });
    await clearSearch.click();
    await expect(searchInput).toHaveValue('');

    // 3. Filter by Gurih Asin category
    const asinTab = page.getByRole('button', { name: 'Gurih Asin' });
    await asinTab.click();
    await expect(page.getByText('Surabi Oncom').first()).toBeVisible();
    await expect(page.getByText('Surabi Kinca / Polos')).not.toBeVisible();

    // 4. Filter by Manis Legit category
    const manisTab = page.getByRole('button', { name: 'Manis Legit' });
    await manisTab.click();
    await expect(page.getByText('Surabi Kinca / Polos')).toBeVisible();
    await expect(page.getByText('Surabi Oncom Polos')).not.toBeVisible();

    // 5. Reset to Semua Kategori
    const allTab = page.getByRole('button', { name: 'Semua Kategori' });
    await allTab.click();
    await expect(page.getByText('Surabi Oncom').first()).toBeVisible();
    await expect(page.getByText('Surabi Kinca / Polos')).toBeVisible();
  });
});
