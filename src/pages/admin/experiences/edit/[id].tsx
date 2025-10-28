import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ProtectedRoute from '../../../../components/ProtectedRoute'
import { getExperienceById, updateExperience, type UpdateExperienceData } from '../../../../lib/experiences'

const EditExperience = () => {
  const [formData, setFormData] = useState<UpdateExperienceData>({
    title: '',
    company: '',
    period: '',
    description: '',
    display_order: 0
  })
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id && typeof id === 'string') {
      fetchExperience(id)
    }
  }, [id])

  const fetchExperience = async (experienceId: string) => {
    try {
      setInitialLoading(true)
      const experience = await getExperienceById(experienceId)
      if (experience) {
        setFormData({
          title: experience.title,
          company: experience.company,
          period: experience.period,
          description: experience.description,
          display_order: experience.display_order
        })
      } else {
        alert('Experiencia no encontrada')
        router.push('/admin/experiences')
      }
    } catch (error) {
      console.error('Error fetching experience:', error)
      alert('Error al cargar la experiencia')
      router.push('/admin/experiences')
    } finally {
      setInitialLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'display_order' ? parseInt(value) || 0 : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.company || !formData.period || !formData.description) {
      alert('Por favor completa todos los campos obligatorios')
      return
    }

    if (!id || typeof id !== 'string') {
      alert('ID de experiencia inválido')
      return
    }

    try {
      setLoading(true)
      await updateExperience(id, formData)
      alert('Experiencia actualizada exitosamente')
      router.push('/admin/experiences')
    } catch (error) {
      console.error('Error updating experience:', error)
      alert('Error al actualizar la experiencia')
    } finally {
      setLoading(false)
    }
  }

  if (initialLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center mb-8">
              <Link
                href="/admin/experiences"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 mr-4"
              >
                ← Volver
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Editar Experiencia
              </h1>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Título del Puesto *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-black"
                    placeholder="ej. Desarrollador Full Stack"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-black"
                    placeholder="ej. Tech Solutions Inc."
                  />
                </div>

                <div>
                  <label htmlFor="period" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Período *
                  </label>
                  <input
                    type="text"
                    id="period"
                    name="period"
                    value={formData.period}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-black"
                    placeholder="ej. Enero 2023 - Presente"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Descripción *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-black"
                    placeholder="Describe las responsabilidades y logros en este puesto..."
                  />
                </div>

                <div>
                  <label htmlFor="display_order" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Orden de Visualización
                  </label>
                  <input
                    type="number"
                    id="display_order"
                    name="display_order"
                    value={formData.display_order}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-black"
                    placeholder="1"
                  />
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Número más alto aparece primero (más reciente).
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <Link
                    href="/admin/experiences"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancelar
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? 'Actualizando...' : 'Actualizar Experiencia'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default EditExperience