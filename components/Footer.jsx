"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-white">
            Nomadica <span className="text-sky-500">Travel</span>
          </h2>

          <p className="text-sm text-gray-400 mt-4 max-w-xs">
            Smart travel planning platform helping explorers discover,
            organize, and experience unforgettable journeys worldwide.
          </p>
        </motion.div>

        {/* Explore */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-white font-semibold mb-4">Discover</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Top Destinations</Link></li>
            <li><Link href="#">Travel Experiences</Link></li>
            <li><Link href="#">Trip Planner</Link></li>
            <li><Link href="#">Special Offers</Link></li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About Nomadica</Link></li>
            <li><Link href="#">Our Mission</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Support</Link></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-white font-semibold mb-4">
            Stay Inspisky
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe to receive travel insights, destination guides,
            and exclusive deals straight to your inbox.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l bg-gray-800 text-sm outline-none"
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nomadica Travel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
