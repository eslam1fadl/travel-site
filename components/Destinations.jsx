"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const places = [
  {
    title: "Mountain Camp",
    img: "/images/mountain.jpg",
    tag: "Adventure",
  },
  {
    title: "Tropical Paradise",
    img: "/images/istockphoto-1917023956-612x612.jpg",
    tag: "Relax",
  },
  {
    title: "Sunny Beach",
    img: "/images/beach.png",
    tag: "Coastal",
  },
  {
    title: "Forest Retreat",
    img: "/images/camp.jpg",
    tag: "Nature",
  },
  {
    title: "Luxury Escape",
    img: "/images/premium_photo-1690574169316-1d8e80e4e4a1.jfif",
    tag: "Premium",
  },
];

export default function Destinations() {
  // نكرر العناصر كفاية علشان الشريط يستمر بدون توقف
  const duplicated = [...places, ...places, ...places];

  return (
    <section id="Destinations" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Explore <span className="text-sky-600">Top Destinations</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Discover places made for unforgettable adventures
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -2000] }}  // يتحرك مسافة بالبكسل
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {duplicated.map((place, index) => (
              <div
                key={index}
                className="min-w-[320px] h-[420px] relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <MapPin size={16} />
                    <span>{place.tag}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{place.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
