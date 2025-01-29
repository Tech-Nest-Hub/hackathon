"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

type TableState = "open" | "closed" | "reserved" | "occupied"

interface Table {
  id: number
  state: TableState
}

const initialTables: Table[] = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  state: "open",
}))

export function TableManagement() {
  const [tables, setTables] = useState<Table[]>(initialTables)

  const changeTableState = (id: number, newState: TableState) => {
    setTables(tables.map((table) => (table.id === id ? { ...table, state: newState } : table)))
  }

  const getStatusCount = (status: TableState) => {
    return tables.filter((table) => table.state === status).length
  }

  const getStatusColor = (status: TableState) => {
    switch (status) {
      case "open":
        return "bg-green-500"
      case "closed":
        return "bg-gray-500"
      case "reserved":
        return "bg-blue-500"
      case "occupied":
        return "bg-red-500"
      default:
        return "bg-gray-200"
    }
  }

  return (
    <div className="container mx-auto py-10 px-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Table Status Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            {(["open", "closed", "reserved", "occupied"] as TableState[]).map((status) => (
              <div key={status} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full ${getStatusColor(status)} mx-auto mb-2 flex items-center justify-center text-white text-2xl font-bold`}
                >
                  {getStatusCount(status)}
                </div>
                <p className="capitalize">{status}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tables.map((table) => (
          <motion.div key={table.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className={`${getStatusColor(table.state)} text-white`}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Table {table.id}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {(["open", "closed", "reserved", "occupied"] as TableState[]).map((state) => (
                        <DropdownMenuItem key={state} onClick={() => changeTableState(table.id, state)}>
                          Set {state}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="capitalize text-center">{table.state}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

