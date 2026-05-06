import { loadPages } from "./loadContent";
import type { Page } from "./types";

export function resolvePage(slug: string): Page | null {
    const pages = loadPages();
    return pages[slug] ?? null;
}
