"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { Sparkles, ShoppingCart } from "lucide-react"
import { SearchAndFilter } from "@/app/menu/(components)/SearchFilter"
import { OrderSheet } from "./OpenDialogSheet"

const menu = [
  {
    name: "Samosa",
    price: 20,
    img: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Snacks",
  },
  {
    name: "Butter Chicken",
    price: 45,
    img: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Main Course",
  },
  {
    name: "Vegetable Pizza",
    price: 35,
    img: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Pizza",
  },
  {
    name: "Chicken Burger",
    price: 28,
    img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Fast Food",
  },
  {
    name: "Caesar Salad",
    price: 22,
    img: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Salads",
  },
  {
    name: "Chocolate Brownie",
    price: 15,
    img: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Desserts",
  },
  {
    name: "Sushi Roll",
    price: 38,
    img: "https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Japanese",
  },
  {
    name: "Mango Lassi",
    price: 12,
    img: "https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Beverages",
  },
]

interface OrderItem {
  name: string
  price: number
  quantity: number
}

export default function DashboardMenu() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [isOrderSheetOpen, setIsOrderSheetOpen] = useState(false)

  const categories = useMemo(() => {
    return ["All", ...new Set(menu.map((item) => item.category))]
  }, [])

  const filteredMenu = useMemo(() => {
    return menu.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const addToOrder = (item: { name: string; price: number }) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name)
      if (existingItem) {
        return prevItems.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i))
      } else {
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
    setIsOrderSheetOpen(true)
  }

  const updateOrderItem = (name: string, quantity: number) => {
    setOrderItems((prevItems) => {
      return prevItems.map((item) => (item.name === name ? { ...item, quantity } : item))
    })
  }

  const removeFromOrder = (name: string) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.name !== name))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-4 md:px-20 my-10">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Our Menu</h2>
        <div className="flex items-center space-x-4">
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
          <Button onClick={() => setIsOrderSheetOpen(true)} className="bg-orange-500 hover:bg-orange-600">
            <ShoppingCart className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">View Order</span>
            {orderItems.length > 0 && (
              <span className="ml-2 bg-white text-orange-500 rounded-full px-2 py-1 text-xs font-bold">
                {orderItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Button>
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredMenu.map((item) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="overflow-hidden hover:shadow-lg transition-shadow relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={item.img || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                      <Sparkles className="text-white h-12 w-12" />
                    </motion.div>
                  )}
                </div>
                <CardContent className="p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-orange-500 bg-orange-50 rounded-full"
                  >
                    {item.category}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg font-semibold mb-2"
                  >
                    {item.name}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-2xl font-bold text-orange-500">Rs {item.price}</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600" onClick={() => addToOrder(item)}>
                      Add to Cart
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredMenu.length === 0 && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-500 mt-8"
        >
          No menu items found. Try adjusting your search or filter.
        </motion.p>
      )}
      <OrderSheet
        isOpen={isOrderSheetOpen}
        onClose={() => setIsOrderSheetOpen(false)}
        orderItems={orderItems}
        updateOrderItem={updateOrderItem}
        removeFromOrder={removeFromOrder}
      />
    </motion.div>
  )
}

