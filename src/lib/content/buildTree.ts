import type { NavNode, TreeNode } from "./types";

export function buildTree(
    nodes: NavNode[],
    category?: string
): TreeNode[] {
    const filtered = category
        ? nodes.filter((n) => n.category === category)
        : nodes;

    const map = new Map<string, TreeNode>();
    const roots: TreeNode[] = [];

    // initialize tree nodes
    for (const node of filtered) {
        map.set(node.id, { ...node, children: [] });
    }

    // build parent-child relationships
    for (const node of filtered) {
        const treeNode = map.get(node.id)!;
        if (node.parentId && map.has(node.parentId)) {
            map.get(node.parentId)!.children.push(treeNode);
        } else {
            roots.push(treeNode);
        }
    }

    // sort children by order
    const sortChildren = (nodes: TreeNode[]) => {
        nodes.sort((a, b) => a.order - b.order);
        for (const node of nodes) {
            sortChildren(node.children);
        }
    };
    sortChildren(roots);

    return roots;
}

export function getCategoryFromSlug(slug: string): string {
    const segments = slug.replace(/^\//, "").split("/");
    return segments[0] || "service";
}
