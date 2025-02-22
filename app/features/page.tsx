"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Bot, Brain, Cpu, Network, Shield, Zap, ChevronRight, BarChart, Clock, ChevronDown } from 'lucide-react'

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Bot,
      title: "Autonomous Agents",
      description: "Self-learning AI agents that adapt to your needs",
      capabilities: ["Natural Language Processing", "Decision Making", "Task Automation"]
    },
    {
      icon: Brain,
      title: "Cognitive Computing",
      description: "Advanced pattern recognition and learning systems",
      capabilities: ["Pattern Recognition", "Predictive Analytics", "Behavioral Learning"]
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description: "Enterprise-grade security for all AI operations",
      capabilities: ["Encryption", "Access Control", "Audit Trails"]
    },
    {
      icon: Network,
      title: "Neural Networks",
      description: "Deep learning networks that evolve over time",
      capabilities: ["Deep Learning", "Network Optimization", "Model Training"]
    },
    {
      icon: BarChart,
      title: "Analytics Engine",
      description: "Real-time data analysis and visualization",
      capabilities: ["Real-time Processing", "Data Visualization", "Trend Analysis"]
    },
    {
      icon: Clock,
      title: "Time Series Analysis",
      description: "Temporal pattern recognition and prediction",
      capabilities: ["Forecasting", "Anomaly Detection", "Trend Prediction"]
    }
  ]

  return (
    <main className="min-h-screen pt-20">
       
      {/* Hero Section */}
      <section className="relative h-[93vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent"></div>
          <div className="absolute inset-0 grid-background opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
              AI Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered features designed for the future
            </p>
          </motion.div>
        </div>
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400 animate-bounce" />
          </motion.div>
      </section>

      {/* Features Grid */}
      <section ref={containerRef} className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl neon-border hover:bg-cyan-400/5 transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.capabilities.map((capability, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                      {capability}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="rounded-2xl neon-border overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-8 neon-text text-center">
                Interactive AI Demo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Real-time Processing",
                    value: "99.9%",
                    subtitle: "Accuracy Rate"
                  },
                  {
                    title: "Neural Networks",
                    value: "500ms",
                    subtitle: "Response Time"
                  },
                  {
                    title: "Active Learning",
                    value: "24/7",
                    subtitle: "Availability"
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ delay: index * 0.3 }}
                    className="text-center p-6 rounded-lg bg-black/30"
                  >
                    <h3 className="text-lg text-gray-300 mb-2">{stat.title}</h3>
                    <p className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</p>
                    <p className="text-gray-400">{stat.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}