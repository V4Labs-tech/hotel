"use client";

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

function AboutUs() {
  const ref = useRef(null);
  // Animate when 30% of the component is visible, and only animate once
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Variants for the container to orchestrate staggered animations
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between each child's animation
      },
    },
  };

  // Variants for each item to fade and slide in
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    // Add a ref to the section and overflow-hidden to contain animations
    <section ref={ref} className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main motion container */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Animated Section Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-kaushan-script font-bold text-gray-800"
          >
            Welcome to Dodas Palace
          </motion.h2>

          {/* Animated Divider */}
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gray-800 mx-auto mt-4 mb-8"
          ></motion.div>

          {/* Animated Paragraph Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed text-gray-600"
          >
            Hotel Dodas Palace Jaipur offers stylish yet budget-friendly
            accommodation with well-appointed modern rooms designed for
            comfort and elegance. Known as one of the best economy hotels in
            Jaipur, it features an international cuisine restaurant, rooftop
            lounge, sports bar, 24x7 kitchen, conference hall, and valet
            parking. Each room blends warmth and functionality, showcased
            through smooth cinematic visuals that highlight spacious layouts,
            cozy bedding, and inviting interiors—ensuring guests feel at home
            the moment they step in.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;