"use client"

import React from "react"

import { steps } from "@/constants/steps"

import CardStep from "./CardStep"

const ListStepsCreateSell = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 px-[26.5px] py-2.5 md:grid-cols-2 md:px-11 lg:grid-cols-4 lg:px-0">
      {steps.map((item) => (
        <CardStep key={item.title} {...item} />
      ))}
    </div>
  )
}

export default ListStepsCreateSell
