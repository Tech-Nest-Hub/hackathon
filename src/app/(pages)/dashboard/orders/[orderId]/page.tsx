"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { menuItems } from "@/app/(pages)/dashboard/page";

interface IMenuItems {
  id: number;
  name: string;
  price: number;
  image: string;
  location: string;
  prepTime: string;
  servingSize: string;
  chef: {
    name: string;
    image: string;
    phone: string;
  };
  available: boolean;
}

export default function Page() {
  const [item, setItem] = useState<IMenuItems | null>(null);
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const orderId = searchParams.get("orderId");
    console.log("Order ID:", orderId); // Debugging purpose
    
    if (orderId) {
      const selectedItem = menuItems.find((item) => item.id.toString() === orderId);
      if (selectedItem) {
        setItem(selectedItem);
      }
    }
  }, [searchParams]); // ✅ Added dependency to ensure updates
  
  return (
    <div>
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p>Price: ${item.price}</p>
          <p>Location: {item.location}</p>
          <img src={item.image} alt={item.name} width="200" />
        </>
      ) : (
        <p>Loading item...</p>
      )}
    </div>
  );
}
