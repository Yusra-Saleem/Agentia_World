"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Brain, ChevronDown, Menu, X } from 'lucide-react'
import { SiProbot } from 'react-icons/si'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Technology', href: '/technology' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Features', href: '/features' },
    { name: 'Services', href: '/services' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <SiProbot className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold neon-text">Agentia World</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/get-started"
              className="px-4 py-2 rounded-full neon-border text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900/90"
          >
            <div className="px-2 pt-2 pb-3 text-center mx-auto space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/get-started"
                className="block w-full mt-4 px-4 py-2 rounded-full neon-border text-cyan-400 hover:bg-cyan-400/10"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
