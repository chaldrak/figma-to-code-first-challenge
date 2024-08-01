import React from "react"

import ListStepsCreateSell from "./ListStepsCreateSell"

const CreateSellSection = () => {
  return (
    <div className="space-y-12.5 md:mx-12.5 desktop:mx-auto mx-5 border-l border-neutral-50 pt-24">
      <h3 className="text-3xl font-bold text-neutral-800">Create and sell Now</h3>
      <ListStepsCreateSell />
    </div>
  )
}

export default CreateSellSection
