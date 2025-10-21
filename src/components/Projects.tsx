import { useTranslation } from 'next-i18next'

const Projects = () => {
  const { t } = useTranslation('common')

  const projects = [
    {
      title: t('projects.items.ecommerce.title'),
      description: t('projects.items.ecommerce.description'),
      image: "/placeholder-project.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/bryanespana",
      demo: "https://demo.example.com"
    },
    {
      title: t('projects.items.taskManager.title'),
      description: t('projects.items.taskManager.description'),
      image: "/placeholder-project.jpg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "https://github.com/bryanespana",
      demo: "https://demo.example.com"
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t('projects.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
            {t('projects.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-primary hover:underline">
                      {t('projects.viewCode')}
                    </a>
                    <a href={project.demo} className="text-primary hover:underline">
                      {t('projects.viewProject')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects