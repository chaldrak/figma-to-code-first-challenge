"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import Logo from "@/assets/icons/globe.svg"
import HambugerIcon from "@/assets/icons/hamburger.svg"
import { headerMenu } from "@/constants/navigation"

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <header className="relative w-full border-b border-neutral-50 px-5 md:px-[36px] lg:px-0">
      <div className="mx-auto max-w-7xl border-l border-neutral-50 py-3">
        <nav className="flex h-[76px] items-center justify-between text-base font-semibold">
          <Link href="/" className="size-[36px]">
            <Image src={Logo} alt="Icon globe" width={500} height={500} />
          </Link>

          {/* Desktop */}
          <>
            <ul className="hidden items-center gap-7 text-neutral-700 lg:flex">
              {headerMenu.map((item) => (
                <li key={item.label} className="hover:text-neutral-300">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex">
              <Link href="#" className="border-r-2 border-neutral-800 px-[26px] py-1 hover:text-neutral-300">
                Sign up
              </Link>
              <button
                type="button"
                className="ml-5 rounded-full bg-black px-[26px] py-[10px] text-white hover:bg-neutral-400"
              >
                Connect Wallet
              </button>
            </div>
            <button
              type="button"
              className="flex size-[30px] items-center justify-center rounded-lg bg-neutral-50 hover:bg-neutral-100 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <Image src={HambugerIcon} width={500} height={500} alt="Open icon" className="size-5" />{" "}
            </button>
          </>

          {/* Overlay */}
          <div className={clsx(open ? "absolute inset-0 z-40 h-screen w-full bg-black/20" : "absolute")} />

          {/* Mobile */}
          <div
            className={clsx(
              "fixed right-0 top-0 z-50 h-screen w-full bg-white transition-all duration-1000",
              open ? "max-w-[346px] md:max-w-[492px]" : "max-w-0"
            )}
          >
            <button onClick={() => setOpen(false)}>close</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
