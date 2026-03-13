import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Professional Runner',
      avatar: '👩',
      rating: 5,
      text: 'These sneakers have completely transformed my running experience. The cushioning is incredible and they feel like walking on clouds!',
      location: 'New York, USA'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Fitness Enthusiast',
      avatar: '👨',
      rating: 5,
      text: 'Best investment I\'ve made for my workout routine. Lightweight, stylish, and incredibly comfortable. Worth every penny!',
      location: 'Los Angeles, USA'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Fashion Blogger',
      avatar: '👩‍🦰',
      rating: 5,
      text: 'Not only are these sneakers super comfortable, but they also look amazing with any outfit. I get compliments everywhere I go!',
      location: 'London, UK'
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'Basketball Player',
      avatar: '👨‍🦱',
      rating: 5,
      text: 'The grip and support are unmatched. Perfect for intense training sessions and casual wear. Highly recommend!',
      location: 'Miami, USA'
    }
  ]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-light mb-4">
            WHAT OUR <span className="text-gradient">CUSTOMERS SAY</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their style and comfort
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl"
            >
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-3xl text-yellow-400"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Customer Info */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg"
                >
                  {testimonials[currentIndex].avatar}
                </motion.div>
                <h4 className="text-xl font-bold text-dark dark:text-light">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary font-semibold">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="p-4 bg-primary hover:bg-accent text-white rounded-full shadow-lg transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-2xl" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-4 bg-primary hover:bg-accent text-white rounded-full shadow-lg transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-2xl" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '10K+', label: '5-Star Reviews' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialSection
