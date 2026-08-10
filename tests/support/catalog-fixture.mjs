import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

export const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
export const siteRoot = resolve(repositoryRoot, "_site");

async function loadYaml(path) {
  return YAML.parse(await readFile(resolve(repositoryRoot, path), "utf8"));
}

export const projects = await loadYaml("_data/projects.yml");
export const games = await loadYaml("_data/games.yml");

export const primaryRoutes = [
  "/",
  "/about.html",
  "/skills.html",
  "/projects.html",
  "/experience.html",
  "/education.html",
  "/contact.html",
  "/gala-fresh.html",
  "/games/"
];

export const publishedProjectRoutes = projects
  .filter(({ published }) => published)
  .map(({ slug }) => `/projects/${slug}/`);

export const publishedGameRoutes = games
  .filter(({ published }) => published)
  .map(({ slug }) => `/games/${slug}/`);

export const catalogHistoryRoutes = [
  "/projects/stopshopresearch/catalog-history/",
  "/projects/kingkullenresearch/catalog-history/"
];

export const sitemapRoutes = [
  ...primaryRoutes,
  ...publishedGameRoutes,
  ...publishedProjectRoutes,
  ...catalogHistoryRoutes
];

export const smokeRoutes = [...sitemapRoutes, "/resume/"];

export function routeToFile(route) {
  if (route === "/") return resolve(siteRoot, "index.html");
  if (route.endsWith("/")) return resolve(siteRoot, route.slice(1), "index.html");
  return resolve(siteRoot, route.slice(1));
}
