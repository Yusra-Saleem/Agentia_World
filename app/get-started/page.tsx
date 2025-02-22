"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const GetStarted = () => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
    selectedPlan: ''
  })

  const handlePlanSelect = (planName: string) => {
    setFormData(prev => ({ ...prev, selectedPlan: planName }))
    setStep(2)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form')
      }

      if (data.success) {
        // Clear form
        setFormData({
          name: '',
          email: '',
          company: '',
          useCase: '',
          selectedPlan: ''
        })
        // Show success message
        setStep(3)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const plans = [
    {
        name: "Starter",
        price: "99",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mt-20 neon-text">
            Get Started with Agentia
            </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Join the future of AI-powered solutions
          </p>
        </motion.div>

        {error && (
          <div className="max-w-xl mx-auto mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
            {error}
          </div>
        )}

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelect(plan.name)}
                  className="w-full py-2 px-4 bottom-0 mb-0 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors duration-200"
                >
                  Select Plan
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Use Case</label>
                <textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="inline-block p-4 rounded-full bg-cyan-400/20 mb-6">
              <CheckCircle className="h-12 w-12 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Thank You for Choosing Agentia!</h2>
            <p className="text-gray-400 mb-8">
              We'll be in touch with you shortly to get you started on your AI journey.
            </p>
            <button
              onClick={() => setStep(1)}
              className="py-2 px-6 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors duration-200"
            >
              Back to Plans
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default GetStarted 