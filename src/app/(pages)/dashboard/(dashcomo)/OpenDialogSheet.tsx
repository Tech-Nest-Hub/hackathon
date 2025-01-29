import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Trash2 } from 'lucide-react'

interface OrderItem {
  name: string
  price: number
  quantity: number
}

interface OrderSheetProps {
  isOpen: boolean
  onClose: () => void
  orderItems: OrderItem[]
  updateOrderItem: (name: string, quantity: number) => void
  removeFromOrder: (name: string) => void
}

export function OrderSheet({ isOpen, onClose, orderItems, updateOrderItem, removeFromOrder }: OrderSheetProps) {
  const [total, setTotal] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const newTotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotal(newTotal)
  }, [orderItems])

  const handleCheckout = () => {
    const encodedOrderData = encodeURIComponent(JSON.stringify(orderItems))
    router.push(`/order?orderData=${encodedOrderData}`)
    onClose()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Order</SheetTitle>
          <SheetDescription>
            Review and adjust your order items below
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
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateOrderItem(item.name, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateOrderItem(item.name, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeFromOrder(item.name)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center font-semibold">
            <span>Total:</span>
            <span>Rs {total.toFixed(2)}</span>
          </div>
          <Button className="w-full" onClick={handleCheckout}>Proceed to Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
