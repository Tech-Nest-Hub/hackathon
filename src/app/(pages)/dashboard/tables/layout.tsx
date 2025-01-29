import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar"
import type { Metadata } from "next"
import type React from "react" // Import React
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Restaurant Table Management",
  description: "Manage restaurant tables and orders efficiently",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="p-6">{children}
            <Toaster/>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

