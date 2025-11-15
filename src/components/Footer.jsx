import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      className="bg-primary-900 text-white py-12 border-t border-primary-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Portfolio
            </h3>
            <p className="text-primary-300 text-sm leading-relaxed font-light">
              Full Stack Web Developer passionate about creating exceptional
              digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-primary-300 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors font-light">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors font-light">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors font-light"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors font-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-primary-300 mb-4 text-sm font-light">
              Let's work together on your next project.
            </p>
            <a
              href="mailto:mobasshirkhan9931@gmail.com"
              className="text-accent-400 hover:text-accent-300 transition-colors text-sm font-light"
            >
              mobasshirkhan9931@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-400 text-sm font-light">
            © {currentYear} Mobasshir Khan. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary-300 hover:text-white transition-colors text-sm font-light"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <FiArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
