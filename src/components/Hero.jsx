import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration: 0.6, ease: "easeOut"}}
      viewport={{once: true}}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-purple">Rakibul Islam</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">Full Stack Developer</h2>
            <p className="text-lg text-gray-300 mb-8">I create stunning web experiences with modern technologies and innovative design.</p>
            <div className="flex space-x-10">
                <a href="" className="">View Work</a>
                <a href="">Contact Me</a>
            </div>
        </div>
    </div>
    </motion.div>
  );
}
