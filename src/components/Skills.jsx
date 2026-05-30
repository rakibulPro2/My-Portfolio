import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple"> Skills</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-5xl">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-12 h-12 text-purple mr-6" />
                  <h3 className="text-xl font-semibold ">{skill.title}</h3>
                </div>
                <p className="mb-4">{skill.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {skill.tags.map((item, i) => {
                    return <span key={i} className="text-sm border border-purple px-3 py-1 rounded-3xl">{item}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
