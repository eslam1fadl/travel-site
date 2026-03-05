"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Khaled",
    role: "Adventure Traveler",
    comment:
      "I planned my mountain trip easily and discovesky places I never knew about. The experience was smooth and exciting!",
    avatar: "/images/DlyT7ebX0AAD58G.jpg",
  },
  {
    name: "Eslam Ali",
    role: "Solo Traveler",
    comment:
      "The offline maps saved me during my beach trip. I felt safe exploring new places without worrying about internet connection.",
    avatar: "/images/images.jfif",
  },
  {
    name: "Omar Hassan",
    role: "Travel Enthusiast",
    comment:
      "Beautiful design, easy planning, and great destination ideas. This app made my journeys more organized and fun!",
    avatar: "/images/x720.jpeg",
  },
];

const Reviews = () => {
  return (
    <section id="Features"  className="relative overflow-hidden min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold">
            What People <span className="text-sky-600">Say</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Trusted by adventurers around the world.
          </p>
        </motion.div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
            >
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 mb-6">"{r.comment}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;


