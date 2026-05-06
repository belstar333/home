export function isContactHref(href?: string | null) {
    if (!href) return false;

    const normalizedHref = href.trim().toLowerCase();

    return (
        normalizedHref === "/contact" ||
        normalizedHref.startsWith("/contact?") ||
        normalizedHref === "#contact" ||
        normalizedHref.startsWith("#contact-")
    );
}
