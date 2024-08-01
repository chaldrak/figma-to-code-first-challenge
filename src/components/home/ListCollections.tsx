"use client"

import React, { useMemo } from "react"

import { collections } from "@/constants/colletions"

import CardNFT from "./CardNFT"

const ListCollections = ({ category }: { category: string }) => {
  const data = useMemo(() => {
    return category ? collections.filter((item) => item.category === category) : collections
  }, [category])
  return (
    <div className="grid w-full grid-cols-1 gap-6 px-[26.5px] py-[10px] md:grid-cols-2 md:px-11 lg:grid-cols-4 lg:px-0">
      {data.map((item) => (
        <CardNFT key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ListCollections
