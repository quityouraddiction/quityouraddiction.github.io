import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";


const NavItem = ({to, children}) => {
    return (
        <motion.li className="text-base font-semibold" whileHover={{scale : 1.1, color : "#E27022"}}>
            <Link to={to}>{children}</Link>
        </motion.li>
    );
}

export default NavItem;