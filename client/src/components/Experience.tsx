import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

/**
 * Experience Section
 * Beautiful animated timeline of career history
 */
export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      company: 'ECOMMINDS Pvt Ltd',
      position: 'Shopify Developer',
      period: 'Jan 2024 – Present',
      description: 'Develop Shopify themes, Liquid development, performance optimization, API integration, responsive UI, custom sections, store customization, and cross-functional collaboration.',
      highlights: ['Shopify Themes', 'Liquid', 'Performance', 'API Integration'],
    },
    {
      company: 'LahoreBay',
      position: 'Ecommerce Manager',
      period: 'Oct 2022 – Dec 2023',
      description: 'Product management, UX improvements, store optimization, conversion optimization, inventory management, and analytics.',
      highlights: ['Product Management', 'UX/CX', 'Optimization', 'Analytics'],
    },
    {
      company: 'Jachoos Technologies',
      position: 'WordPress Developer',
      period: 'Sep 2021 – Nov 2022',
      description: 'Custom WordPress websites, SEO optimization, API integrations, responsive websites, and client projects.',
      highlights: ['WordPress', 'SEO', 'API', 'Responsive Design'],
    },
    {
      company: 'ESOLS Pvt Ltd',
      position: 'WordPress Developer',
      period: 'Jan 2021 – Jun 2021',
      description: 'Custom websites, theme customization, responsive development, and deployment.',
      highlights: ['WordPress', 'Theme Dev', 'Responsive', 'Deployment'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Career <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Timeline</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">My professional journey and achievements</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-500 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-3.5 md:-translate-x-4 border-4 border-black/80 z-10" />

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                        <p className="text-sm text-purple-400">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{exp.period}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
