import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiCheck } from 'react-icons/fi'

const EmailSignup = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(135deg, #FF6B35 0%, #F77F00 50%, #004E89 100%)',
            'linear-gradient(135deg, #004E89 0%, #FF6B35 50%, #F77F00 100%)',
            'linear-gradient(135deg, #F77F00 0%, #004E89 50%, #FF6B35 100%)',
            'linear-gradient(135deg, #FF6B35 0%, #F77F00 50%, #004E89 100%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0"
      />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <FiMail className="text-4xl text-primary" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            JOIN THE STRIDE COMMUNITY
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new releases, special offers, and style tips. Be the first to know about limited edition drops!
          </p>

          {/* Email Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-lg text-dark placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                  aria-label="Email address"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-dark hover:bg-gray-800 text-white font-bold rounded-full shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <FiCheck className="text-xl" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 text-white font-semibold"
              >
                ✨ Welcome to the STRIDE family! Check your inbox.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: '🎁', text: 'Exclusive Offers' },
              { icon: '⚡', text: 'Early Access' },
              { icon: '📦', text: 'Free Shipping' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <div className="text-white font-semibold">{benefit.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Privacy Note */}
          <p className="text-white/70 text-sm mt-8">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EmailSignup
