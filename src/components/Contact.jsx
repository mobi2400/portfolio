import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si'

const Contact = () => {
  const [ref, isInView] = useInView({ once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Thank you for your message! I will get back to you soon.')
    }, 1000)
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'mobasshirkhan9931@gmail.com',
      link: 'mailto:mobasshirkhan9931@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+919142365645',
      link: 'tel:+919142365645',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'BANGLORE, KARNATAKA, India',
      link: 'https://www.google.com/maps/place/Bangalore,+Karnataka,+India',
    },
  ]

  const socialLinks = [
    { icon: SiGithub, href: 'https://github.com/mobi2400', label: 'GitHub' },
    { icon: SiLinkedin, href: 'https://www.linkedin.com/in/md-mobasshir-shakil-khan-8ba835326/', label: 'LinkedIn' },
    { icon: SiGmail, href: 'mailto:mobasshirkhan9931@gmail.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="section-container bg-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
            Get In <span className="accent-gradient">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-primary-600 text-lg max-w-2xl mx-auto font-light">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-primary-900">
              Let's Connect
            </h3>
            <p className="text-primary-600 mb-8 leading-relaxed font-light">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              through any of the contact methods below.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-primary-50 rounded-lg border border-primary-100 hover:border-primary-200 hover:shadow-soft transition-all duration-200 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg border border-primary-200 group-hover:bg-accent-50 group-hover:border-accent-200 transition-colors">
                    <info.icon className="w-5 h-5 text-primary-600 group-hover:text-accent-600 transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900 text-sm">{info.label}</div>
                    <div className="text-primary-600 text-sm font-light">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-900">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-primary-50 rounded-lg border border-primary-200 hover:border-accent-200 hover:bg-accent-50 text-primary-600 hover:text-accent-600 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-primary-50 rounded-xl p-8 shadow-soft border border-primary-100"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primary-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all bg-white text-primary-900 placeholder-primary-400"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all bg-white text-primary-900 placeholder-primary-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-primary-200 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none bg-white text-primary-900 placeholder-primary-400"
                  placeholder="Your Message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full professional-button inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
