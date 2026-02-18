"use client";

import { useState } from "react";
import Link from "next/link";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import type { NextPage } from "next";

const Landing: NextPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <ShaderGradientCanvas
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <ShaderGradient
          type="plane"
          animate="on"
          uSpeed={0.3}
          uStrength={1.5}
          uDensity={1.5}
          uFrequency={0}
          uAmplitude={0}
          color1="#606080"
          color2="#8d7dca"
          color3="#212121"
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          cDistance={2.8}
          cPolarAngle={80}
          cAzimuthAngle={180}
          cameraZoom={9.1}
          brightness={1}
          envPreset="city"
          grain="on"
          grainBlending={0}
          lightType="3d"
          reflection={0.1}
        />
      </ShaderGradientCanvas>

      <div className="relative z-10 flex flex-col min-h-screen px-6 md:px-12 pt-10 pb-24">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-6xl md:text-7xl text-white tracking-wider select-none"
        >
          Cachemarket
        </motion.h1>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="flex items-end justify-center px-6 pb-6 pt-4">
            {/* Open App button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#f5f0e8] text-[#1a1a2e] text-lg font-bold tracking-wide hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Open App</span>
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={hovered ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <IconArrowUpRight className="h-5 w-5" />
                </motion.span>
              </Link>
            </motion.div>

            {/* About us */}
            <Link
              href="/about"
              className="absolute right-6 bottom-5 px-4 py-2 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-white/70 text-base tracking-wide cursor-pointer hover:bg-white/15 hover:text-white transition-all"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
