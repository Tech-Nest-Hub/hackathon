
"use client"

import { use, useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Menu(){


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

      const [displayMenu, setDisplayMenu] = useState(menu);


    return(
        <div className="px-4 md:px-20 my-10 mt-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Menu</h2>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayMenu.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image src={item.img || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-orange-500 bg-orange-50 rounded-full">
                  {item.category}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">Rs {item.price}</span>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> 
      </div>
    )
}