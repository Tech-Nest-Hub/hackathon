"use client"

import Link from "next/link"
import { MapPin, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagicCursor } from "../menu/(components)/MagicCursor"

export function Navbar() {
  return (
    <>
    <MagicCursor/>
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-100 ">
      <div className="flex justify-between items-center py-4 lg:px-20 px-2 border md:px-8">

        {/* logoSection */}
        <div>
          <Link href="/">
            <h1 className="text-3xl text-red-600 font-semibold">Logo</h1>
          </Link>
        </div>

        {/* navigation links */}
        <div className="hidden lg:block md:block"> 
          <nav>
            <ul className="flex space-x-4 lg:gap-3 gap-1 items-center">
              <li>
                <Link href="/">
                  <p className="text-base text-red-600 hover:text-sm hover:text-red-600 transition-all font-semibold">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <p className="text-base hover:text-red-500 hover:text-sm transition-all font-semibold">Browse Menu</p>
                </Link>
              </li>
              <li>
                <Link href="/offers">
                  <p className="text-base hover:text-red-500 hover:text-sm transition-all font-semibold">Special Offers</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* loginButtons */}
        <div>
          <Button className="mx-4 rounded-full text-base border border-red-600 hover:bg-red-100 transition-all">Sign In</Button>
          <Button className="rounded-full text-base bg-green-300 hover:bg-green-400 transition-all">Sign Up</Button>
        </div>

      </div>
    </div>
    </>
  )
}
