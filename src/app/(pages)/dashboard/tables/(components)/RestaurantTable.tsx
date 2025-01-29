"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Pen, Users } from "lucide-react"
import OrderDialog from "./OrderDialog"
import { Order, RestaurantTable } from "../(types)/tables"


// Mock data for tables
const mockTables: RestaurantTable[] = [
  {
    id: 1,
    table_name: "Table 1",
    is_active: true,
    description: "Window side",
    number_of_table: 4,
    status: "occupied",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    table_name: "Table 2",
    is_active: true,
    description: "Near bar",
    number_of_table: 2,
    status: "open",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    table_name: "Table 3",
    is_active: true,
    description: "Patio",
    number_of_table: 6,
    status: "reserved",
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    table_name: "Table 4",
    is_active: true,
    description: "Private room",
    number_of_table: 8,
    status: "closed",
    created_at: new Date().toISOString(),
  },
]

// Mock data for orders
const mockOrders: Record<number, Order> = {
  1: {
    id: 1,
    items: [
      { id: 1, name: "Pasta", quantity: 2, price: 12.99 },
      { id: 2, name: "Salad", quantity: 1, price: 7.99 },
      { id: 3, name: "Soda", quantity: 2, price: 2.5 },
    ],
    total: 38.97,
    status: "preparing",
  },
}

export default function RestaurantTablesGrid() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTableName, setSelectedTableName] = useState("")

  const handleCardClick = (table: RestaurantTable) => {
    if (table.status === "occupied") {
      const order = mockOrders[table.id]
      if (order) {
        setSelectedOrder(order)
        setSelectedTableName(table.table_name)
        setIsDialogOpen(true)
      }
    }
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedOrder(null)
  }

  const getStatusStyles = (status: "open" | "reserved" | "occupied" | "closed") => {
    const styles = {
      open: "bg-green-100 border-green-600",
      reserved: "bg-yellow-100 border-yellow-600",
      occupied: "bg-red-100 border-red-600",
      closed: "bg-gray-100 border-gray-600",
    }
    return styles[status]
  }

  return (
    <div className="container mx-auto p-4 mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockTables.map((table) => (
          <Card
            key={table.id}
            className={`relative border-2 ${getStatusStyles(table.status)} ${
              table.status === "occupied" ? "cursor-pointer" : ""
            }`}
            onClick={() => handleCardClick(table)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 z-[900]">
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
                  <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <Pen className="mr-2 size-4" />
                    Edit
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
      <OrderDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        order={selectedOrder}
        tableName={selectedTableName}
      />
    </div>
  )
}

