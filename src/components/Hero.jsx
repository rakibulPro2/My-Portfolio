import React from "react";
import { motion } from "framer-motion";
import {assets} from "../assets/assets"

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="md:min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container px-2 md:px-0 mx-auto flex flex-col md:flex-row justify-between items-center ">
        {/* left side content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Rakibul Islam</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <a
              href=""
              className="py-2 md:py-3 px-4 md:px-6 rounded-lg bg-purple"
            >
              View Work
            </a>
            <a
              href=""
              className="py-2 md:py-3 px-4 md:px-6 rounded-lg border border-purple-700 hover:bg-purple/20"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Rigt side Image content */}
        <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-90">
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-purple to-pink ">
            <motion.img
            animate={{y:[0, -20, 0]}}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType:"loop",
              ease:"easeInOut"

            }}
            className="relative rounded-[20px] w-64 h-64 md:w-80 md:h-90 object-cover 
 z-10 animate-float"
             src={assets.profileImg} alt="Profile" />
          </div>

        </div>

        </div>
      </div>
    </motion.div>
  );
}
