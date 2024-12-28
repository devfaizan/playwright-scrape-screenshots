// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://devfaizan.github.io/');

  await expect(page.getByRole('heading', { name: "On computers I do stuff related to Laravel, Flutter & Native Android." })).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
