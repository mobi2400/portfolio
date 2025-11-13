import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [ref, isInView] = useInView({ once: true, margin: '-100px' })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media metrics with data visualization, export functionality, and custom reports.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blog platform with markdown support, SEO optimization, and content management system.',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Chat Application',
      description:
        'Real-time chat application with multiple rooms, file sharing, and end-to-end encryption.',
      technologies: ['React', 'Socket.io', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
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
    <section
      id="projects"
      ref={ref}
      className="section-container bg-primary-50"
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
    </section>
  )
}

export default Projects
