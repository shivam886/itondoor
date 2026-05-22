import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-brand-darkBg/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2 group outline-none w-max">
            <Logo 
              variant={isScrolled ? "auto" : "dark"} 
              className="group-hover:opacity-90 transition-opacity drop-shadow-sm" 
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-base font-semibold transition-colors",
                isScrolled 
                  ? "text-gray-600 hover:text-brand-electricBlue dark:text-gray-300 dark:hover:text-brand-electricBlue" 
                  : "text-white/90 hover:text-brand-electricBlue"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
          <Link
            to="/book"
            className="bg-brand-electricBlue hover:bg-brand-darkBlue text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-brand-electricBlue/25 hover:-translate-y-0.5"
          >
            Book Service
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden transition-colors",
            isScrolled ? "text-gray-900 dark:text-white" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-brand-darkBg shadow-xl border-t border-gray-100 dark:border-gray-800 p-4 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium p-2 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-brand-electricBlue text-white px-5 py-3 rounded-xl font-medium mt-2"
            >
              Book Service
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
