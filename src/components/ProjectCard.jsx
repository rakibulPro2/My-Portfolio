import React from "react";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  icons,
}) {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor pointer">
      <img src={image} alt="" className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-5">{description}</p>
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {tech.map((items, i) => (
            <span
              key={i}
              className="text-sm border border-purple rounded-2xl px-3 py-1"
            >
              {items}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
            <a href="#" className="basis-1/2 text-center px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple font-semibold">View Demo</a>
            <a href="#" className="basis-1/2 text-center px-4 py-2 rounded-lg border border-purple font-semibold hover:bg-purple/20">Code</a>
        </div>
      </div>
    </div>
  );
}
