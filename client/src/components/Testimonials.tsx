import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { testimonials } from '../globalValues/testimonials';


/**
 * Testimonials Section
 * Client testimonials with glass cards and ratings
 */
export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Client <span className="text-transparent bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text">Testimonials</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">What my clients say about working with me</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl hover:shadow-lg hover:shadow-pink-500/20 transition-all"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">
                    {testimonial.platform}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
