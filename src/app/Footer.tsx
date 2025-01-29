"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-100 text-orange-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Restaurant Street</p>
            <p>Foodville, FD 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@restaurant.com</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday: 10am - 11pm</p>
            <p>Sunday: 10am - 9pm</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-700 hover:text-orange-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-orange-700 hover:text-orange-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-orange-700 hover:text-orange-500 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-8 border-t border-orange-200 text-center"
        >
          <p>&copy; {currentYear} Your Restaurant Name. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
