/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTimes, faBars, faChevronDown, faHome, faBook, faGraduationCap, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  to: string;
  label: string;
  icon: any;
}

interface NavbarProps {
  isScrolled: boolean;
}

const menuItems: MenuItem[] = [
  { to: 'home', label: 'Home', icon: faHome },
  { to: 'programs', label: 'Programs', icon: faGraduationCap },
  { to: 'resources', label: 'Resources', icon: faBook },
  { to: 'about', label: 'About', icon: faInfoCircle },
];

const Navbar: React.FC<NavbarProps> = React.memo(({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Set active menu item
  const handleSetActive = useCallback((to: string) => {
    setActiveItem(to);
  }, []);

  // Join Now redirect to WhatsApp
  const handleJoinNow = useCallback(() => {
    window.open("https://chat.whatsapp.com/JMxiU78zTJPEVpkHTd5ViS?mode=r_c", "_blank");
    closeMobileMenu();
  }, [closeMobileMenu]);

  const renderMenuItem = (item: MenuItem, index: number, isMobile: boolean = false) => (
    <li key={index} className="group">
      <ScrollLink
        to={item.to}
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        onSetActive={handleSetActive}
        className={`flex items-center px-4 py-3 font-medium transition-all rounded-lg outline-none cursor-pointer ${
          activeItem === item.to 
            ? 'text-gold bg-gold/10 font-semibold' 
            : 'text-dark hover:text-gold hover:bg-gold/5'
        } focus:text-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 ${
          isMobile ? 'text-base' : ''
        }`}
        onClick={closeMobileMenu}
        tabIndex={isMobileMenuOpen || !isMobile ? 0 : -1}
        role="link"
        aria-label={`Navigate to ${item.label} section`}
      >
        {isMobile && (
          <FontAwesomeIcon 
            icon={item.icon} 
            className="mr-3 transition-transform text-gold group-hover:translate-x-1" 
            size="sm"
          />
        )}
        {item.label}
        {!isMobile && (
          <motion.div 
            className="w-2 h-2 ml-2 rounded-full opacity-0 bg-gold group-hover:opacity-100"
            initial={false}
            animate={{ opacity: activeItem === item.to ? 1 : 0 }}
          />
        )}
      </ScrollLink>
    </li>
  );

  // Animation variants for dropdown
  const dropdownVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out z-50 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        {/* Logo + Brand Name */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="flex items-center flex-shrink-0 min-w-0 p-1 transition-all rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
        >
          <div className="flex items-center">
            <img
              src="/images/Schoolofmlogo.png"
              alt="School of Mathematics Nigeria Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-8 w-8 sm:h-10 sm:w-10' : 'h-10 w-10 sm:h-12 sm:w-12'
              }`}
            />
            <span className="ml-2 text-sm font-extrabold leading-tight tracking-tight text-purple sm:text-base md:text-lg whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] sm:max-w-none">
              School of Mathematics Nigeria
            </span>
          </div>
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="items-center hidden ml-auto space-x-1 lg:flex xl:space-x-2">
          {menuItems.map((item, index) => renderMenuItem(item, index))}
          <li>
            <motion.button
              onClick={handleJoinNow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-5 py-2.5 text-white transition-all rounded-full bg-gradient-to-r from-purple to-dark-purple hover:from-purple/90 hover:to-dark-purple/90 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 font-bold whitespace-nowrap"
              aria-label="Join Now"
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> 
              Join Now
            </motion.button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <motion.button
          ref={toggleButtonRef}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-10 h-10 ml-2 transition-colors rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 bg-gold/10 hover:bg-gold/20"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <FontAwesomeIcon 
            icon={isMobileMenuOpen ? faTimes : faBars} 
            className="text-xl transition-transform text-dark" 
          />
        </motion.button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute left-0 right-0 z-50 overflow-hidden bg-white shadow-xl top-full lg:hidden"
              id="mobile-menu"
            >
              <div className="container px-4 py-3 mx-auto border-t border-gray-100">
                <motion.ul 
                  className="space-y-2"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      className="group"
                    >
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        spy={true}
                        onSetActive={handleSetActive}
                        className={`flex items-center px-4 py-3 font-medium transition-all rounded-lg outline-none cursor-pointer text-base ${
                          activeItem === item.to 
                            ? 'text-gold bg-gold/10 font-semibold' 
                            : 'text-dark hover:text-gold hover:bg-gold/5'
                        } focus:text-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50`}
                        onClick={closeMobileMenu}
                        tabIndex={0}
                        role="link"
                        aria-label={`Navigate to ${item.label} section`}
                      >
                        <FontAwesomeIcon 
                          icon={item.icon} 
                          className="mr-3 transition-transform text-gold group-hover:translate-x-1" 
                          size="sm"
                        />
                        {item.label}
                      </ScrollLink>
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* Join Now Button */}
                <motion.div
                  variants={itemVariants}
                  className="pt-4 mt-4 border-t border-gray-100"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleJoinNow}
                    className="flex items-center justify-center w-full px-4 py-3 font-bold text-white transition-all rounded-full shadow-md bg-gradient-to-r from-purple to-dark-purple hover:from-purple/90 hover:to-dark-purple/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 group"
                    aria-label="Join Now on WhatsApp"
                  >
                    <FontAwesomeIcon 
                      icon={faUserPlus} 
                      className="mr-2 transition-transform group-hover:scale-110" 
                    />
                    Join Now
                  </motion.button>
                  <p className="mt-2 text-xs text-center text-gray-500">
                    Connect with us on WhatsApp
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;