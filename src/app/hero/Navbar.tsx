"use client";

import Link from "next/link";
import { MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth, useClerk } from "@clerk/nextjs";
import { MagicCursor } from "../menu/(components)/MagicCursor";
import logo from "../../public/logo.png";

export function Navbar() {
  const { userId } = useAuth();
  const { signOut } = useClerk();
  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-100 ">
      <div className="flex justify-between items-center py-4 lg:px-20 px-2 border md:px-8">
    <MagicCursor/>

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
        {userId ? (
            <Button onClick={() => signOut({ redirectUrl: "/" })}>
              Logout
            </Button>
          ) : (
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 hover:scale-105 transition-all"
            >
              Login
            </Button>
          )}
        </div>

      </div>
    </div></>
  )
}
