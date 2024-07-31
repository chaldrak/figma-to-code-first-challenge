import React from "react"
import Image from "next/image"
import Link from "next/link"

import Logo from "@/assets/icons/globe.svg"
import { headeMenu } from "@/constants/navigation"

const Header = () => {
  return (
    <header className="w-full border-b border-neutral-50">
      <div className="mx-auto max-w-7xl border-l border-neutral-50 py-3">
        <nav className="flex h-[76px] items-center justify-between text-base font-semibold">
          <Link href="/" className="size-[36px]">
            <Image src={Logo} alt="Icon globe" width={500} height={500} />
          </Link>
          <ul className="flex items-center gap-7 text-neutral-700">
            {headeMenu.map((item) => (
              <li key={item.label} className="hover:text-neutral-300">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div>
            <Link href="#" className="border-r-2 border-neutral-800 px-[26px] py-1 hover:text-neutral-300">
              Sign up
            </Link>
            <button className="ml-5 rounded-full bg-black px-[26px] py-[10px] text-white hover:bg-neutral-400">
              Connect Wallet
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
