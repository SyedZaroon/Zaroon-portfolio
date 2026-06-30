import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Skills Section
 * Categorized skills with animated cards and progress bars
 */
export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Shopify',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Shopify CLI', level: 95 },
        { name: 'Liquid', level: 95 },
        { name: 'Online Store 2.0', level: 90 },
        { name: 'Custom Themes', level: 95 },
        { name: 'Headless Shopify', level: 90 },
        { name: 'Shopify Apps', level: 85 },
      ],
    },
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Responsive Design', level: 100 },
        { name: 'GSAP', level: 85 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      title: 'Backend & Tools',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'GraphQL', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'WordPress', level: 90 },
        { name: 'SEO', level: 85 },
      ],
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
      id="skills"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Technical <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Expertise</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">Skills and proficiencies I've developed</p>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl hover:shadow-lg transition-all group"
            >
              {/* Category Title */}
              <div className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: j * 0.05, duration: 0.4 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: j * 0.05 + 0.3, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
