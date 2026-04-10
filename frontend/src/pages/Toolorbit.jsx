import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

export default function ToolsOrbit() {
  return (
    <section className="bg-neutral-950 py-24 px-6 overflow-hidden border-t border-orange-500/10">
      <div className="max-w-7xl mx-auto flex justify-center">

        <div className="relative w-[300px] h-[300px] lg:w-[550px] lg:h-[550px] flex items-center justify-center">

          {/* OUTER RING */}
          <div className="absolute w-full h-full border border-orange-500/20 rounded-full animate-spin-slow-reverse">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 lg:p-3 shadow">
              <FaHtml5 className="text-orange-500 text-3xl lg:text-5xl" />
            </div>

            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 lg:p-3 shadow">
              <FaCss3Alt className="text-blue-500 text-3xl lg:text-5xl" />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full p-2 lg:p-3 shadow">
              <FaJs className="text-yellow-400 text-3xl lg:text-5xl" />
            </div>

            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 lg:p-3 shadow">
              <FaGithub className="text-black text-3xl lg:text-5xl" />
            </div>

          </div>

          {/* MIDDLE RING */}
          <div className="absolute w-[70%] h-[70%] border border-orange-500/20 rounded-full animate-spin-slow">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 lg:p-3 shadow">
              <FaReact className="text-cyan-400 text-2xl lg:text-4xl" />
            </div>

            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 lg:p-3 shadow">
              <SiNextdotjs className="text-black text-2xl lg:text-4xl" />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full p-2 lg:p-3 shadow">
              <FaNodeJs className="text-green-500 text-2xl lg:text-4xl" />
            </div>

          </div>

          {/* INNER RING */}
          <div className="absolute w-[40%] h-[40%] border border-orange-500/20 rounded-full animate-spin-slow-reverse">

            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
              <SiMongodb className="text-green-500 text-xl lg:text-4xl" />
            </div>

            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
              <SiExpress className="text-gray-700 text-xl lg:text-4xl" />
            </div>

          </div>

          {/* CENTER */}
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-500/10 border border-orange-500/30 rounded-full shadow-[0_0_30px_rgba(255,115,0,0.3)]"></div>

        </div>
      </div>
    </section>
  );
}