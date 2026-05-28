import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

export default function About() {
  return (
    <motion.div className="py-20 bg-dark-200">
      <div className="container mx-0 px-6">
        <h1 className="text-3xl text-center font-bold mb-4">
          About
          <span className="text-purple"> Me</span>
        </h1>
        <p className="text-gray-400 text-center mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + My journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* left side image content */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              id="about"
              src=""
              alt="aboutProfile"
            />
          </div>

          {/* Right side text content */}
          <motion.div className="md:w-1/2">
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8">My Journey</h3>
              <p className="mb-5">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions for businesses around the
                world. My journey started with basic HTML/CSS websites and has
                evolved into building complex web applications with modern
                frameworks.
              </p>
              <p className="mb-5">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs and tutorials. I believe in continuous
                learning and pushing the boundaries of what's possible on the
                web.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutInfo.map((data, index) => {
                return (
                  <div className="rounded-2xl border-none p-6 bg-dark-300 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className="text-4xl text-purple mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{data.title}</h3>
                    <p>
                      {data.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
