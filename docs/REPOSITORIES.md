# Repository directory

The complete directory is at https://frankiejvaldez.com/repositories/ and is linked from Projects. It has seven category pages and a detail page for each of the 168 repositories owned by frankstop in the September 6, 2026 inventory.

## Inventory and website checks

The authenticated GitHub owner inventory was fully paginated: 93 public and 75 private repositories. Repository metadata, README availability, and GitHub Pages settings were inspected. Of 168 README requests, 110 returned a README; missing READMEs are not evidence of missing code. This is a catalog inspection, not a source-code audit or a full functional test of every linked application.

Public Pages endpoints and configured public homepage URLs were checked with unauthenticated HTTPS GET requests. The snapshot contains 122 reachable websites, eight unavailable URLs, and 38 repositories without a published website found. A successful document response establishes reachability, not that every application feature works. Eight public READMEs explicitly mark their projects retired; these receive a separate lifecycle label.

GitHub project Pages share the portfolio’s custom domain but are independently deployed from other repositories. Their exact, inspected URLs are intentionally accepted by the rendered-site link contract without requiring a matching local file in this repository.

## Publication boundary

The owner explicitly approved public listing of private repository names. Private source descriptions are deliberately limited to “Private repository. Source access requires permission.” No private README text or source code is included. Existing public Pages sites associated with private repositories can be linked independently of source access. Repository visibility and permissions are unchanged.

## Maintenance

`_data/repositories.json` is the public-safe catalog. Review descriptions and category assignments before updating it. Refresh website reachability and `checked_at` together; this is a dated snapshot, not a background monitor.

Each repository has `repositories/<lowercase-repository-name>/index.html` containing:

```yaml
---
layout: repository
repo_slug: "lowercase-repository-name"
---
```

Each category has `repositories/categories/<category-slug>/index.html` using `layout: repository-directory`, with `category` and `category_slug`. Update counts when changing inventory. The layouts render the directory, categories, details, and sitemap from the catalog; no client-side GitHub token or API call is used.

Search, website/source filters, and sorting operate locally. Query parameters preserve a filtered view on reload. The full list, category navigation, detail pages, and destination links remain usable without JavaScript. Filter controls appear only after their script initializes.

## Validation

Use the normal build and test workflow. `SITE_TEST_PORT=4318 npm run test:ci` selects an alternate local server port when the default is occupied. Tests cover every rendered route, canonical URLs, internal links, source privacy, combined filters, empty states, reload, sorting, no-JavaScript navigation, and accessibility at 320, 390, and 1505 pixels.
