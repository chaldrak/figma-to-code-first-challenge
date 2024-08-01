import React from "react"
import Image from "next/image"

import ArrowIcon from "@/assets/icons/arrow-circle.svg"

const HeroSection = () => {
  return (
    <div className="flex-cols relative mx-[36px] flex min-h-[calc(100vh-101px)] w-full border-l border-neutral-50 pt-[96px] lg:mx-auto lg:flex-row">
      <div>
        <h1 className="whitespace-nowrap text-9xl text-neutral-600">
          See the NFT <br /> new world
        </h1>
        <p className="font-neutral-400 mt-[52px] text-base font-semibold">
          Vorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam eu turpis molestie, di
        </p>
        <button className="mt-[26px] flex items-center gap-4">
          <span className="text-base font-semibold text-neutral-800">Discover Now</span>
          <Image src={ArrowIcon} width={500} height={500} alt="Arrow icon" className="size-12" />
        </button>
      </div>
      {/* <div className="right-0 top-5 h-[588px] w-[596px] shrink-0 border"></div> */}
    </div>
  )
}

export default HeroSection
