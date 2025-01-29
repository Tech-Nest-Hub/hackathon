"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Utensils, Bell, User } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Tables", href: "/tables" },
  { name: "Orders", href: "/orders" },
  { name: "Menu", href: "/menu" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="flex items-center font-semibold">
          <Utensils className="mr-2 h-6 w-6" />
          <span className="hidden sm:inline-block">Restaurant Manager</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button key={item.href} variant={pathname === item.href ? "secondary" : "ghost"} asChild>
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

