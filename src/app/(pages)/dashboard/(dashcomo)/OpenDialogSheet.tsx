import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface OrderItem {
  name: string
  price: number
  quantity: number
}

interface OrderSheetProps {
  isOpen: boolean
  onClose: () => void
  orderItems: OrderItem[]
  removeFromOrder: (name: string) => void
}

export function OrderSheet({ isOpen, onClose, orderItems, removeFromOrder }: OrderSheetProps) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotal(newTotal)
  }, [orderItems])

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Order</SheetTitle>
          <SheetDescription>
            Review your order items below
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <AnimatePresence>
            {orderItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Rs {item.price} x {item.quantity}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromOrder(item.name)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center font-semibold">
            <span>Total:</span>
            <span>Rs {total}</span>
          </div>
          <Button className="w-full">Proceed to Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
