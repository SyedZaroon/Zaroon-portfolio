import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Code, Zap, Package, Wrench, TrendingUp } from 'lucide-react';

/**
 * Services Section
 * Premium service offerings with animated cards
 */
export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: ShoppingCart,
      title: 'Shopify Store Development',
      description: 'Build custom, high-performance Shopify stores with unique themes and optimized user experiences.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Code,
      title: 'Custom Theme Development',
      description: 'Create bespoke Shopify themes tailored to your brand identity and business requirements.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Package,
      title: 'Shopify App Development',
      description: 'Develop custom Shopify apps to extend functionality and streamline your store operations.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Headless Commerce',
      description: 'Build modern, flexible ecommerce solutions with decoupled frontend and backend architecture.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Code,
      title: 'React Development',
      description: 'Create interactive, responsive web applications with modern React and advanced animations.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize store performance, improve SEO, and increase conversion rates with data-driven strategies.',
      color: 'from-red-500 to-pink-500',
    },
  ];

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
      id="services"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Services I <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Offer</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">Comprehensive solutions for your ecommerce and web development needs</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-8 rounded-xl hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
