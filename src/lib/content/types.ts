// ─── Navigation ───
export interface NavNode {
  id: string;
  parentId: string | null;
  title: string;
  slug: string;
  category: string;
  order: number;
  pageId: string;
}

export interface TreeNode extends NavNode {
  children: TreeNode[];
}

// ─── Page / Section / Block ───
export interface HeroData {
  h1: string;
  sub: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
}

export interface SubnavHeaderData {
  eyebrow: string;
  title: string;
  breadcrumbs: string[];
  cta?: { label: string; href: string };
}

export interface RichTextData {
  title: string;
  body: string;
}

export interface FeatureCardItem {
  title: string;
  desc: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: string;
}

export interface FeatureCardsData {
  title: string;
  items: FeatureCardItem[];
  variant?: "standard" | "image-cards" | "badges" | "before-after";
  eyebrow?: string;
}

export interface InfographicData {
  title: string;
  steps: string[];
}

export interface UseCasesData {
  title: string;
  items: string[];
  icons?: string[];
}

export interface BenefitsData {
  title: string;
  items: string[];
  icons?: string[];
  variant?: "standard" | "checklist";
}

export interface ComparisonTableData {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface MediaFeatureData {
  eyebrow?: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  points?: string[];
  layout?: "imageLeft" | "imageRight";
  tone?: "diagram" | "photo";
  imageWidth?: number;
  imageHeight?: number;
  caption?: string;
}

export interface ImageGalleryItem {
  imageSrc: string;
  imageAlt: string;
  caption: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface ImageGalleryData {
  eyebrow?: string;
  title: string;
  body?: string;
  items: ImageGalleryItem[];
}

export interface TimelineItem {
  year: string;
  text: string;
}

export interface TimelineData {
  title: string;
  items: TimelineItem[];
}

export interface LogoSliderData {
  title: string;
  logos: Array<string | { src: string; alt: string }>;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqData {
  title: string;
  items: FaqItem[];
}

export interface ContactFormData {
  title: string;
  note: string;
  anchor?: string;
}

export interface KakaoMapLocation {
  label: string;
  address: string;
}

export interface KakaoMapData {
  locations: KakaoMapLocation[];
}

export type BlockData =
  | { type: "hero"; data: HeroData }
  | { type: "subnavHeader"; data: SubnavHeaderData }
  | { type: "richText"; data: RichTextData }
  | { type: "featureCards"; data: FeatureCardsData }
  | { type: "infographic"; data: InfographicData }
  | { type: "useCases"; data: UseCasesData }
  | { type: "benefits"; data: BenefitsData }
  | { type: "comparisonTable"; data: ComparisonTableData }
  | { type: "mediaFeature"; data: MediaFeatureData }
  | { type: "imageGallery"; data: ImageGalleryData }
  | { type: "timeline"; data: TimelineData }
  | { type: "logoSlider"; data: LogoSliderData }
  | { type: "faq"; data: FaqData }
  | { type: "contactForm"; data: ContactFormData }
  | { type: "kakaoMap"; data: KakaoMapData };

export interface Section {
  id: string;
  type: string;
  blocks: BlockData[];
}

export interface PageSeo {
  title: string;
  description: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  seo?: PageSeo;
  sections: Section[];
}
