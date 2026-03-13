import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHeart, FiShoppingCart, FiZoomIn } from 'react-icons/fi'

const ProductShowcase = () => {
  const [selectedColor, setSelectedColor] = useState('black')
  const [isZoomed, setIsZoomed] = useState(false)

  const colors = [
    { name: 'black', hex: '#1A1A1D', label: 'Midnight Black' },
    { name: 'white', hex: '#F5F5F5', label: 'Pure White' },
    { name: 'red', hex: '#FF6B35', label: 'Crimson Red' },
    { name: 'blue', hex: '#004E89', label: 'Ocean Blue' },
    { name: 'green', hex: '#06D6A0', label: 'Neon Green' },
  ]

  const product = {
    name: 'STRIDE AIR MAX PRO',
    price: '$189.99',
    description: 'Revolutionary cushioning technology meets premium design. Experience all-day comfort with our most advanced sneaker yet.',
    features: ['Air Cushion Technology', 'Breathable Mesh Upper', 'Durable Rubber Sole', 'Lightweight Design']
  }

  return (
    <section id="collection" className="py-20 bg-light dark:bg-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-light mb-4">
            FEATURED <span className="text-gradient">COLLECTION</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our signature sneaker with customizable colors and premium features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 cursor-pointer overflow-hidden"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              {/* Sneaker Placeholder */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor}
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div 
                    className="w-full aspect-square rounded-2xl flex items-center justify-center text-8xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.find(c => c.name === selectedColor)?.hex}40, ${colors.find(c => c.name === selectedColor)?.hex}20)`
                    }}
                  >
                    👟
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Zoom Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute top-6 right-6 p-3 bg-white dark:bg-dark rounded-full shadow-lg cursor-pointer"
              >
                <FiZoomIn className="text-xl text-dark dark:text-light" />
              </motion.div>

              {/* Decorative Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-3/4 h-3/4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-full"
                />
              </div>
            </motion.div>

            {/* Color Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="text-lg font-bold text-dark dark:text-light mb-4">
                Choose Your Color
              </h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-12 h-12 rounded-full border-4 transition-all ${
                      selectedColor === color.name
                        ? 'border-primary scale-110'
                        : 'border-gray-300 dark:border-gray-700'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.label}
                  >
                    {selectedColor === color.name && (
                      <motion.div
                        layoutId="selected"
                        className="absolute -inset-1 border-2 border-primary rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {colors.find(c => c.name === selectedColor)?.label}
              </p>
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
              >
                BEST SELLER
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-black text-dark dark:text-light mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  <span className="text-gray-600 dark:text-gray-400 ml-2">(4.9)</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="font-bold text-dark dark:text-light">Key Features:</h4>
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-8 py-4 bg-primary hover:bg-accent text-white font-bold rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <FiShoppingCart className="text-xl" />
                Add to Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Add to wishlist"
              >
                <FiHeart className="text-2xl text-dark dark:text-light" />
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-300 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl mb-1">🚚</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Free Shipping</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">↩️</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">30-Day Returns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✓</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">2-Year Warranty</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
