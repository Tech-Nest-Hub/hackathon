"use client"

import Link from "next/link"
import { MapPin, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <div className="border-b">
      {/* <div className="flex h-10 items-center justify-between bg-white px-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">🎉</span>
          <span>Get 5% Off your first order</span>
          <Button variant="link" className="h-auto p-0 text-red-600 hover:text-red-700">
            Promo: OFF5FST
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-green-600" />
          <span>Regent Street, 64, A128, London</span>
          <Button variant="link" className="h-auto p-0 text-red-600 hover:text-red-700">
            Change Location
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <ShoppingBag className="h-4 w-4 text-green-600" />
          <span>23 Items</span>
          <span className="font-medium text-green-600">GBP 79.89</span>
        </div>
      </div> */}
      <div className="flex h-16 items-center justify-between bg-white px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-600">Tech Nest Food System</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-all hover:scale-105 hover:text-green-600 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/special-offers"
            className="text-sm font-medium text-gray-600 transition-all hover:scale-105 hover:text-green-600 hover:underline"
          >
            Special Offers
          </Link>
          <Link
            href="/browse-menu"
            className="text-sm font-medium text-gray-600 transition-all hover:scale-105 hover:text-green-600 hover:underline"
          >
            Browse Menu
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 hover:scale-105 rounded-full transition-all"
          >
            Login
          </Button>
          <Button className="bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-all rounded-full">Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

