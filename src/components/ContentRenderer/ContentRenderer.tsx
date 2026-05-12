import type { Page, BlockData } from "@/lib/content/types";
import HeroBlock from "@/components/blocks/HeroBlock";
import SubnavHeaderBlock from "@/components/blocks/SubnavHeaderBlock";
import RichTextBlock from "@/components/blocks/RichTextBlock";
import FeatureCardsBlock from "@/components/blocks/FeatureCardsBlock";
import InfographicBlock from "@/components/blocks/InfographicBlock";
import UseCasesBlock from "@/components/blocks/UseCasesBlock";
import BenefitsBlock from "@/components/blocks/BenefitsBlock";
import ComparisonTableBlock from "@/components/blocks/ComparisonTableBlock";
import MediaFeatureBlock from "@/components/blocks/MediaFeatureBlock";
import ImageGalleryBlock from "@/components/blocks/ImageGalleryBlock";
import TimelineBlock from "@/components/blocks/TimelineBlock";
import LogoSliderBlock from "@/components/blocks/LogoSliderBlock";
import FaqBlock from "@/components/blocks/FaqBlock";
import ContactFormBlock from "@/components/blocks/ContactFormBlock";
import {
    getPagePresentation,
    getPageTheme,
    getPageVariant,
    type PagePresentation,
} from "@/lib/content/servicePresentation";
import ServiceCtaBanner from "@/components/ServiceCtaBanner/ServiceCtaBanner";
import styles from "./ContentRenderer.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
function renderBlock(
    block: BlockData,
    key: string,
    showContactForm: boolean,
    page: Page,
    presentation: PagePresentation | null,
    isDetail: boolean
) {
    switch (block.type) {
        case "hero": return <HeroBlock key={key} data={block.data as any} presentation={presentation} />;
        case "subnavHeader": return isDetail ? null : <SubnavHeaderBlock key={key} data={block.data as any} />;
        case "richText": return <RichTextBlock key={key} data={block.data as any} />;
        case "featureCards": return <FeatureCardsBlock key={key} data={block.data as any} />;
        case "infographic": return <InfographicBlock key={key} data={block.data as any} />;
        case "useCases": return <UseCasesBlock key={key} data={block.data as any} />;
        case "benefits": return <BenefitsBlock key={key} data={block.data as any} />;
        case "comparisonTable": return <ComparisonTableBlock key={key} data={block.data as any} />;
        case "mediaFeature": return <MediaFeatureBlock key={key} data={block.data as any} />;
        case "imageGallery": return <ImageGalleryBlock key={key} data={block.data as any} />;
        case "timeline": return <TimelineBlock key={key} data={block.data as any} />;
        case "logoSlider": return <LogoSliderBlock key={key} data={block.data as any} />;
        case "faq": return <FaqBlock key={key} data={block.data as any} />;
        case "contactForm":
            return showContactForm ? (
                <ContactFormBlock
                    key={key}
                    data={block.data as any}
                    presentation={presentation}
                    pageTitle={page.title}
                />
            ) : null;
        default: return null;
    }
}

export default function ContentRenderer({ page }: { page: Page }) {
    const showContactForm = page.slug === "/contact";
    const pageTheme = getPageTheme(page);
    const pageVariant = getPageVariant(page);
    const pageCategory = page.slug.startsWith("/service") ? "service" : "default";
    const presentation = getPagePresentation(page);
    const isServiceDetail = page.slug === "/service" || (page.slug.startsWith("/service/") && page.slug.split("/").filter(Boolean).length >= 2);
    const hasNavBar =
        page.slug === "/service" || page.slug.startsWith("/service/") ||
        page.slug === "/solution" || page.slug.startsWith("/solution/") ||
        page.slug === "/product" || page.slug.startsWith("/product/") ||
        page.slug === "/about" || page.slug.startsWith("/about/");

    return (
        <article
            className={styles.page}
            data-page-theme={pageTheme}
            data-page-variant={pageVariant}
            data-page-category={pageCategory}
            data-is-detail={hasNavBar || undefined}
        >
            {page.sections.map((section) =>
                section.blocks.map((block, bi) =>
                    renderBlock(block, `${section.id}-${bi}`, showContactForm, page, presentation, hasNavBar)
                )
            )}
            {isServiceDetail && <ServiceCtaBanner pageTitle={page.title} />}
        </article>
    );
}
