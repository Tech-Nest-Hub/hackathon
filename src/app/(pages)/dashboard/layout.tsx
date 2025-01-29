import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Table Management",
  description: "Manage restaurant tables and orders efficiently",
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        {children}
      </main>
    </SidebarProvider>
  )
}
