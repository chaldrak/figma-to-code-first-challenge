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
    <div className="flex w-full flex-col gap-[10px] md:flex-row md:items-center md:justify-between">
      <div className="w-full flex-wrap space-x-2 overflow-x-auto whitespace-nowrap">
        {categories.map((item) => (
          <button
            key={item.label}
            className={clsx(
              "rounded-xl px-[26px] py-[10px] text-sm font-semibold transition-colors",
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
      <Link href="#" className="whitespace-nowrap text-sm font-semibold text-neutral-500 underline hover:no-underline">
        View more
      </Link>
    </div>
  )
}

export default CategoryTabs
