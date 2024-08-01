import React from "react"
import Image from "next/image"

import ArrowIcon from "@/assets/icons/arrow-circle.svg"
import EllipseIcon from "@/assets/icons/ellipse-frame.svg"

const HeroSection = () => {
  return (
    <div className="size-full overflow-hidden pb-[96px] lg:h-[calc(100vh-101px)] lg:pb-0">
      <div className="relative mx-5 flex h-full flex-col justify-start border-l border-neutral-50 pt-[96px] md:mx-[46px] lg:mx-auto lg:flex-row">
        <div>
          <h1 className="whitespace-nowrap text-5xl text-neutral-600 md:text-8xl lg:text-9xl">
            See the NFT <br /> new world
          </h1>
          <p className="font-neutral-400 mt-[52px] text-base font-semibold">
            Vorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam eu turpis molestie, di
          </p>
          <button className="group mt-[26px] flex items-center gap-4">
            <span className="text-base font-semibold text-neutral-800 group-hover:text-neutral-400">Discover Now</span>
            <Image
              src={ArrowIcon}
              width={500}
              height={500}
              alt="Arrow icon"
              className="animate-ressort size-12 group-hover:animate-none"
            />
          </button>
        </div>
        <div className="relative mx-auto mt-[107px] flex h-fit min-w-fit shrink-0 gap-6 md:mt-0 lg:translate-x-[-60px] lg:translate-y-6">
          <div className="mt-36 h-[442px] w-[287px] overflow-hidden rounded-full bg-neutral-500">
            <Image
              src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/img_1.png"
              width={500}
              height={500}
              alt=""
              className="size-full object-cover"
            />
          </div>
          <div className="h-[442px] w-[287px] overflow-hidden rounded-full bg-neutral-200">
            <Image
              src="https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/img_7.png"
              width={500}
              height={500}
              alt=""
              className="size-full object-cover"
            />
          </div>
          <div className="absolute left-[152px] top-3 h-fit w-40">
            <Image src={EllipseIcon} width={500} height={500} alt="Ellipse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
