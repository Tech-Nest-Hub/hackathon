"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Square, Timer, ChefHat, Phone } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MenuItem {
  id: number
  name: string
  price: number
  image: string
  location: string
  prepTime: string
  servingSize: string
  chef: {
    name: string
    image: string
    phone: string
  }
  available: boolean
}

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-48">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 right-2 bg-orange-600" variant="secondary">
          {item.available ? "Available" : "Sold Out"}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-4">
          {/* Price and Title */}
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-2xl font-bold">${item.price.toFixed(2)}</h3>
              <Badge variant="outline" className="border-orange-600 text-orange-600">
                Featured
              </Badge>
            </div>
            <h4 className="font-semibold text-lg">{item.name}</h4>
          </div>

          {/* Location */}
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{item.location}</span>
          </div>

          {/* Details */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              {item.servingSize}
            </div>
            <div className="flex items-center">
              <Timer className="h-4 w-4 mr-1" />
              {item.prepTime}
            </div>
          </div>

          {/* Chef Info */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={item.chef.image} alt={item.chef.name} />
                <AvatarFallback>
                  <ChefHat className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{item.chef.name}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              {item.chef.phone}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

