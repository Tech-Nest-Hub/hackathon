"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function Hero() {
  const [search, setSearch] = useState("")

  const slides = [
    {
      title: "Feast Your Senses,",
      subtitle: "Fast and Fresh",
      description: "Order Restaurant food, takeaway and groceries.",
    //   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZLlodACFkbsuxn73XS2EdgoCHhYNyn.png",
    },
    // Add more slides here as needed
  ]

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative flex min-h-[600px] items-center bg-[#0D0F1D]">
              <div className="container relative z-10 grid gap-4 px-4 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-white md:text-6xl">
                      {slide.title}
                      <span className="block text-orange-500">{slide.subtitle}</span>
                    </h1>
                    <p className="text-lg text-gray-400">{slide.description}</p>
                  </div>
                  <div className="flex max-w-md items-center space-x-2">
                    <Input
                      placeholder="e.g SUSHI 371"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="h-12 bg-white"
                    />
                    <Button size="lg" className="h-12 bg-orange-500 hover:bg-orange-600">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2">
                <Image
                  src={"/placeholder.svg"}
                  alt="Hero image"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
