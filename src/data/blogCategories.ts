export const blogCategories = [
  { id: "all", label: "All" },
  { id: "direct-tax", label: "Direct Tax" },
  { id: "indirect-tax", label: "Indirect Tax" },
  { id: "nri-tax", label: "NRI Tax" },
  { id: "company-formation", label: "Company Formation" },
  { id: "business-registration", label: "Business Registration" },
  { id: "audit-assurance", label: "Audit & Assurance" },
] as const;

export type BlogCategoryId = (typeof blogCategories)[number]["id"];
export const blogCategoryIds = blogCategories.map((c) => c.id).filter((id) => id !== "all");

export function getCategoryLabel(id: string): string {
  const cat = blogCategories.find((c) => c.id === id);
  return cat ? cat.label : id;
}
