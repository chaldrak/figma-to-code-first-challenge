"use client"

import React, { useMemo } from "react"

import { collections } from "@/constants/colletions"

import CardNFT from "./CardNFT"

const ListCollections = ({ category }: { category: string }) => {
  const data = useMemo(() => {
    return category ? collections.filter((item) => item.category === category) : collections
  }, [category])
  return (
    <div className="grid w-full grid-cols-4 gap-6 py-[10px]">
      {data.map((item) => (
        <CardNFT key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ListCollections
