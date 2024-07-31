"use client"

import React from "react"

import { steps } from "@/constants/steps"

import CardStep from "./CardStep"

const ListStepsCreateSell = () => {
  return (
    <div className="grid w-full grid-cols-4 gap-6 py-[10px]">
      {steps.map((item) => (
        <CardStep key={item.title} {...item} />
      ))}
    </div>
  )
}

export default ListStepsCreateSell
