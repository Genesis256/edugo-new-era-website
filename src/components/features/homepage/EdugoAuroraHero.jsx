// src/components/features/homepage/EdugoAuroraHero.jsx
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Using react-icons for this
import { Link } from 'react-router-dom'; // For the CTA button
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

// Edugo Brand Colors
const EDUGO_COLORS_PRIMARY = '#09577c'; // var(--color-brand-primary)
const EDUGO_COLORS_SECONDARY = '#5ec5f0'; // var(--color-brand-secondary)
const EDUGO_COLORS_ACCENT_CYAN = '#06b6d4'; // Tailwind's cyan-500

// Adjusted COLORS_TOP array for Edugo theme
// We want a smooth transition that feels sophisticated and educational.
// Let's use variations of our brand colors or complementary ones.
const COLORS_TOP = [
  EDUGO_COLORS_PRIMARY, // Dark Blue/Teal
  EDUGO_COLORS_ACCENT_CYAN, // Bright Cyan
  EDUGO_COLORS_SECONDARY, // Light Sky Blue
  '#1E88E5', // A slightly richer blue (complementary)
];

const EdugoAuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 12, // Slightly longer duration for smoother feel
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color]); // Added color to dependency array, though animate might handle it

  const backgroundImage = useMotionTemplate`radial-gradient(125% 150% at 50% 0%, #020617 50%, ${color})`; // Keep dark base for stars
  // For educational, maybe a slightly lighter dark base or a gradient from dark blue:
  // const backgroundImage = useMotionTemplate`radial-gradient(125% 150% at 50% 0%, #0A2F49 40%, ${color})`;

  // Border and BoxShadow for the button, using the animated color for a dynamic effect
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 2px 12px ${color}`; // Softened shadow

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-slate-900 px-4 py-24 text-gray-200"
      // Using bg-slate-900 which is dark, this helps the text-gray-200 be visible by default
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-2 inline-block rounded-full bg-slate-700/60 px-4 py-1.5 text-sm shadow-md">
          Raih Potensi Akademik Anda!
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-white to-slate-300 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl md:leading-tight">
          Solusi Pendampingan Akademik Profesional <br /> Edugo New Era
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-slate-300">
          Kami hadir untuk membantu Anda mengatasi setiap tantangan dalam skripsi, tesis, disertasi,
          dan riset. Percayakan perjalanan akademik Anda kepada tim ahli kami.
        </p>
        <motion.custom // Using motion.custom for <Link>
          as={Link} // Render as react-router Link
          to="/layanan" // Link to services page
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.025, // Slightly more noticeable hover
          }}
          whileTap={{
            scale: 0.975,
          }}
          className="group relative flex w-fit items-center gap-2 rounded-full bg-slate-800/50 px-6 py-3 text-lg text-slate-100 transition-colors hover:bg-slate-800/80"
          // Updated button styling for better contrast and feel
        >
          Jelajahi Layanan Kami
          <FiArrowRight className="transition-transform group-hover:translate-x-1 group-active:translate-x-0.5" />
        </motion.custom>
      </div>

      {/* Background Stars - Thematic for reaching for knowledge/success */}
      <div className="absolute inset-0 z-0 opacity-70">
        {' '}
        {/* Added opacity to tone down stars slightly */}
        <Canvas>
          <Stars radius={60} count={3000} factor={4.5} fade speed={1.5} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default EdugoAuroraHero;
