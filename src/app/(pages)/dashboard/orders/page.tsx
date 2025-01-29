"use client"

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface OrderItem {
  name: string
  price: number
  quantity: number
}

export default function OrderPage() {
  const searchParams = useSearchParams()
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const orderData = searchParams.get('orderData')
    if (orderData) {
      const parsedOrderItems = JSON.parse(decodeURIComponent(orderData)) as OrderItem[]
      setOrderItems(parsedOrderItems)
      const newTotal = parsedOrderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      setTotal(newTotal)
    }
  }, [searchParams])

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert('Thank you for your order! This is where you would integrate a payment gateway.')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{item.name} x {item.quantity}</span>
                <span>Rs {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
            <Button onClick={handleCheckout} className="w-full">
              Complete Order
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
