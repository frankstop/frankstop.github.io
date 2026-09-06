import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import {load} from 'cheerio';
import {repositoryCatalog as catalog,routeToFile} from '../support/catalog-fixture.mjs';

test('the directory includes every catalog repository once and retains source privacy',async()=>{
  const $=load(await readFile(routeToFile('/repositories/'),'utf8'));
  assert.equal($('.repository-row').length,catalog.total);
  assert.equal(new Set(catalog.repositories.map(r=>r.slug)).size,catalog.total);
  for (const r of catalog.repositories) {
    const detail=load(await readFile(routeToFile(`/repositories/${r.slug}/`),'utf8'));
    assert.equal(detail('h1').text(),r.name);
    assert.equal(detail(`a[href="${r.source_url}"]`).length,1);
    if(r.visibility==='private') {
      assert.equal(r.description,'Private repository. Source access requires permission.');
      assert.equal(r.language,null);
      assert.match(detail('body').text(),/code and private documentation remain restricted/);
    }
    if(r.website_status==='live') {
      assert.ok(r.http_status>=200 && r.http_status<300);
      assert.ok(r.website_url.startsWith('https://'));
      assert.equal(detail('a.repository-primary').length,1);
    } else assert.equal(detail('a.repository-primary').length,0);
  }
});
