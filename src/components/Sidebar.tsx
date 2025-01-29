'use client'

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ShoppingCart, Coffee, Users, CreditCard, Settings, LayoutDashboard, Utensils, ClipboardList } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Tables",
    url: "/dashboard/tables",
    icon: Utensils,
  },
  {
    title: "Orders",
    url: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "Reservations",
    url: "/dashboard/reservations",
    icon: ClipboardList,
  },
  {
    title: "Staff",
    url: "/dashboard/staff",
    icon: Users,
  },
  {
    title: "Report",
    url: "/dashboard/report",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="w-64 h-screen bg-gray-100 text-gray-800">
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <SidebarHeader className="p-4 text-2xl font-bold text-center border-b">
          Restaurant Manager
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title} className="py-2">
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className="relative flex items-center space-x-4 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        {pathname === item.url && (
                          <motion.div
                            layoutId="active-nav"
                            className="absolute inset-0 bg-primary/10 rounded-lg"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                        <item.icon className="w-6 h-6" />
                        <span className="text-lg">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </motion.div>
    </Sidebar>
  )
}
