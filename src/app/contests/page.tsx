import Image from "next/image"
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EducationPage() {
  const [selected, setSelected] = useState(null);

  // 📈 Academic Data
  const data = [
    { sem: "Sem 1", cgpa: 7.8 },
    { sem: "Sem 2", cgpa: 8.2 },
    { sem: "Sem 3", cgpa: 8.6 },
    { sem: "Sem 4", cgpa: 8.9 },
    { sem: "Sem 5", cgpa: 9.1 },
  ];

  // 🖼️ Achievement Images (replace with yours)
  const items = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    src: "/ach1.jpg", // change images
    title: "Achievement " + (i + 1),
  }));

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-300 p-6">
      {/* 📈 GRAPH */}
      <div className="border border-gray-700 rounded-xl p-4">
        <p className="text-sm text-gray-500 mb-2">
          Click on the graph to enable zoom feature.
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="sem" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cgpa"
              stroke="#facc15"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🖼️ GRID (Heatmap → Photo Map) */}
      <div className="border border-gray-700 rounded-xl p-4 mt-6">
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>Learning activity</span>
          <span>Only academic milestones</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-5 h-5 bg-gray-800 rounded-sm overflow-hidden cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <Image
                src={item.src}
                alt=""
                width={20}
                height={20}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 📊 STATS */}
      <div className="grid grid-cols-3 gap-8 mt-8 text-center">
        <div>
          <h2 className="text-3xl font-semibold text-white">9.1</h2>
          <p className="text-gray-500">current CGPA</p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">12</h2>
          <p className="text-gray-500">projects built</p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">4</h2>
          <p className="text-gray-500">core subjects mastered</p>
        </div>
      </div>

      {/* 🔍 MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            className="bg-[#111] p-4 rounded-xl"
          >
            <Image
              src={selected.src}
              width={400}
              height={300}
              alt=""
            />
            <p className="mt-2 text-white">{selected.title}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
