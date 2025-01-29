"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MenuCard } from "../MenuCard";
import Link from "next/link";
import Menu from "@/app/menu/(components)/Menu";
import DashboardMenu from "./(dashcomo)/DashBoardMenu";

// Sample data
export const menuItems = [
  {
    id: 1,
    name: "Wagyu Beef Steak",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=600",
    location: "Main Kitchen",
    prepTime: "25 mins",
    servingSize: "400g",
    chef: {
      name: "Gordon Smith",
      image: "/placeholder.svg?height=100&width=100",
      phone: "+1 234 567 890",
    },
    available: true,
  },
  {
    id: 2,
    name: "Truffle Pasta",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=600",
    location: "Italian Section",
    prepTime: "20 mins",
    servingSize: "350g",
    chef: {
      name: "Maria Romano",
      image: "/placeholder.svg?height=100&width=100",
      phone: "+1 234 567 891",
    },
    available: true,
  },
  {
    id: 3,
    name: "Sushi Platter Deluxe",
    price: 75.99,
    image: "/placeholder.svg?height=400&width=600",
    location: "Sushi Bar",
    prepTime: "30 mins",
    servingSize: "24 pcs",
    chef: {
      name: "Yuki Tanaka",
      image: "/placeholder.svg?height=100&width=100",
      phone: "+1 234 567 892",
    },
    available: true,
  },
  {
    id: 4,
    name: "Mediterranean Seafood Paella",
    price: 65.99,
    image: "/placeholder.svg?height=400&width=600",
    location: "Spanish Corner",
    prepTime: "35 mins",
    servingSize: "2-3 persons",
    chef: {
      name: "Carlos Rodriguez",
      image: "/placeholder.svg?height=100&width=100",
      phone: "+1 234 567 893",
    },
    available: false,
  },
  // Add more items as needed...
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Featured Menu Items</h1>
          <p className="text-muted-foreground">
            Manage and update your restaurant's offerings
          </p>
        </div>
      </div>

      
       <DashboardMenu/>
    
    </div>
  );
};

export default Dashboard;
