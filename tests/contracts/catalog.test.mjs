import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { load } from "cheerio";
import {
  games,
  projects,
  routeToFile
} from "../support/catalog-fixture.mjs";

function assertUnique(collection, field, label) {
  const values = collection.map((entry) => entry[field]);
  assert.equal(new Set(values).size, values.length, `${label} ${field} values must be unique`);
}

test("catalog entries have unique slugs and positions", () => {
  for (const [label, collection] of [["project", projects], ["game", games]]) {
    assertUnique(collection, "slug", label);
    assertUnique(collection, "position", label);

    for (const entry of collection) {
      assert.match(String(entry.slug), /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${label} slug: ${entry.slug}`);
      assert.ok(Number.isInteger(entry.position) && entry.position > 0, `${label} position: ${entry.slug}`);
      assert.ok(String(entry.name || "").trim(), `${label} name: ${entry.slug}`);
    }
  }
});
test("published entries satisfy the deployable metadata contract", () => {
  for (const project of projects.filter(({ published }) => published)) {
    assert.match(project.live_url, /^https:\/\//, `project live_url: ${project.slug}`);
    assert.match(project.repo_url, /^https:\/\/github\.com\//, `project repo_url: ${project.slug}`);
    assert.ok(String(project.description || "").trim(), `project description: ${project.slug}`);
  }

  for (const game of games.filter(({ published }) => published)) {
    assert.match(game.game_url, /^https:\/\//, `game game_url: ${game.slug}`);
    assert.match(game.source_url, /^https:\/\/github\.com\//, `game source_url: ${game.slug}`);
    assert.match(game.image, /^\/assets\/images\/games\/.+\.png$/, `game image: ${game.slug}`);
    assert.ok(String(game.description || "").trim(), `game description: ${game.slug}`);
  }
});

test("published entries render matching first-party wrappers", async () => {
  const cases = [
    ...projects.filter(({ published }) => published).map((entry) => ({
      entry,
      kind: "project",
      route: `/projects/${entry.slug}/`,
      remoteUrl: entry.live_url
    })),
    ...games.filter(({ published }) => published).map((entry) => ({
      entry,
      kind: "game",
      route: `/games/${entry.slug}/`,
      remoteUrl: entry.game_url
    }))
  ];

  for (const { entry, kind, route, remoteUrl } of cases) {
    const $ = load(await readFile(routeToFile(route), "utf8"));
    const frame = $(`iframe.${kind}-frame`);

    assert.equal(frame.length, 1, `${route} must render one ${kind} iframe`);
    assert.equal(frame.attr("src"), remoteUrl, `${route} iframe src`);
    assert.ok(frame.attr("title")?.includes(entry.name), `${route} iframe title`);
    assert.equal($("meta[name=robots]").attr("content"), "index, follow", `${route} robots`);
    assert.equal(
      $("link[rel=canonical]").attr("href"),
      `https://frankiejvaldez.com${route}`,
      `${route} canonical`
    );
  }
});

test("unpublished entries render noindex reservations without embeds", async () => {
  for (const project of projects.filter(({ published }) => !published)) {
    const route = `/projects/${project.slug}/`;
    const $ = load(await readFile(routeToFile(route), "utf8"));

    assert.equal($("iframe").length, 0, `${route} must not embed an unpublished project`);
    assert.equal($("meta[name=robots]").attr("content"), "noindex, follow", `${route} robots`);
    assert.match($("main").text(), /route reserved/i, `${route} reservation copy`);
  }
});
