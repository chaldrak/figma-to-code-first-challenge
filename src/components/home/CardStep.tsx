import React from "react"
import Image from "next/image"

import { IStepType } from "@/constants/steps"

const CardStep = ({ icon, title, description }: IStepType) => {
  return (
    <div className="h-fit w-full space-y-2.5 rounded-3xl bg-neutral-50 p-6">
      <div className="flex size-[50px] items-center justify-center rounded-lg bg-neutral-600">
        <Image src={icon} alt={title} width={500} height={500} className="size-[30px] object-cover" />
      </div>
      <h3 className="text-xl font-bold text-neutral-800">{title}</h3>
      <p className="text-sm font-medium text-neutral-400">{description}</p>
    </div>
  )
}

export default CardStep
