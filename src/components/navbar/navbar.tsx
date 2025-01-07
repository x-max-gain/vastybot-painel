'use client'

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <div className="w-full">
      <header className="rounded-lg m-4 bg-background-primary sticky top-0 z-50 flex items-center px-4 py-4 lg:backdrop-blur-xl md:px-5 lg:px-10 2xl:py-5 3xl:px-8 4xl:px-10">
        <div className="flex w-full max-w-2xl items-center">

          {<button
            onClick={toggleMenu}
            className="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 rounded-md hover:enabled:text-gray-1000 focus-visible:ring-gray-900/30 me-3 text-primary h-auto w-auto p-0 sm:me-4 xl:hidden" type="button">
            {isMenuOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
          </button>}
        </div>

        <div className="flex w-full items-center justify-end gap-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Image src="https://logicc-tecnologia-s3.s3.amazonaws.com/system/user_default.webp" alt="User" width={40} height={40} className="rounded-full border border-gray-200 shadow" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <NavbarMobile isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  )
}
