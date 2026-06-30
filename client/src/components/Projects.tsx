import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Projects Section
 * Showcase of featured projects with glassmorphic cards
 */
export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      title: 'Custom Shopify Store',
      description: 'Built a high-performance Shopify store with custom theme development, API integrations, and conversion optimization.',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'API'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '#',
      github: '#',
    },
    {
      title: 'Headless Shopify Platform',
      description: 'Developed a modern headless Shopify solution using React and GraphQL for a premium ecommerce brand.',
      tech: ['React', 'GraphQL', 'Shopify API', 'Tailwind'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: '#',
      github: '#',
    },
    {
      title: 'Shopify App Development',
      description: 'Created custom Shopify apps for inventory management, order tracking, and customer analytics.',
      tech: ['Node.js', 'React', 'Shopify CLI', 'GraphQL'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: '#',
      github: '#',
    },
    {
      title: 'React Dashboard',
      description: 'Built an interactive dashboard for analytics and reporting with real-time data visualization.',
      tech: ['React', 'Recharts', 'Tailwind', 'API'],
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      link: '#',
      github: '#',
    },
    {
      title: 'WordPress E-commerce Site',
      description: 'Developed a full-featured WordPress site with WooCommerce, custom plugins, and SEO optimization.',
      tech: ['WordPress', 'WooCommerce', 'PHP', 'SEO'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      link: '#',
      github: '#',
    },
    {
      title: 'Landing Page Builder',
      description: 'Created a modern landing page with animations, form integrations, and conversion tracking.',
      tech: ['React', 'Framer Motion', 'Tailwind', 'Forms'],
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      link: '#',
      github: '#',
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
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Featured <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">Showcase of my best work and accomplishments</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group glass-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Image */}
              <div
                className="w-full h-40 bg-gradient-to-br relative overflow-hidden"
                style={{ backgroundImage: project.image }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.link}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} /> Live
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded flex items-center justify-center gap-2 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
