"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Bot, Brain, Shield, Zap, Check, Star } from 'lucide-react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Autonomous AI agents that learn and adapt to your needs",
      features: ["24/7 Operation", "Self-Learning", "Task Automation", "Natural Language"]
    },
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Advanced neural networks for complex problem solving",
      features: ["Pattern Recognition", "Deep Learning", "Predictive Analytics", "Adaptive Systems"]
    },
    {
      icon: Shield,
      title: "Security AI",
      description: "AI-powered security solutions for enterprise protection",
      features: ["Threat Detection", "Real-time Monitoring", "Automated Response", "Risk Assessment"]
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "99",
      description: "Perfect for small teams and startups",
      features: [
        "5 AI Agents",
        "Basic Neural Networks",
        "Standard Security",
        "8/5 Support",
        "API Access"
      ]
    },
    {
      name: "Professional",
      price: "299",
      description: "Ideal for growing businesses",
      features: [
        "20 AI Agents",
        "Advanced Neural Networks",
        "Enhanced Security",
        "24/7 Support",
        "Full API Access",
        "Custom Integration"
      ]
    },
    {
      name: "Enterprise",
      price: "999",
      description: "For large organizations",
      features: [
        "Unlimited AI Agents",
        "Custom Neural Networks",
        "Military-grade Security",
        "Dedicated Support",
        "Full API Access",
        "Custom Integration",
        "On-premise Deployment"
      ]
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "The AI capabilities have transformed our business operations completely.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Director of Innovation, FutureTech",
      content: "Incredible performance and reliability. The AI agents are game-changing.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Head of AI, DataFlow",
      content: "The most advanced AI solution we've implemented. Outstanding results.",
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 neon-text">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Empower your business with our cutting-edge AI services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 grid-background opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl neon-border transition-all duration-500 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Bottom rising gradient background */}
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-cyan-950/50 via-cyan-900/20 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                
                {/* Content */}
                <div className="relative z-10 transform transition-transform duration-500">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 transform transition-transform group-hover:translate-y-[-4px] duration-700" />
                  <h3 className="text-2xl font-semibold mb-4 transform transition-transform group-hover:translate-y-[-4px] duration-700 delay-[50ms]">{service.title}</h3>
                  <p className="text-gray-400 mb-6 transform transition-transform group-hover:translate-y-[-4px] duration-700 delay-[100ms]">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-gray-300 transform transition-transform group-hover:translate-y-[-4px]"
                        style={{ transitionDuration: '700ms', transitionDelay: `${150 + idx * 50}ms` }}
                      >
                        <Check className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl neon-border bg-transparent transition-all duration-500 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Top falling gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-cyan-900/30 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 transform transition-transform group-hover:translate-y-[4px] duration-700">{plan.name}</h3>
                  <div className="flex items-end mb-6 transform transition-transform group-hover:translate-y-[4px] duration-700 delay-[50ms]">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <p className="text-gray-400 mb-6 transform transition-transform group-hover:translate-y-[4px] duration-700 delay-[100ms]">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-gray-300 transform transition-transform group-hover:translate-y-[4px]"
                        style={{ transitionDuration: '700ms', transitionDelay: `${150 + idx * 50}ms` }}
                      >
                        <Check className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="w-full px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400  duration-200 glow transform transition-transform group-hover:translate-y-[4px]"
                    style={{ transitionDuration: '700ms', transitionDelay: `${150 + plan.features.length * 50}ms` }}
                  >
                    Get Started
                  </button>
                </div>

                {/* Add a style tag for the hover effect */}
                <style jsx>{`
                  .group:hover > div:first-of-type {
                    transform: translateY(0);
                  }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl neon-border bg-black/30"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="relative p-12 rounded-2xl neon-border overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join the AI revolution and take your operations to the next level
              </p>
              <button className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-200 glow">
                Get Started Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}