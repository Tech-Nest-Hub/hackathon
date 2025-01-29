"use client"

import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import RestaurantTablesGrid from "./RestaurantTable"

const Tables = () => {
  return (
    <div className="space-y-5">
      {/* Breadcrumb and Header */}
      <div className="flex justify-between mb-5">
        <div className="flex flex-col gap-1.5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-medium">
                  <Link href="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">Tables</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold text-gray-800 leading-tight">Tables List</h1>
        </div>
        <Button asChild className="hover:shadow-lg bg-orange-600 hover:bg-orange-600/80">
          <Link href="/dashboard/tables/add">
            <Plus className="mr-2 h-4 w-4" /> Add Table
          </Link>
        </Button>
      </div>
      <RestaurantTablesGrid />
    </div>
  )
}

export default Tables

