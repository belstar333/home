import navData from "../../../content/nav.json";
import pagesData from "../../../content/pages.json";
import companyPageOverrides from "./companyPageOverrides";
import pageOverrides from "./pageOverrides";
import productPageOverrides from "./productPageOverrides";
import serviceDetailPageOverrides from "./serviceDetailPageOverrides";
import servicePageOverrides from "./servicePageOverrides";
import solutionPageOverrides from "./solutionPageOverrides";
import type { NavNode, Page } from "./types";

export function loadNav(): NavNode[] {
    return navData as NavNode[];
}

export function loadPages(): Record<string, Page> {
    return {
        ...(pagesData as unknown as Record<string, Page>),
        ...pageOverrides,
        ...servicePageOverrides,
        ...companyPageOverrides,
        ...serviceDetailPageOverrides,
        ...solutionPageOverrides,
        ...productPageOverrides,
    };
}
