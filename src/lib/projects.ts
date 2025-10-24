import { supabase, type Project } from './supabase'

// Re-export Project type
export type { Project } from './supabase'

// Obtener todos los proyectos
export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('date', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching projects:', error)
    return { data: null, error: error as Error }
  }
}

// Obtener un proyecto por ID
export async function getProject(id: string) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching project:', error)
    return { data: null, error: error as Error }
  }
}

// Crear nuevo proyecto
export async function createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error creating project:', error)
    return { data: null, error: error as Error }
  }
}

// Actualizar proyecto
export async function updateProject(id: string, updates: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error updating project:', error)
    return { data: null, error: error as Error }
  }
}

// Eliminar proyecto
export async function deleteProject(id: string) {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error deleting project:', error)
    return { error: error as Error }
  }
}

// Subir imagen (opcional, para futuro)
export async function uploadImage(file: File, bucket: string = 'project-images') {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file)

    if (uploadError) throw uploadError

    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath)

    return { data: data.publicUrl, error: null }
  } catch (error) {
    console.error('Error uploading image:', error)
    return { data: null, error: error as Error }
  }
}