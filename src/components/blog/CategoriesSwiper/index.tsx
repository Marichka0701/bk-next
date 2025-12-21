"use client";

import { CategoryBadge } from "@/src/components/blog/CategoryBadge";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Category } from "@/src/lib/sanity/types";
import { useRouter, useSearchParams } from "next/navigation";

export function CategoriesSwiper({
  categories,
  activeCategory,
}: {
  categories: Category[];
  activeCategory?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }

    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  return (
    <AnimatedContainer
      preset="fadeIn"
      delay={0.2}
    >
      <div className="px-5 mx-auto overflow-x-auto overflow-y-hidden scrollbar-none flex justify-start md:justify-center gap-3">
        <CategoryBadge
          isSelected={!activeCategory || activeCategory === "all"}
          onClick={() => handleCategoryClick(null)}
        >
          Alle artikler
        </CategoryBadge>

        {categories.map((cat) => (
          <CategoryBadge
            key={cat._id}
            isSelected={activeCategory === cat.slug.current}
            onClick={() => handleCategoryClick(cat.slug.current)}
            style={
              activeCategory === cat.slug.current
                ? { backgroundColor: cat.color, borderColor: cat.color }
                : {}
            }
          >
            {cat.title}
          </CategoryBadge>
        ))}
      </div>
    </AnimatedContainer>
  );
}
