import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiBell } from 'react-icons/fi'

const CountdownDrop = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date (7 days from now)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-semibold mb-6"
            >
              LIMITED EDITION DROP
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              EXCLUSIVE
              <br />
              RELEASE
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Be the first to own our most anticipated sneaker of the year. Limited to only 500 pairs worldwide.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-2 border border-white/20"
                  >
                    <div className="text-4xl md:text-5xl font-black">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                  </motion.div>
                  <div className="text-sm text-white/80 font-semibold">
                    {unit.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Notify Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-full flex items-center gap-2 shadow-lg transition-colors"
            >
              <FiBell className="text-xl" />
              Notify Me
            </motion.button>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">500</div>
                <div className="text-sm text-white/80">Limited Pairs</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$299</div>
                <div className="text-sm text-white/80">Special Price</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1st</div>
                <div className="text-sm text-white/80">Priority Access</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Sneaker Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [-5, 5, -5]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Sneaker Placeholder */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                <div className="aspect-square flex items-center justify-center text-9xl">
                  👟
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-3xl -z-10" />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white text-primary px-6 py-3 rounded-full font-bold shadow-lg"
            >
              NEW
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-accent text-white px-6 py-3 rounded-full font-bold shadow-lg"
            >
              LIMITED
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CountdownDrop
