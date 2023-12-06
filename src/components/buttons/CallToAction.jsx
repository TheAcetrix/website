import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

const CallToAction = ({ children, icon, href, type, variants }) => {
  return href ? (
    <motion.a
      variants={variants}
      href={href}
      target="_blank"
      className="w-full"
    >
      <button className="flex items-center w-full justify-center text-white bg-[#A13CFB] border-2 outline-none border-white rounded-xl px-4 py-2.5 text-lg font-semibold cursor-pointer">
        {icon && (
          <span className="bg-white text-[#A13CFB] rounded-2xl w-8 h-8 flex items-center justify-center me-2">
            {icon}
          </span>
        )}
        {children}
      </button>
    </motion.a>
  ) : (
    <motion.button
      variants={variants}
      className="flex items-center w-full justify-center text-white bg-[#A13CFB] border-2 outline-none border-white rounded-xl px-4 py-2.5 text-lg font-semibold cursor-pointer"
      type={type || "button"}
    >
      {icon && (
        <span className="bg-white text-[#A13CFB] rounded-2xl w-8 h-8 flex items-center justify-center me-2">
          {icon}
        </span>
      )}
      {children}
    </motion.button>
  );
};

export default CallToAction;
