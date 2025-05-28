'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      let minDistance = Number.POSITIVE_INFINITY;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (rect.top < window.innerHeight && distance < minDistance) {
            minDistance = distance;
            current = item.id;
          }
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur relative">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-4 py-1.5 rounded-full transition-colors z-10`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }} // smoother spring
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isActive ? "text-gray-900" : "text-white hover:text-gray-300"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
