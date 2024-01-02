import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";


const NavItem = ({to, children}) => {
    return (
        <motion.li className="text-base font-semibold hover:text-primary" whileHover={{scale : 1.1}}>
            <Link to={to}>{children}</Link>
        </motion.li>
    );
}

export default NavItem;