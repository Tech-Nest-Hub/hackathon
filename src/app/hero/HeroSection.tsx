"use client"

import { use, useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {

    const imgPizza = "https://s3-alpha-sig.figma.com/img/69c1/9ac3/5494e7ff1cfc729f9a79cc9dfd357f02?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YeN44a6i58SHSDrzu1ZKZrzE~K5YHOI~gBFod812kDpkHubkS5knIN37wEKa2LV62vVoyZSJpM3~tbSq85tMgIv1wkxBxKKHXjxqNTAfP5YqOwmJk7ar1~hiyZUq7rb1tlYtpBce9dZ7ShxPkuDes1CrIVo9Q0oRE-bvU~3mMsrufKC-kcwn2lCGxiZVW8nZBpLITnKBs09N4wVWYy9o-ZpyYIZgKw0IJRsP2M5JxV4IKno4QGfv8lt~ZGazkmZL5OtNhhnWtLvVf8kq~Ad44x98BnGWFF1Qi1Nq17Aq8HhHohB8CRUOdzxu6XHGe6ftupbMcyC16g-0mw3C1G0-TQ__"

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
  return (
    <>

    <div className="flex items-center justify-center gap-5 space-y-4 border  md:mx-20 my-10 rounded-[30px] bg-slate-100 py-10 ">

        <div className="ml-10">
            <p className="text-sm text-slate-500"> Fresh meals, quick bites, and campus essentials! </p>
            <p className="text-3xl font-semibold lg:text-5xl">Feast Your Senses,</p>
            <p className="text-3xl text-orange-500 lg:text-5xl">Fast and Fresh</p>
            
            <div className="flex items-center gap-3 mt-5 ">
                <Input placeholder="Search for food" className="w-[20rem] rounded-full text-slate-500"/>
                <Button className="rounded-full text-base text-white font-semibold bg-orange-500 hover:bg-orange-600 transition-all">Search</Button>
            </div>
            
        </div>
         <img src={imgPizza} alt=""  className=" md:w-[20rem] lg:w-[40rem] hidden md:inline-block "/>

        <div className="">

        </div>

    </div>

    {/* menu */}

     {/* Menu Section */}
     <div className="px-4 md:px-20 my-10">
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
                  <span className="text-2xl font-bold text-orange-500">£{item.price}</span>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


    </>
  )
}
