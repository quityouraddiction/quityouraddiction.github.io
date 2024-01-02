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
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay }}
      className={`${width} ${bgColor} ${bgImage} ${padding} rounded-xl shadow-md border-2 ${borderColor}`}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
