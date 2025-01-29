"use server"

import { z } from "zod"

const reservationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  date: z.date().optional(),
  time: z.string(),
  guests: z.string(),
  occasion: z.string().optional(),
  specialRequests: z.string().optional(),
})

export async function createReservation(data: z.infer<typeof reservationSchema>) {
  const validatedData = reservationSchema.parse(data)

  // Here you would typically save the reservation to your database
  // For this example, we'll just log it and return a success message
  console.log("Reservation created:", validatedData)

  // Simulate a delay to mimic database operation
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true, message: "Reservation created successfully" }
}

