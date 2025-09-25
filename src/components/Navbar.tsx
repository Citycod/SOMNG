/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  name: string;
  to: string;
  dropdown?: string[];
}

const menuItems: MenuItem[] = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Pricing", to: "pricing" },
  {
    name: "Pages",
    to: "pages",
    dropdown: ["Our Team", "Testimonial", "404 Page"],
  },
  {
    name: "Blog",
    to: "blog",
    dropdown: ["Blog Grid", "Blog Details"],
  },
  { name: "Contact", to: "contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const toggleDropdown = useCallback((name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          City<span className="text-blue-500">TopUp</span>
        </motion.h1>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-blue-500"
              >
                {item.name}
              </ScrollLink>

              {/* Dropdown (desktop) */}
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                  <ul className="py-2">
                    {item.dropdown.map((dropdownItem, i) => (
                      <motion.li
                        key={i}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        {dropdownItem}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col space-y-2 px-4 py-3">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-500"
                    onClick={() =>
                      item.dropdown ? toggleDropdown(item.name) : setIsOpen(false)
                    }
                  >
                    <ScrollLink to={item.to} smooth={true} duration={500}>
                      {item.name}
                    </ScrollLink>
                    {item.dropdown && (
                      <span className="ml-2">
                        {activeDropdown === item.name ? "▲" : "▼"}
                      </span>
                    )}
                  </div>

                  {/* Dropdown (mobile) */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.ul
                      className="pl-4 mt-2 space-y-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.dropdown.map((dropdownItem, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-600 hover:text-blue-500 cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          {dropdownItem}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

