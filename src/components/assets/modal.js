import React from "react";
import { motion } from "framer-motion";

const Modal = ({
  children,
  width,
  bgColor,
  bgImage,
  borderColor,
  padding,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`${width} ${bgColor} ${bgImage} ${padding} rounded-xl shadow-md border-2 ${borderColor}`}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
