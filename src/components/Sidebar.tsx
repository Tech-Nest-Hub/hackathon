import { ShoppingCart, ArrowLeftRight, Inbox, NotebookText, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.

const items = [
  {
    title: "Purchase",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Sales",
    url: "#",
    icon: Inbox,
  },
]

const biling = [
    {
        title: "Transaction",
        url: "/",
        icon: ArrowLeftRight
    },
    {
        title: "Invoice",
        url: "/",
        icon: NotebookText 
    }
]

const config = [
    {
        title: "General",
        url: "/",
        icon: NotebookText 
    },
    {
        title: "Team",
        url: "/",
        icon: User 
    }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        Techspire Food System
      </SidebarHeader>
      <SidebarContent>

      <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Table</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="ml-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Items</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="ml-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Biling</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="ml-5">
              {biling.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Configuration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="ml-5">
              {config.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
