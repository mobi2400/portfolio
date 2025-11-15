import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPython,
  SiNextdotjs,
} from 'react-icons/si'

const Skills = () => {
  const [ref, isInView] = useInView({ once: true, margin: '-100px' })

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, level: 85 },
        { name: 'JavaScript', icon: SiJavascript, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 90 },
        { name: 'Express', icon: SiExpress, level: 88 },
        { name: 'Python', icon: SiPython, level: 80 },
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: SiGit, level: 90 },
        { name: 'Docker', icon: SiDocker, level: 60 },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="skills"
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
            My <span className="accent-gradient">Skills</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-primary-600 text-lg max-w-2xl mx-auto font-light">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-primary-50 rounded-xl p-8 shadow-soft border border-primary-100"
            >
              <h3 className="text-2xl font-bold mb-8 text-primary-900">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              delay:
                                categoryIndex * 0.15 + skillIndex * 0.08,
                              duration: 0.4,
                            },
                          }
                        : {}
                    }
                  >
                    <div className="bg-white p-4 rounded-lg border border-primary-100 shadow-soft">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-accent-50 rounded-lg border border-accent-100">
                          <skill.icon className="w-5 h-5 text-accent-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-primary-900 text-sm">
                              {skill.name}
                            </span>
                            <span className="text-xs text-primary-500 font-medium">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-primary-100 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={
                                isInView
                                  ? {
                                      width: `${skill.level}%`,
                                      transition: {
                                        duration: 1,
                                        delay:
                                          categoryIndex * 0.15 +
                                          skillIndex * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                      },
                                    }
                                  : { width: 0 }
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
