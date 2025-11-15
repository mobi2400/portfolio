import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const About = () => {
  const [ref, isInView] = useInView({ once: true, margin: '-100px' })

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

  const stats = [
    { number: '5', label: 'Projects Completed' },
    { number: '1', label: 'Years Experience' },
    { number: '3', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction' },
  ]

  return (
    <motion.section
      id="about"
      ref={ref}
      className="section-container bg-primary-50"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
            About <span className="accent-gradient">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-primary-600 text-lg max-w-2xl mx-auto font-light">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 text-primary-900">
              Crafting Digital Solutions
            </h3>
            <div className="space-y-4 text-primary-700 leading-relaxed">
              <p>
                I'm a passionate Full Stack Web Developer with a keen eye for
                design and a love for clean, efficient code. With expertise in
                both frontend and backend technologies, I bring ideas to life
                through innovative web applications.
              </p>
              <p>
                My journey in web development started with curiosity and has
                evolved into a career focused on creating seamless user
                experiences. I specialize in modern JavaScript frameworks,
                responsive design, and scalable backend architectures.
              </p>
              <p>
                When I'm not coding, I enjoy learning new technologies,
                contributing to open-source projects, and sharing knowledge with
                the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-white rounded-xl p-8 shadow-medium border border-primary-100">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-primary-50 rounded-lg border border-primary-100"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold accent-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-primary-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl p-8 md:p-12 shadow-medium border border-primary-100"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-primary-900">
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Development',
                description:
                  'Creating responsive and interactive user interfaces using React,Next.js, and modern CSS frameworks.',
              },
              {
                title: 'Backend Development',
                description:
                  'Building robust server-side applications with Node.js, Express, and ORM tools like MongoDB and PostgreSQL  .',
              },
              {
                title: 'Full Stack Solutions',
                description:
                  'End-to-end development of web applications from concept to deployment and maintenance.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-primary-50 rounded-lg border border-primary-100 card-hover"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-3 text-primary-900">
                  {service.title}
                </h4>
                <p className="text-primary-600 leading-relaxed font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default About
