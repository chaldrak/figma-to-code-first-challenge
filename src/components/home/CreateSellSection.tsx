import React from "react"

import ListStepsCreateSell from "./ListStepsCreateSell"

const CreateSellSection = () => {
  return (
    <div className="mx-5 space-y-[46px] border-l border-neutral-50 pt-[96px] md:mx-[46px] lg:mx-auto">
      <h3 className="text-3xl font-bold text-neutral-800">Create and sell Now</h3>
      <ListStepsCreateSell />
    </div>
  )
}

export default CreateSellSection
