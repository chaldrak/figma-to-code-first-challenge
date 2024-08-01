import React from "react"
import Image from "next/image"
import Link from "next/link"

import Logo from "@/assets/icons/globe.svg"
import { footerMenu } from "@/constants/navigation"

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl px-5 md:px-[46px] lg:px-0">
      <div className="border-l border-neutral-50 pt-[96px]">
        <div className="mb-[14px] w-full">
          <Image src={Logo} alt="Logo" width={500} height={500} className="size-[46px]" />
        </div>
        <div className="flex h-fit flex-col justify-start gap-y-4 border-t py-8 lg:flex-row lg:items-center lg:justify-between">
          <h3 className="text-xl font-semibold text-neutral-600 md:text-2xl">Create Explore & Collect Digital NFTs</h3>
          <ul className="flex items-center justify-center gap-[30px] md:justify-start">
            {footerMenu.map((item) => (
              <li key={item.label} className="text-xs font-medium hover:text-neutral-400 md:text-sm">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
