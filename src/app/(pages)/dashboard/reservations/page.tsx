'use client'

import { motion } from "framer-motion"


export default function ReservationsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-10"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-orange-800"
      >
        Make a Reservation
      </motion.h1>
      <ReservationsPage/>
    </motion.div>
  )
}

