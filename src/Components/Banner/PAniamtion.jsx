"use client";

import { motion } from "framer-motion";

const text =
  "Timeless fashion, crafted for every moment.";

const words = text.split(" ");

const containerVariants= {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const wordVariants= {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AnimatedParagraph() {
  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-6 max-w-2xl md:text-md lg:text-base leading-relaxed text-gray-100"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}