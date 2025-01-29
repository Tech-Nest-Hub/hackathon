"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Utensils } from "lucide-react"
import { Order } from "../(types)/tables"


interface OrderDialogProps {
  isOpen: boolean
  onClose: () => void
  order: Order | null
  tableName: string
}

export default function OrderDialog({ isOpen, onClose, order, tableName }: OrderDialogProps) {
  if (!order) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{tableName} - Current Order</DialogTitle>
          <DialogDescription>Order details</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Order Items</h3>
            <ul className="space-y-1">
              {order.items.map((item) => (
                <li key={item.id} className="text-sm flex justify-between">
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-sm font-semibold">Total:</span>
              <span className="text-sm font-semibold">${order.total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center text-sm">
                <Utensils className="mr-1 h-4 w-4" />
                <span>Status:</span>
              </div>
              <Badge
                className={`${
                  order.status === "pending"
                    ? "bg-yellow-600"
                    : order.status === "preparing"
                      ? "bg-blue-600"
                      : order.status === "ready"
                        ? "bg-green-600"
                        : "bg-purple-600"
                }`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Badge>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

