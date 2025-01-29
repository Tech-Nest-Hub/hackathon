"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { List, MoreVertical, Pen, Trash, Users } from "lucide-react"
import Link from "next/link"


type TableStatus = "open" | "reserved" | "occupied" | "closed"

interface RestaurantTable {
  id: number
  table_name: string
  is_active: boolean
  description: string | null
  number_of_table: number | null
  status: TableStatus
  created_at: string
}

export function TableGridView() {
  // Example data - replace with your actual data fetching
  const tables: RestaurantTable[] = [
    {
      id: 1,
      table_name: "Table 1",
      is_active: true,
      description: "Window side table",
      number_of_table: 4,
      status: "open",
      created_at: new Date().toISOString(),
    },
    // Add more sample data as needed
  ]

  const getStatusStyles = (status: TableStatus) => {
    const styles = {
      open: "bg-green-100 border-green-600",
      reserved: "bg-yellow-100 border-yellow-600",
      occupied: "bg-red-100 border-red-600",
      closed: "bg-gray-100 border-gray-600",
    }
    return styles[status]
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Restaurant Tables</h2>
        <Button asChild variant="outline">
          <Link href="/table">
            <List className="mr-2 h-4 w-4" /> View List
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tables.map((table) => (
          <Card key={table.id} className={`relative border-2 ${getStatusStyles(table.status)}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Badge
                className={`${
                  table.status === "open"
                    ? "bg-green-600"
                    : table.status === "reserved"
                      ? "bg-yellow-600"
                      : table.status === "occupied"
                        ? "bg-red-600"
                        : "bg-gray-600"
                }`}
              >
                {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => {}}>
                    <Pen className="mr-2 size-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {}}>
                    <Trash className="mr-2 size-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{table.table_name}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{table.number_of_table} seats</span>
                </div>
                {table.description && <p className="text-sm text-muted-foreground">{table.description}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

