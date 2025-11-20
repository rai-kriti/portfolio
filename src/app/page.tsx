"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PayAttention from "@/components/PayAttention";
import ProfileCard from "@/components/ProfileCard";
import TopRated from "@/components/TopRated";
import TopContributors from "@/components/TopContributors";
import VoteBar from "@/components/VoteBar";

import { Menu, X } from "lucide-react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen relative">
      <div className="max-w-[1100px] mx-auto px-2 flex flex-row justify-between">

        {/* ---------- LEFT MAIN CONTENT ---------- */}
        <div className="w-full md:w-2/3 mr-0 md:mr-6 space-y-4">
          {/* Mobile topbar */}
          <div className="flex justify-between items-center md:hidden mb-2">
            <p
              className="text-[#3b5998] font-medium text-lg"
              style={{ fontFamily: "Verdana, Arial, sans-serif" }}
            >
              My Portfolio Launch Announcement
            </p>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Heading (desktop) */}
          <p
            className="hidden md:block text-[#3b5998] font-medium"
            style={{ fontFamily: "Verdana, Arial, sans-serif" }}
          >
            My Portfolio Launch Announcement
          </p>

          <p
            className="text-[14px]"
            style={{ fontFamily: "Verdana, Arial, sans-serif" }}
          >
            By <span className="text-red-500 font-bold">KRITI RAI</span>, September 2024
            <img
              src="/indianflag.png"
              alt="Indian Flag"
              width={22}
              height={14}
              className="inline mx-2"
            />
          </p>

          <div
            className="border-l-4 border-gray-300 pl-2 space-y-4 text-gray-700 text-[14px]"
            style={{ fontFamily: "Verdana, Arial, sans-serif" }}
          >
            <p>Hello, everyone!</p>

            <p>
              I am pleased to announce the launch of my personal portfolio website. 
              This will serve as the central hub for my projects, experiments, and updates. 
              Think of it as my own little corner on the web where I share what I build, learn, 
              and break (and sometimes fix 😅).
            </p>

            <p>In 2025, my portfolio will go through several iterations as I continue adding:</p>

            <ul className="list-disc ml-3 space-y-1">
              <li>🚀 <strong>Projects</strong> (full-stack apps, DSA practice, microservices, AI experiments, and more)</li>
              <li>✍️ <strong>Blogs & notes</strong> (my learnings, mistakes, and coding adventures)</li>
              <li>🎯 <strong>Goals</strong> (things I am currently working towards)</li>
            </ul>

            <p>
              The very first release of my portfolio marks the beginning of this journey.
              It is open for everyone to explore, stalk, and maybe even get inspired (or amused).
            </p>

            <p><strong>Some highlights of this launch:</strong></p>
            <ul className="list-disc ml-3 space-y-1">
              <li>🏠 Homepage with updates (just like this one).</li>
              <li>📚 Catalog of projects with detailed writeups.</li>
              <li>🏆 Contest/problem-solving section inspired by Codeforces.</li>
              <li>📄 Resume & contact details for collaborations, opportunities, or just saying hi.</li>
            </ul>

            <p><strong>Special thanks to:</strong></p>
            <ul className="list-disc ml-3 space-y-1">
              <li>☕ Chai for powering the late-night coding.</li>
              <li>🐞 Bugs (for teaching me patience).</li>
              <li>💡 Curiosity (for making me start this in the first place).</li>
            </ul>

            <p><strong>Website Information:</strong></p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Status: <span className="text-green-600 font-semibold">Live ✨</span></li>
              <li>Built with: Next.js, Tailwind, and a pinch of chaos</li>
              <li>Future updates: Dark mode toggle, blog system, and more projects.</li>
            </ul>

            <p>Picture of me (and some random code screenshots) coming soon 😄</p>

            <p>I eagerly anticipate your visits, feedback, and maybe even feature requests!</p>

            <VoteBar />
          </div>
        </div>

        {/* ---------- RIGHT SIDEBAR (unchanged for desktop) ---------- */}
        <div className="hidden md:flex flex-col space-y-4" style={{ width: "300px" }}>

          <PayAttention />
          <ProfileCard />
          <TopRated />
          <TopContributors />
        
        </div>

        {/* ---------- MOBILE SLIDE-IN SIDEBAR ---------- */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:hidden p-4 overflow-y-auto`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#3b5998] font-bold text-lg">Quick Links</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <PayAttention />
            <ProfileCard />
            <TopRated />
            <TopContributors />
            
          </div>
        </div>

        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          ></div>
        )}
      </div>
    </div>
  );
}
