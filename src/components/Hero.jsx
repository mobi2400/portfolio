import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      
      {/* Accent line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-accent-500 to-transparent opacity-20"></div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200">
              Full Stack Web Developer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-primary-900">Hello, I'm</span>
            <span className="block accent-gradient mt-2">John Doe</span>
            <span className="block text-primary-700 text-4xl md:text-5xl lg:text-6xl mt-4 font-semibold">
              Crafting digital solutions
            </span>
            <span className="block text-primary-600 text-4xl md:text-5xl lg:text-6xl font-normal">
              that drive results
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-primary-600 mb-10 max-w-2xl leading-relaxed font-light"
          >
            I specialize in building scalable web applications with modern technologies. 
            Combining clean code, thoughtful design, and user-centric approaches to deliver 
            exceptional digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="professional-button inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#contact"
              className="professional-button-outline inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 font-medium transition-colors group"
              whileHover={{ x: 2 }}
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-8 border-t border-primary-100"
          >
            <span className="text-sm text-primary-500 font-medium">Connect:</span>
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-all duration-200 border border-transparent hover:border-primary-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Professional scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-primary-400"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary-400 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
