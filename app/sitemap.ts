import type { MetadataRoute } from "next";

const baseUrl = "https://naveenmalik.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects",
    "/projects/magnivel",
    "/projects/govixa",
    "/projects/mywealthscore",
    "/projects/supreme-child-learning-platform",
    "/blog",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
