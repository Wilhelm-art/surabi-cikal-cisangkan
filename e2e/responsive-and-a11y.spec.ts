import { test, expect } from '@playwright/test';

test.describe('Responsive Layout & Security Headers / Links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('all external target="_blank" links have rel="noopener noreferrer"', async ({ page }) => {
    const blankLinks = page.locator('a[target="_blank"]');
    const count = await blankLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = blankLinks.nth(i);
      const rel = await link.getAttribute('rel');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });

  test('direct WhatsApp CTAs contain pre-filled message templates', async ({ page }) => {
    // 1. Hero CTA (visible across all screen sizes)
    const heroWhatsappLink = page.getByRole('link', { name: 'Pesan via WhatsApp' }).first();
    const heroHref = await heroWhatsappLink.getAttribute('href');
    expect(heroHref).toContain('https://wa.me/6289656461483');
    expect(heroHref).toContain('Halo');

    // 2. Special Banner CTA
    const bannerLink = page.getByRole('link', { name: /Pesan Lewat WhatsApp/i });
    if (await bannerLink.isVisible()) {
      const bannerHref = await bannerLink.getAttribute('href');
      expect(bannerHref).toContain('https://wa.me/6289656461483');
    }
  });

  test('responsive viewport renders without horizontal overflow', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // allowance for fractional pixel rounding
  });
});
