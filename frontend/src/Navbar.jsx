import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, UserPlus, LayoutDashboard, HandCoins } from "lucide-react";
import { Link } from "react-router-dom"; 
import { Logo } from "./Logo";

function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    {
      name: "Home",
      icon: <Home className="h-5 w-3" />,
      href: "/"
    },
    {
      name: "Sign Up",
      icon: <UserPlus className="h-5 w-3" />,
      href: "/signup"
    },
    {
      name: "Sign in",
      icon: <UserPlus className="h-5 w-3" />,
      href: "/signin"
    },
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-3" />,
      href: "/studashboard"
    },
    {
      name: "Donation",
      icon: <HandCoins className="h-5 w-3" />,
      href: "/donation",
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="fixed top-0 left-0 right-0 z-50 w-full h-15 bg-white/10 dark:bg-black/10 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 px-4 py-1"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="scale-100">
        <Logo />
        </div>
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              to={item.href}
              key={item.name}
              onClick={() => setActive(item.name)}
              className="no-underline"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                className={`flex items-center space-x-2 px-4 py-2  ${
                  active === item.name ? 'bg-black/80' : 'bg-black'
                } text-white`}
                
              >
                {item.icon}
                <span>{item.name}</span>
              </HoverBorderGradient>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;