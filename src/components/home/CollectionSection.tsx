"use client"

import React, { useState } from "react"

import CategoryTabs from "./CategoryTabs"
import ListCollections from "./ListCollections"

const CollectionSection = () => {
  const [category, setCategory] = useState("")
  return (
    <div className="mx-5 space-y-[46px] border-l border-neutral-50 md:mx-[46px] lg:mx-auto">
      <h3 className="text-3xl font-bold text-neutral-800">Our Collections</h3>
      <CategoryTabs category={category} setCategory={setCategory} />
      <ListCollections category={category} />
    </div>
  )
}

export default CollectionSection
