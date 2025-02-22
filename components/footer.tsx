"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Brain, Cpu, Globe, Mail, MapPin, Phone, Zap, Code } from "lucide-react"
import { SiProbot } from "react-icons/si"

const footerSections = [
  {
    title: "Our Solutions",
    links: [
      { name: "AI Agents", href: "/features" },
      { name: "Machine Learning", href: "/features" },
      { name: "Neural Networks", href: "/features" },
      { name: "Natural Language Processing", href: "/features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Technology", href: "/technology" },
      { name: "Features", href: "/features" },
      { name: "Dashboard", href: "/analytics" },
      { name: "Case Studies", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/" },
      { name: "Analytics", href: "/analytics" },
      { name: "Services", href: "/services" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
]

const socialLinks = [
  { icon: Brain, href: "#", label: "AI Community" },
  { icon: Cpu, href: "#", label: "Tech Forum" },
  { icon: Globe, href: "#", label: "Global Network" },
  { icon: Code, href: "#", label: "Developer Portal" },
]

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    if (response.ok) {
      alert("Subscribed successfully!")
      setEmail("")
    } else {
      alert("Failed to subscribe. Please try again.")
    }
  }

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <SiProbot className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Agentia World
              </h2>
            </motion.div>
            <p className="text-sm max-w-xs">
              Pioneering the future of AI with innovative solutions that transform industries and empower businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  title={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.1 }}
                className="text-lg font-semibold text-cyan-400"
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info and newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>+92310-2983718</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-600" />
              <span>info@agentiaworld.com</span>
            </div>
          </div>
          <form onSubmit={handleSubscribe} className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <button type="submit" className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-r-md hover:bg-cyan-300 transition-colors">
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Agentia World. All rights reserved.
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-36 h-36 bg-purple-950 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-cyan-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800 rounded-full filter blur-[64px] opacity-5 animate-pulse" /> */}
    </footer>
  )
}

