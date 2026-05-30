import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple"> Projects</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {
                projects.map((project, index)=> <ProjectCard key={index} {...project} />)
            }
        </div>
      </div>
    </motion.div>
  );
}
