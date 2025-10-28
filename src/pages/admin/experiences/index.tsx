import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ProtectedRoute from '../../../components/ProtectedRoute'
import { getExperiences, deleteExperience, updateExperiencesOrder, type Experience } from '../../../lib/experiences'

const ExperiencesAdmin = () => {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchExperiences()
  }, [])

  const fetchExperiences = async () => {
    try {
      setLoading(true)
      const data = await getExperiences()
      setExperiences(data)
    } catch (error) {
      console.error('Error fetching experiences:', error)
      alert('Error al cargar las experiencias')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar esta experiencia?')) {
      return
    }

    try {
      setDeleting(id)
      await deleteExperience(id)
      await fetchExperiences()
    } catch (error) {
      console.error('Error deleting experience:', error)
      alert('Error al eliminar la experiencia')
    } finally {
      setDeleting(null)
    }
  }

  const moveUp = async (index: number) => {
    if (index === 0) return // Ya está en la posición más alta
    
    const currentExp = experiences[index]
    const upperExp = experiences[index - 1]
    
    // Intercambiar los display_order
    try {
      await updateExperiencesOrder([
        { id: currentExp.id, display_order: upperExp.display_order },
        { id: upperExp.id, display_order: currentExp.display_order }
      ])
      await fetchExperiences()
    } catch (error) {
      console.error('Error updating order:', error)
      alert('Error al actualizar el orden')
    }
  }

  const moveDown = async (index: number) => {
    if (index === experiences.length - 1) return // Ya está en la posición más baja
    
    const currentExp = experiences[index]
    const lowerExp = experiences[index + 1]
    
    // Intercambiar los display_order
    try {
      await updateExperiencesOrder([
        { id: currentExp.id, display_order: lowerExp.display_order },
        { id: lowerExp.id, display_order: currentExp.display_order }
      ])
      await fetchExperiences()
    } catch (error) {
      console.error('Error updating order:', error)
      alert('Error al actualizar el orden')
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Gestión de Experiencias
            </h1>
            <div className="space-x-4">
              <Link
                href="/admin/experiences/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Nueva Experiencia
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
              {experiences.length === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  No hay experiencias registradas.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Orden
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Título
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Empresa
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Período
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {experiences.map((experience, index) => (
                        <tr key={experience.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => moveUp(index)}
                                disabled={index === 0}
                                className="p-1 rounded bg-gray-200 dark:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                title="Mover arriba (más reciente)"
                              >
                                ↑
                              </button>
                              <button
                                onClick={() => moveDown(index)}
                                disabled={index === experiences.length - 1}
                                className="p-1 rounded bg-gray-200 dark:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                title="Mover abajo (más antiguo)"
                              >
                                ↓
                              </button>
                              <span className="px-2 py-1 text-sm text-gray-600 dark:text-gray-300">
                                {experience.display_order}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {experience.title}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 dark:text-white">
                              {experience.company}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 dark:text-white">
                              {experience.period}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <Link
                              href={`/admin/experiences/edit/${experience.id}`}
                              className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Editar
                            </Link>
                            <button
                              onClick={() => handleDelete(experience.id)}
                              disabled={deleting === experience.id}
                              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                            >
                              {deleting === experience.id ? 'Eliminando...' : 'Eliminar'}
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

export default ExperiencesAdmin