import { supabase } from './supabase'

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  display_order: number
  created_at?: string
  updated_at?: string
}

export interface CreateExperienceData {
  title: string
  company: string
  period: string
  description: string
  display_order: number
}

export interface UpdateExperienceData {
  title?: string
  company?: string
  period?: string
  description?: string
  display_order?: number
}

// Obtener el siguiente número de orden disponible (más alto + 1)
export async function getNextDisplayOrder(): Promise<number> {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('display_order')
      .order('display_order', { ascending: false })
      .limit(1)

    if (error) {
      console.error('Error fetching max display_order:', error)
      return 1
    }

    if (!data || data.length === 0) {
      return 1
    }

    return (data[0].display_order || 0) + 1
  } catch (error) {
    console.error('Error in getNextDisplayOrder:', error)
    return 1
  }
}

// Obtener todas las experiencias ordenadas por display_order (descendente - más alto primero)
export async function getExperiences(): Promise<Experience[]> {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('display_order', { ascending: false })

    if (error) {
      console.error('Error fetching experiences:', error)
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Error in getExperiences:', error)
    throw error
  }
}

// Obtener una experiencia por ID
export async function getExperienceById(id: string): Promise<Experience | null> {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching experience:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in getExperienceById:', error)
    throw error
  }
}

// Crear nueva experiencia
export async function createExperience(experienceData: CreateExperienceData): Promise<Experience> {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .insert([experienceData])
      .select()
      .single()

    if (error) {
      console.error('Error creating experience:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in createExperience:', error)
    throw error
  }
}

// Actualizar experiencia
export async function updateExperience(id: string, experienceData: UpdateExperienceData): Promise<Experience> {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .update(experienceData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating experience:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in updateExperience:', error)
    throw error
  }
}

// Eliminar experiencia
export async function deleteExperience(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('experiences')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting experience:', error)
      throw error
    }
  } catch (error) {
    console.error('Error in deleteExperience:', error)
    throw error
  }
}

// Actualizar orden de visualización de múltiples experiencias
export async function updateExperiencesOrder(experiencesWithOrder: { id: string; display_order: number }[]): Promise<void> {
  try {
    const promises = experiencesWithOrder.map(({ id, display_order }) =>
      supabase
        .from('experiences')
        .update({ display_order })
        .eq('id', id)
    )

    await Promise.all(promises)
  } catch (error) {
    console.error('Error updating experiences order:', error)
    throw error
  }
}