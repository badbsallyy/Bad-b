"use client";
import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: [0, 1],
        y: [10, 0],
      },
      {
        duration: 0.3,
        delay: stagger(0.05),
      }
    );
  }, [scope, animate]);

  return (
    <motion.div
      ref={scope}
      initial="hidden"
      animate="visible"
      className={cn("inline-block relative", className)}
    >
      <AnimatedWord words={words} duration={duration} />
    </motion.div>
  );
};

const AnimatedWord = ({
  words,
  duration,
}: {
  words: string[];
  duration: number;
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const interval = setInterval(() => {
      animate(
        scope.current,
        { opacity: [1, 0], y: [0, -10] },
        { duration: 0.3 }
      ).then(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        animate(scope.current, { opacity: [0, 1], y: [10, 0] }, { duration: 0.3 });
      });
    }, duration);
    return () => clearInterval(interval);
  }, [animate, duration, scope, words.length]);

  return (
    <motion.span ref={scope} className="inline-block">
      {words[currentWord]}
    </motion.span>
  );
};
