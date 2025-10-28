import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ProtectedRoute from '../../../components/ProtectedRoute'
import { getProjects, deleteProject, type Project } from '../../../lib/projects'

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const { data, error } = await getProjects()
      if (error) {
        console.error('Error fetching projects:', error)
        alert('Error al cargar los proyectos')
      } else {
        setProjects(data || [])
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
      alert('Error al cargar los proyectos')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      return
    }

    try {
      setDeleting(id)
      const { error } = await deleteProject(id)
      if (error) {
        console.error('Error deleting project:', error)
        alert('Error al eliminar el proyecto')
      } else {
        await fetchProjects()
      }
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Error al eliminar el proyecto')
    } finally {
      setDeleting(null)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Gestión de Proyectos
            </h1>
            <div className="space-x-4">
              <Link
                href="/admin/projects/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Nuevo Proyecto
              </Link>
              <Link
                href="/admin/dashboard"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Volver al Dashboard
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {projects.length === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  No hay proyectos registrados.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Proyecto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Tecnologías
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Fecha
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Enlaces
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {projects.map((project) => (
                        <tr key={project.id}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              {project.images && project.images.length > 0 && (
                                <img
                                  className="h-10 w-10 rounded-lg object-cover mr-4"
                                  src={project.images[0]}
                                  alt={project.title}
                                />
                              )}
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  {project.title}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                  {project.description}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 3).map((tech, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  +{project.technologies.length - 3} más
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 dark:text-white">
                              {formatDate(project.date)}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              {project.github_url && (
                                <a
                                  href={project.github_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                                  title="GitHub"
                                >
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                  </svg>
                                </a>
                              )}
                              {project.live_url && (
                                <a
                                  href={project.live_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                  title="Ver sitio"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <Link
                              href={`/admin/projects/edit/${project.id}`}
                              className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Editar
                            </Link>
                            <button
                              onClick={() => handleDelete(project.id)}
                              disabled={deleting === project.id}
                              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                            >
                              {deleting === project.id ? 'Eliminando...' : 'Eliminar'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default ProjectsAdmin