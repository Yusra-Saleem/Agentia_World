"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Brain, ChevronDown, Bot, Cpu, Shield, Zap, Sparkles, Code, Globe, Activity } from 'lucide-react'
import { useCallback } from 'react'
import Particles from 'react-particles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { MouseCursor } from '@/components/mouse-cursor'
import { GridBackground } from '@/components/grid-background'
import Link from 'next/link'


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Particles loaded', container)
  }, [])

  return (
    <main className="min-h-screen">
     
    <span className="hidden md:block"><MouseCursor /></span> 
     <GridBackground />
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-4">
        <div>
      
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:14px_24px]" />
  <div className="absolute bottom-10 left-0 w-64 h-64 bg-indigo-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />

  <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-700 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              Welcome to Agentia World
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Next Generation AI Solutions for the Modern World
            </p>
          </motion.div>
            
        {/* PANAVERSITY badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center my-10 space-x-2 px-4 py-2 mb-8 rounded-full bg-purple-500/10 border border-purple-500/20"
        >
          <Sparkles className="w-4 h-4  text-purple-500" />
          <span className="text-sm font-medium text-gray-200">POWERED BY PANAVERSITY</span>
        </motion.div>
        
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link href="/get-started">
              <button className="px-8 py-3 rounded-full bg-cyan-500 text-black cursor-pointer font-semibold hover:bg-cyan-300 transition-all duration-200 glow">
                Get Started
              </button>
            </Link>
            <Link href="/technology">
              <button className="px-8 py-3 rounded-full neon-border text-cyan-400 cursor-pointer hover:bg-cyan-400/20 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400 animate-bounce" />
          </motion.div>
        </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Agents",
                description: "Advanced autonomous agents powered by cutting-edge AI",
              },
              {
                icon: Brain,
                title: "Neural Networks",
                description: "Deep learning models that evolve and adapt",
              },
              {
                icon: Shield,
                title: "Secure AI",
                description: "Enterprise-grade security for your AI operations",
              },
              {
                icon: Cpu,
                title: "Processing Power",
                description: "High-performance computing for complex AI tasks",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl neon-border bg-transparent transition-all duration-500 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />
                <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-[1.01]">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Innovations Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">
            AI Innovations
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-400"></div>
            {[
              {
                icon: Code,
                title: "AI Code Generation",
                description: "Revolutionizing software development with AI-generated code.",
              },
              {
                icon: Globe,
                title: "Global AI Integration",
                description: "Seamless AI integration across global platforms.",
              },
              {
                icon: Activity,
                title: "Real-time AI Analytics",
                description: "Providing real-time insights with AI-powered analytics.",
              },
            ].map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-8 p-6 rounded-xl  bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-center ${index % 2 === 0 ? 'ml-auto md:ml-auto' : 'mx-auto md:mr-auto'} w-2/3 mx-auto md:mx-[0px]  md:w-2/3`}
              >
                <div className="absolute top-1/2 transform -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-cyan-400"></div>
                <div className="relative z-10">
                  <innovation.icon className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{innovation.title}</h3>
                  <p className="text-gray-400">{innovation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" lg:my-20 py-[65px] px-4 grid-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "99.9%", label: "Accuracy Rate" },
              { value: "500+", label: "AI Models" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI-Powered Customer Support",
                description: "Implemented an AI-driven customer support system that reduced response times by 50%.",
              },
              {
                icon: Brain,
                title: "Predictive Analytics for Retail",
                description: "Developed predictive analytics models that increased sales by 20% for a major retailer.",
              },
              {
                icon: Shield,
                title: "Automated Quality Control",
                description: "Created an AI system for automated quality control, improving defect detection by 30%.",
              },
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ delay: index * 0.2 }}
                className="relative p-6 rounded-xl bg-gray-700 neon-border hover:bg-cyan-400/5 transition-all duration-300 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                <div className="relative z-10">
                  <caseStudy.icon className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-400">{caseStudy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
