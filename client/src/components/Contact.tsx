import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section
 * Modern contact form and contact information
 */
export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      color: 'text-red-400',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'zaroon@example.com',
      link: 'mailto:zaroon@example.com',
      color: 'text-blue-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 (XXX) XXX-XXXX',
      link: 'tel:+92',
      color: 'text-green-400',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Available',
      link: 'https://wa.me/92',
      color: 'text-cyan-400',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { icon: Github, label: 'GitHub', link: 'https://github.com', color: 'hover:text-gray-300' },
    { icon: Mail, label: 'Email', link: 'mailto:zaroon@example.com', color: 'hover:text-red-400' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
      id="contact"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Get In <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">Let's collaborate on your next project</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                I'm available for freelance projects, full-time remote positions, and collaborations. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.link || '#'}
                    className="glass-card p-4 rounded-lg flex items-center gap-4 hover:border-cyan-500/50 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Icon className={`w-6 h-6 ${info.color} flex-shrink-0`} />
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 glass-card rounded-lg flex items-center justify-center text-gray-400 transition-all ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? 'Message Sent! 🎉' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
