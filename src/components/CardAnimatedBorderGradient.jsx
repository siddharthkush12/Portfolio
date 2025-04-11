import React from "react";
import { motion } from "framer-motion";

function CardAnimatedBorderGradient({ cardItem }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="relative h-[300px] w-[300px] overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl"
    >
      <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

 
      <div className="flex flex-col items-center justify-center h-full w-full bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
        <div className="w-full flex justify-center mb-4">
          <img
            src={cardItem.image}
            alt="project"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default CardAnimatedBorderGradient;