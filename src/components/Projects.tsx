import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { getProjects, type Project } from '../lib/projects'

const Projects = () => {
  const { t } = useTranslation('common')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Load projects from Supabase
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)
      const { data, error } = await getProjects()
      if (error) {
        setError('Error al cargar proyectos')
        console.error(error)
        // Fallback to static data if Supabase fails
        setProjects([
          {
            id: '1',
            title: t('projects.items.ecommerce.title'),
            description: t('projects.items.ecommerce.description'),
            images: ["/placeholder-project.jpg"],
            technologies: ["React", "Node.js", "MongoDB"],
            github_url: "https://github.com/bryanespana",
            live_url: "https://demo.example.com",
            date: "2024-01-01"
          },
          {
            id: '2',
            title: t('projects.items.taskManager.title'),
            description: t('projects.items.taskManager.description'),
            images: ["/placeholder-project.jpg"],
            technologies: ["Next.js", "TypeScript", "PostgreSQL"],
            github_url: "https://github.com/bryanespana",
            live_url: "https://demo.example.com",
            date: "2024-01-01"
          },
          {
            id: '3',
            title: t('projects.items.portfolio.title'),
            description: t('projects.items.portfolio.description'),
            images: ["/placeholder-project.jpg"],
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            github_url: "https://github.com/bryanespana",
            live_url: "https://bryanespana.dev",
            date: "2024-01-01"
          },
          {
            id: '4',
            title: t('projects.items.socialApp.title'),
            description: t('projects.items.socialApp.description'),
            images: ["/placeholder-project.jpg"],
            technologies: ["React", "Socket.io", "Express", "MySQL"],
            github_url: "https://github.com/bryanespana",
            live_url: "https://demo.example.com",
            date: "2024-01-01"
          }
        ])
      } else {
        setProjects(data || [])
      }
      setLoading(false)
    }

    loadProjects()
  }, [t])

  // Auto-scroll functionality
  useEffect(() => {
    if (projects.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(timer)
    }
  }, [projects.length])

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

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando proyectos...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-12">
              <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
              <p className="text-gray-600 dark:text-gray-400">Mostrando proyectos de ejemplo.</p>
            </div>
          )}

          {/* Projects Display */}
          {!loading && projects.length > 0 && (
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 50}%)` 
                }}
              >
                {/* Projects with duplicates for infinite effect */}
                {[...projects, ...projects, ...projects].map((project, index) => (
                  <div key={index} className="flex-none w-full md:w-1/2 px-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl overflow-hidden h-full transition-all duration-300 transform hover:scale-105">
                      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10 flex items-center justify-center relative overflow-hidden">
                        {project.images && project.images.length > 0 ? (
                          <img 
                            src={project.images[0]} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                            {/* Animated background elements */}
                            <div className="absolute inset-0">
                              <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                              <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                              <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white/15 rounded-full animate-pulse delay-500"></div>
                            </div>
                            <div className="relative z-10 text-center">
                              <div className="w-16 h-16 mx-auto mb-2 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-md">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                              </div>
                              <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">Project</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech: string, techIndex: number) => (
                            <span 
                              key={`${index}-${techIndex}`} 
                              className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          {project.github_url && (
                            <a 
                              href={project.github_url} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:text-primary-600 transition-colors text-sm font-medium"
                            >
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              {t('projects.viewCode')}
                            </a>
                          )}
                          {project.live_url && (
                            <a 
                              href={project.live_url} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:text-primary-600 transition-colors text-sm font-medium"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              {t('projects.viewProject')}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentIndex === index 
                        ? 'bg-primary' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* No Projects State */}
          {!loading && projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No hay proyectos disponibles.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects