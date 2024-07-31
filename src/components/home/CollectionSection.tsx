"use client"

import React, { useState } from "react"

import CategoryTabs from "./CategoryTabs"
import ListCollections from "./ListCollections"

const CollectionSection = () => {
  const [category, setCategory] = useState("")
  return (
    <div className="mb-[96px] space-y-[36px]">
      <h3 className="text-3xl font-bold text-neutral-800">Our Collections</h3>
      <CategoryTabs category={category} setCategory={setCategory} />
      <ListCollections category={category} />
    </div>
  )
}

export default CollectionSection
