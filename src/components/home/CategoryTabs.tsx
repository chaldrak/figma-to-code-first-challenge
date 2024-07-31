import React from "react"
import Link from "next/link"
import clsx from "clsx"

import { categories } from "@/constants/categories"

type ICategoryTabsProps = {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

const CategoryTabs = ({ category, setCategory }: ICategoryTabsProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-x-2">
        {categories.map((item) => (
          <button
            key={item.label}
            className={clsx(
              "rounded-lg px-[26px] py-[10px] text-sm font-semibold transition-colors",
              category === item.value
                ? "bg-neutral-800 text-white"
                : "bg-neutral-50 text-neutral-800 hover:bg-neutral-100"
            )}
            onClick={() => setCategory(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <Link href="#" className="text-sm font-semibold text-neutral-500 underline hover:no-underline">
        View more
      </Link>
    </div>
  )
}

export default CategoryTabs
