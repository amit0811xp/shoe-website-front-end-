import { motion } from 'framer-motion'
import { FiWind, FiFeather, FiShield, FiZap } from 'react-icons/fi'

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiZap />,
      title: 'Air Cushion Tech',
      description: 'Revolutionary air cushioning system provides maximum comfort and impact absorption for all-day wear.',
      color: 'from-primary to-accent'
    },
    {
      icon: <FiFeather />,
      title: 'Lightweight Design',
      description: 'Ultra-lightweight materials reduce fatigue while maintaining durability and support.',
      color: 'from-accent to-secondary'
    },
    {
      icon: <FiWind />,
      title: 'Breathable Mesh',
      description: 'Advanced mesh technology keeps your feet cool and dry during intense activities.',
      color: 'from-secondary to-primary'
    },
    {
      icon: <FiShield />,
      title: 'Durable Sole',
      description: 'Premium rubber outsole engineered for superior traction and long-lasting performance.',
      color: 'from-primary to-secondary'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-light mb-4">
            PREMIUM <span className="text-gradient">TECHNOLOGY</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Engineered with cutting-edge innovation for unmatched performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl border border-gray-200 dark:border-gray-700">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white text-3xl shadow-lg`}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark dark:text-light mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Specs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-black mb-2"
              >
                250g
              </motion.div>
              <div className="text-white/80">Ultra Lightweight</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-black mb-2"
              >
                360°
              </motion.div>
              <div className="text-white/80">Breathability</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-black mb-2"
              >
                100%
              </motion.div>
              <div className="text-white/80">Recycled Materials</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-black mb-2"
              >
                2Y
              </motion.div>
              <div className="text-white/80">Warranty</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
