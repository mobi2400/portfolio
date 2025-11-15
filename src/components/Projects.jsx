import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [ref, isInView] = useInView({ once: true, margin: '-100px' })

  const projects = [
    {
      title: 'curricuaflex',
      description:
        ' Collaborative portal for colleges to track students, attendance, and records; modular dashboards for admins and students.  Implemented ML analytics for performance insights and a blockchain-backed proof-of-record concept for tamper-evident logs.',
      technologies: ['React','Tailwind CSS' ,'Node.js', 'MongoDB',' Machine Learning', 'Blockchain'],
      image: 'https://media.licdn.com/dms/image/v2/D4E2DAQGjb2kkVDFDwA/profile-treasury-image-shrink_800_800/B4EZpkBUjYIUAY-/0/1762614660384?e=1763794800&v=beta&t=m4PK9fjsrbPE5Hzxfw2YxaHv4tpp_1A5ss4YQvclLyM',
      github: 'https://github.com/mobi2400/sol-attendance',
      live: 'https://sol-attendance-q3ow.vercel.app/',
      featured: true,
    },
    {
      title: 'Debsoc Page',
      description:
        'Developed a fully functional website for DebSoc, incorporating features such as a random motion generator and quote display. Future enhancements are planned, including a personalized dashboard for each member to monitor their progress in real-time',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/image.png',
      github: 'https://github.com/mobi2400/Debsoc2.0',
      live: 'https://www.smvitdebsoc.com/',
      featured: true,
    },
    {
      title: 'Library Management System',
      description:
        'Automated library workflows (issue/return/search/inventory) using a MERN stack application. Built role-based access, efficient search, and an admin dashboard to simplify librarian operations',
      technologies: ['React', 'API Integration', 'MongoDB' ,'Tailwind CSS' ,'Node.js', 'Express'],
      image: '',
      github: 'https://github.com/mobi2400/Project-Beta-Backend-Library-Management-System-',
      live: 'https://library-frontend2-0.vercel.app/',
      featured: true,
    },

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <motion.section
      id="projects"
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
            My <span className="accent-gradient">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-primary-600 text-lg max-w-2xl mx-auto font-light">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-xl overflow-hidden shadow-soft border border-primary-100 card-hover ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48 lg:h-64 overflow-hidden bg-primary-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=Project+Image'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full shadow-medium">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-900">
                  {project.title}
                </h3>
                <p className="text-primary-600 mb-4 leading-relaxed text-sm font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-md border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition-colors text-sm font-medium border border-primary-200"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-md hover:bg-primary-900 transition-colors text-sm font-medium"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Projects
