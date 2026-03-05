"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"  // أيقونات الهامبرجر والقفل

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-sky-600">
          🌍 Nomadica
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-base font-medium text-gray-700">
          <Link href="#home" className="hover:text-sky-600 transition-colors">
            Home
          </Link>
          <Link href="#Destinations" className="hover:text-sky-600 transition-colors">
            Destinations
          </Link>
          <Link href="#Features" className="hover:text-sky-600 transition-colors">
            Features
          </Link>
          <Link href="#CTA" className="hover:text-sky-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-sky-600 transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline bg-sky-500 hover:bg-sky-600 transition-colors text-white px-5 py-2 rounded-full font-medium shadow-md"
        >
          Download App
        </motion.button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-xl overflow-hidden border-t border-gray-200"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 text-base font-medium">
              <Link href="#home" onClick={() => setIsOpen(false)} className="hover:text-sky-600 transition-colors">
                Home
              </Link>
              <Link href="#Destinations" onClick={() => setIsOpen(false)} className="hover:text-sky-600 transition-colors">
                Destinations
              </Link>
              <Link href="#Features" onClick={() => setIsOpen(false)} className="hover:text-sky-600 transition-colors">
                Features
              </Link>
              <Link href="#CTA" onClick={() => setIsOpen(false)} className="hover:text-sky-600 transition-colors">
                Contact
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-500 hover:bg-sky-600 transition-colors text-white px-5 py-2 rounded-full font-medium shadow-md mt-2"
              >
                Download App
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}
