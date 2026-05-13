import { notFound } from "next/navigation";
import { loadPages } from "@/lib/content/loadContent";
import { resolvePage } from "@/lib/content/resolvePage";
import ContentRenderer from "@/components/ContentRenderer/ContentRenderer";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
    const pages = loadPages();
    return Object.keys(pages)
        .filter((s) => s !== "/")
        .map((path) => ({ slug: path.replace(/^\//, "").split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const slugPath = "/" + (slug ?? []).join("/");
    const page = resolvePage(slugPath);
    return {
        title: page?.seo?.title ?? page?.title ?? "테크아이",
        description: page?.seo?.description ?? "",
        alternates: { canonical: slugPath },
    };
}

export default async function SlugPage({ params }: Props) {
    const { slug } = await params;
    const slugPath = "/" + slug.join("/");
    const page = resolvePage(slugPath);
    if (!page) notFound();
    return <ContentRenderer page={page} />;
}
