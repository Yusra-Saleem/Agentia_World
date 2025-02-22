"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Brain, Cpu, Network, Workflow, Lock, Zap } from 'lucide-react'

export default function Technology() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technologies = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Advanced deep learning models that adapt and evolve",
      details: [
        "Multi-layer perceptrons",
        "Convolutional networks",
        "Recurrent architectures",
        "Transformer models"
      ]
    },
    {
      icon: Cpu,
      title: "Quantum Processing",
      description: "Next-generation quantum computing capabilities",
      details: [
        "Quantum algorithms",
        "Superposition states",
        "Quantum entanglement",
        "Quantum error correction"
      ]
    },
    {
      icon: Network,
      title: "Neural Architecture",
      description: "Optimized network structures for AI processing",
      details: [
        "AutoML systems",
        "Architecture search",
        "Hyperparameter optimization",
        "Model compression"
      ]
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
              AI Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge AI technologies powering the next generation of intelligent solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Grid */}
      <section ref={containerRef} className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            style={{ y, opacity }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl neon-border transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-cyan-950/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <div className="relative z-10">
                  <tech.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                  <p className="text-gray-400 mb-6">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">
            How Our AI Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Data Collection", description: "Gathering diverse datasets" },
              { step: "2", title: "Processing", description: "AI-powered analysis" },
              { step: "3", title: "Learning", description: "Pattern recognition" },
              { step: "4", title: "Optimization", description: "Continuous improvement" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ delay: index * 0.3 }}
                className="relative p-6 rounded-xl neon-border text-center"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-cyan-400 text-cyan-400 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="relative p-8 rounded-2xl neon-border overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Lock className="w-16 h-16 text-cyan-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
                <p className="text-gray-400 mb-6">
                  Our AI systems are protected by multiple layers of security, ensuring your data remains safe and private at all times.
                </p>
                <button className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-200 glow">
                  Learn More About Security
                </button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {[
                  "End-to-end encryption",
                  "Regular security audits",
                  "Compliance certifications",
                  "24/7 monitoring"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                    transition={{ delay: index * 0.2 }}
                    className="p-4 rounded-lg bg-black/50 border border-cyan-400/30"
                  >
                    <p className="text-gray-300">{feature}</p>
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