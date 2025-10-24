-- Crear tabla de proyectos
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  images TEXT[] NOT NULL DEFAULT '{}',
  date DATE NOT NULL,
  github_url TEXT,
  live_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Crear trigger para updated_at
CREATE TRIGGER update_projects_updated_at 
  BEFORE UPDATE ON projects 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Habilitar Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Política para lectura pública (para mostrar proyectos en el portafolio)
CREATE POLICY "Proyectos son públicos para lectura" ON projects
  FOR SELECT USING (true);

-- Política para insertar, actualizar y eliminar (solo para usuarios autenticados)
-- Nota: En tu implementación, usarás el sistema de autenticación secreto
CREATE POLICY "Solo usuarios autenticados pueden modificar proyectos" ON projects
  FOR ALL USING (auth.role() = 'authenticated');

-- Insertar algunos proyectos de ejemplo
INSERT INTO projects (title, description, technologies, images, date, github_url, live_url) VALUES
(
  'Portafolio Personal',
  'Portafolio web desarrollado con Next.js, TypeScript y Tailwind CSS. Incluye sistema de internacionalización y modo oscuro.',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
  ARRAY['https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400'],
  '2024-01-15',
  'https://github.com/bryanespana/portafolio-2025',
  'https://bryanesp.dev'
),
(
  'Sistema de Gestión',
  'Aplicación web para gestión de inventario con dashboard administrativo y reportes.',
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Express'],
  ARRAY['https://via.placeholder.com/600x400'],
  '2023-12-10',
  'https://github.com/bryanespana/sistema-gestion',
  null
);