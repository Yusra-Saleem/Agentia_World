"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Brain, Users, Clock, Activity } from 'lucide-react'

const data = [
  { name: 'Jan', value: 4000, users: 2400, accuracy: 85 },
  { name: 'Feb', value: 3000, users: 1398, accuracy: 87 },
  { name: 'Mar', value: 2000, users: 9800, accuracy: 86 },
  { name: 'Apr', value: 2780, users: 3908, accuracy: 89 },
  { name: 'May', value: 1890, users: 4800, accuracy: 88 },
  { name: 'Jun', value: 2390, users: 3800, accuracy: 90 },
  { name: 'Jul', value: 3490, users: 4300, accuracy: 91 },
]

export default function Analytics() {
  const [isVisible, setIsVisible] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    {
      icon: Brain,
      title: "AI Models",
      value: "500+",
      change: "+12%",
      description: "Active neural networks"
    },
    {
      icon: Users,
      title: "Users",
      value: "50K+",
      change: "+25%",
      description: "Monthly active users"
    },
    {
      icon: Clock,
      title: "Processing",
      value: "2ms",
      change: "-15%",
      description: "Average response time"
    },
    {
      icon: Activity,
      title: "Accuracy",
      value: "99.9%",
      change: "+2%",
      description: "Model precision"
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 neon-text">
              AI Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-time insights into our AI system's performance and metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl neon-border bg-black/30 transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]"
              >
                <div className="flex items-start justify-between mb-4">
                  <metric.icon className="w-8 h-8 text-cyan-400" />
                  <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-500'}`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-300 mb-1">{metric.title}</h3>
                <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              className="p-6 rounded-xl neon-border bg-black/30 transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]"
            >
              <h3 className="text-xl font-semibold mb-6">AI Performance Trends</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #475569',
                      }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              className="p-6 rounded-xl neon-border bg-black/30 transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]"
            >
              <h3 className="text-xl font-semibold mb-6">User Engagement</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #475569',
                      }}
                    />
                    <Area type="monotone" dataKey="users" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.1} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">AI Growth Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-cyan-400/30"></div>
            {[
              {
                year: "2023",
                title: "Launch",
                description: "Initial release of core AI capabilities"
              },
              {
                year: "2024 Q1",
                title: "Enhanced Learning",
                description: "Implementation of advanced learning algorithms"
              },
              {
                year: "2024 Q2",
                title: "Scale Up",
                description: "Expanded processing capacity and user base"
              },
              {
                year: "2024 Q3",
                title: "Global Reach",
                description: "International deployment and localization"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'justify-end' : ''} mb-12`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="p-6 rounded-xl neon-border bg-black/30 transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]">
                    <span className="text-cyan-400 font-bold">{milestone.year}</span>
                    <h3 className="text-xl font-semibold my-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}