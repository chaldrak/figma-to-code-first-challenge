import React from "react"
import Image from "next/image"

import EthereumIcon from "@/assets/icons/ethereum-ellipse.svg"
import { ICollectionType } from "@/constants/colletions"

const CardNFT = ({ image, name, value }: ICollectionType) => {
  return (
    <div className="size-full rounded-[20px] border border-neutral-100 p-3">
      <Image src={image} alt={name} width={500} height={500} className="h-[213px] w-full rounded-[20px] object-cover" />
      <div className="mt-4 flex items-center justify-between text-base font-bold text-neutral-800">
        <h3>{name}</h3>
        <div className="flex items-center gap-1">
          <Image src={EthereumIcon} alt="Ethereum icon" width={500} height={500} className="size-6" />
          <p className="text-lg">{value}</p>
        </div>
      </div>
      <button className="mt-4 w-full rounded-xl border border-neutral-800 bg-transparent py-2.5 text-base font-semibold text-neutral-800 hover:bg-neutral-50">
        Place a Bid
      </button>
    </div>
  )
}

export default CardNFT
