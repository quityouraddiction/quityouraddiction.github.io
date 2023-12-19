import React from "react";
import { motion } from "framer-motion";

const Modal = ({ children, width, bgColor, borderColor, delay }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay }}

      className={`${width} ${bgColor} ${borderColor} p-6 rounded-xl shadow-md border-2`}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
