// src/components/common/AnimatedHeroBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Orb = ({ initialX, initialY, size, color, animationDuration, delay }) => {
  return (
    <motion.circle
      cx={initialX}
      cy={initialY}
      r={size / 2}
      fill={color}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 0.3, 0.4, 0.3, 0], scale: 1 }}
      transition={{
        duration: animationDuration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop', // Loop the opacity smoothly
        delay: delay,
      }}
    />
  );
};

// Variation of Orb with more movement
const MovingOrb = ({ size, color, animationDuration, delay, path }) => {
  return (
    <motion.path
      d={path} // Using a path allows more complex shapes or movements
      fill={color}
      initial={{ opacity: 0, pathOffset: 1, pathLength: 1 }}
      animate={{
        opacity: [0, 0.1, 0.15, 0.1, 0],
        pathOffset: [1, 0.5, 0], // Example: Animate along a path segment
        pathLength: [1, 1, 1],
      }}
      transition={{
        duration: animationDuration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
        delay: delay,
        opacity: { duration: animationDuration * 0.8, repeat: Infinity, ease: 'easeInOut' }, // Separate opacity
      }}
      style={{ mixBlendMode: 'soft-light' }} // Blending for more subtlety
    />
  );
};

const AnimatedHeroBackground = () => {
  const orbsData = [
    // Orb type 1: Gentle pulsing opacity
    {
      id: 1,
      type: 'pulse',
      initialX: '20%',
      initialY: '30%',
      size: 200,
      color: 'rgba(9, 87, 124, 0.3)',
      duration: 20,
      delay: 0,
    }, // Primary color based
    {
      id: 2,
      type: 'pulse',
      initialX: '80%',
      initialY: '20%',
      size: 300,
      color: 'rgba(94, 197, 240, 0.3)',
      duration: 25,
      delay: 2,
    }, // Secondary color based
    {
      id: 3,
      type: 'pulse',
      initialX: '50%',
      initialY: '70%',
      size: 250,
      color: 'rgba(9, 87, 124, 0.25)',
      duration: 22,
      delay: 4,
    },
    {
      id: 4,
      type: 'pulse',
      initialX: '10%',
      initialY: '80%',
      size: 180,
      color: 'rgba(94, 197, 240, 0.2)',
      duration: 28,
      delay: 6,
    },
    {
      id: 5,
      type: 'pulse',
      initialX: '90%',
      initialY: '60%',
      size: 220,
      color: 'rgba(0, 188, 212, 0.2)',
      duration: 23,
      delay: 1,
    }, // Accent (cyan-ish)

    // Consider adding some smaller, faster, more subtly moving elements if desired
    // For instance, elements that slowly drift across the screen or along paths.
    // Below is an example of a path-based moving element. The path 'd' attribute can be complex.
    // { id: 6, type: 'move', path: "M100,100 Q200,0 300,100 T500,100", size: 50, color: "rgba(94, 197, 240, 0.15)", duration: 30, delay: 5 },
    // { id: 7, type: 'move', path: "M800,400 Q700,500 600,400 T400,400", size: 60, color: "rgba(9, 87, 124, 0.1)", duration: 35, delay: 8 },
  ];

  return (
    <motion.div
      className="absolute inset-0 w-full h-full overflow-hidden z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
          </filter>
        </defs>
        <g filter="url(#softBlur)">
          {orbsData.map((orb) => {
            if (orb.type === 'pulse') {
              return (
                <Orb
                  key={orb.id}
                  initialX={orb.initialX}
                  initialY={orb.initialY}
                  size={orb.size}
                  color={orb.color}
                  animationDuration={orb.duration}
                  delay={orb.delay}
                />
              );
            }
            // if (orb.type === 'move') {
            //   return (
            //     <MovingOrb
            //         key={orb.id}
            //         size={orb.size}
            //         color={orb.color}
            //         animationDuration={orb.duration}
            //         delay={orb.delay}
            //         path={orb.path}
            //     />
            //   )
            // }
            return null;
          })}
        </g>
      </svg>
    </motion.div>
  );
};

export default AnimatedHeroBackground;
