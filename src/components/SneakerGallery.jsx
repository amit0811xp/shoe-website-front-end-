import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const SneakerGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    { id: 1, title: 'Urban Style', category: 'Lifestyle', emoji: '🏙️' },
    { id: 2, title: 'Sport Performance', category: 'Athletic', emoji: '⚡' },
    { id: 3, title: 'Street Fashion', category: 'Casual', emoji: '🎨' },
    { id: 4, title: 'Night Runner', category: 'Running', emoji: '🌙' },
    { id: 5, title: 'Beach Vibes', category: 'Lifestyle', emoji: '🏖️' },
    { id: 6, title: 'Mountain Trek', category: 'Outdoor', emoji: '⛰️' },
    { id: 7, title: 'City Commute', category: 'Daily', emoji: '🚶' },
    { id: 8, title: 'Gym Ready', category: 'Training', emoji: '💪' },
  ]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="py-20 bg-light dark:bg-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-light mb-4">
            LIFESTYLE <span className="text-gradient">GALLERY</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            See our sneakers in action across different lifestyles and environments
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => {
                setSelectedImage(image)
                setCurrentIndex(index)
              }}
              className={`relative cursor-pointer rounded-2xl overflow-hidden group ${
                index % 7 === 0 ? 'md:row-span-2' : ''
              }`}
            >
              {/* Image Placeholder */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-6xl">{image.emoji}</div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-xs font-semibold text-primary mb-1">
                      {image.category}
                    </div>
                    <div className="text-lg font-bold">{image.title}</div>
                  </div>
                </div>

                {/* Zoom Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-xl">🔍</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                  aria-label="Close lightbox"
                >
                  <FiX className="text-3xl" />
                </button>

                {/* Image */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl mb-4">{galleryImages[currentIndex].emoji}</div>
                    <div className="text-xs font-semibold text-primary mb-2">
                      {galleryImages[currentIndex].category}
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {galleryImages[currentIndex].title}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={handlePrevious}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="text-2xl" />
                  </button>

                  <div className="text-white text-sm">
                    {currentIndex + 1} / {galleryImages.length}
                  </div>

                  <button
                    onClick={handleNext}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                    aria-label="Next image"
                  >
                    <FiChevronRight className="text-2xl" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SneakerGallery
