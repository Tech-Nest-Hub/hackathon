'use client'
import Link from "next/link";
import { MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth, useClerk } from "@clerk/nextjs";

export function Navbar() {
  const { userId } = useAuth();
  const { signOut } = useClerk();
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between bg-white px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-600">
            Tech Nest Food System
          </span>
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
          <Button className="bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-all">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
