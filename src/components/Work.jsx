import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 bg-dark-200"
    >
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work
          <span className="text-purple"> Experience</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>

        <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
                {
                    workData.map((data, index) => (
                        <div className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
                            {/* timeline */}
                            <div className="absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple"></div>

                            {/* box */}
                            <div className="bg-dark-300 rounded-2xl p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-medium">{data.role}</h3>
                                    <span className="text-sm bg-purple/50 px-3 py-1 rounded-2xl">{data.duration}</span>
                                </div>
                                <p className="text-sm text-gray-400 mb-4">{data.company}</p>
                                <p>{data.description}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </motion.div>
  );
}
