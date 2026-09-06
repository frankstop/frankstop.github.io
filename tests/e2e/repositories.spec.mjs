import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '../support/browser-fixture.mjs';
import { repositoryCatalog } from '../support/catalog-fixture.mjs';

test('search, combined filters, empty state, reset, sort, and reload work', async ({page}) => {
  await page.goto('/repositories/');
  await expect(page.locator('.repository-row:visible')).toHaveCount(repositoryCatalog.total);
  await page.getByLabel('Search repositories', {exact:true}).fill('SDKGenerator');
  await expect(page.locator('.repository-row:visible')).toHaveCount(1);
  await page.reload();
  await expect(page.getByLabel('Search repositories', {exact:true})).toHaveValue('SDKGenerator');
  await page.getByLabel('Source', {exact:true}).selectOption('private');
  await expect(page.getByRole('heading', {name:'No repositories match'})).toBeVisible();
  await page.locator('#repo-empty-clear').click();
  await page.getByLabel('Website', {exact:true}).selectOption('live');
  await page.getByLabel('Source', {exact:true}).selectOption('private');
  const expected=repositoryCatalog.repositories.filter(r=>r.visibility==='private'&&r.website_status==='live');
  await expect(page.locator('.repository-row:visible')).toHaveCount(expected.length);
  await page.locator('#repo-clear').click();
  await page.getByLabel('Sort:', {exact:true}).selectOption('za');
  await expect(page.locator('.repository-row:visible').first()).toHaveAttribute('data-name','WorkHub');
});

test('category and detail pages retain usable navigation without JavaScript', async ({browser}) => {
  const context = await browser.newContext({javaScriptEnabled:false});
  const page=await context.newPage();
  const base=`http://127.0.0.1:${process.env.SITE_TEST_PORT || 4173}`;
  await page.goto(base+'/repositories/');
  await expect(page.locator('.repository-row')).toHaveCount(repositoryCatalog.total);
  await page.getByRole('navigation',{name:'Repository categories'}).getByRole('link',{name:'Games',exact:true}).click();
  await expect(page.getByRole('heading',{level:1})).toHaveText('Games repositories');
  await page.getByRole('link',{name:'2048 details',exact:true}).click();
  await expect(page.getByRole('heading',{level:1})).toHaveText('2048');
  await expect(page.getByRole('link',{name:'Open website',exact:true})).toHaveAttribute('href','https://frankiejvaldez.com/2048/');
  await context.close();
});

for (const width of [320,390,1505]) {
  test(`directory and website states are accessible at ${width}px`, async ({page}) => {
    await page.setViewportSize({width,height:1045});
    for (const route of ['/repositories/','/repositories/boids/','/repositories/personal-cafe/','/repositories/agenthack/','/repositories/goodjob/']) {
      await page.goto(route);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
      const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();
      expect(results.violations.filter(v=>['serious','critical'].includes(v.impact))).toEqual([]);
    }
  });
}
