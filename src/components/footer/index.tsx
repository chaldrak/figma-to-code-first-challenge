import React from "react"
import Image from "next/image"
import Link from "next/link"

import Logo from "@/assets/icons/globe.svg"
import { footerMenu } from "@/constants/navigation"

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl border-l border-neutral-50 pt-[96px]">
      <div className="mb-[14px] w-full">
        <Image src={Logo} alt="Logo" width={500} height={500} className="size-[36px]" />
      </div>
      <div className="flex h-fit items-center justify-between border-t py-8">
        <h3 className="text-2xl font-semibold text-neutral-600">Create Explore & Collect Digital NFTs</h3>
        <ul className="flex items-center gap-[30px]">
          {footerMenu.map((item) => (
            <li key={item.label} className="text-sm font-medium">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
