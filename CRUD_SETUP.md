# Sistema CRUD de Proyectos con Supabase

Este sistema permite gestionar los proyectos del portafolio a través de un panel de administración con autenticación secreta.

## 🚀 Configuración Inicial

### 1. Configurar Supabase

1. Crea una cuenta en [Supabase](https://supabase.com)
2. Crea un nuevo proyecto
3. Ve a Settings > API y copia:
   - Project URL
   - Anon/Public Key

### 2. Variables de Entorno

Actualiza el archivo `.env.local` con tus credenciales de Supabase:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase

# Admin Secret Password
ADMIN_SECRET_PASSWORD=tu_contraseña_secreta_admin
```

### 3. Configurar Base de Datos

Ejecuta el script SQL en `database/schema.sql` en el editor SQL de Supabase:

1. Ve a SQL Editor en tu dashboard de Supabase
2. Copia y pega el contenido de `database/schema.sql`
3. Ejecuta el script

Esto creará:
- Tabla `projects` con todos los campos necesarios
- Políticas de seguridad (RLS)
- Datos de ejemplo

## 📱 Uso del Sistema

### Acceso Administrativo

1. Ve a `/admin/login`
2. Ingresa la contraseña secreta configurada en `.env.local`
3. Accederás al dashboard de administración

### Dashboard de Administración

- **URL**: `/admin/dashboard`
- **Funciones**:
  - Ver todos los proyectos
  - Crear nuevo proyecto
  - Editar proyectos existentes
  - Eliminar proyectos

### Formulario de Proyectos

Campos disponibles:
- **Título**: Nombre del proyecto
- **Descripción**: Descripción detallada
- **Tecnologías**: Lista de tecnologías usadas
- **Imágenes**: URLs de imágenes del proyecto
- **Fecha**: Fecha del proyecto
- **GitHub URL**: Enlace al repositorio
- **Live URL**: Enlace al proyecto en vivo

## 🔧 Características Técnicas

### Seguridad
- Row Level Security (RLS) habilitado
- Autenticación por contraseña secreta
- Rutas protegidas con middleware

### Funcionalidades
- ✅ Create (Crear proyectos)
- ✅ Read (Leer proyectos)
- ✅ Update (Actualizar proyectos)
- ✅ Delete (Eliminar proyectos)
- ✅ Subida de múltiples imágenes
- ✅ Gestión de tecnologías
- ✅ Vista pública integrada

### Integración
- El componente `Projects.tsx` automáticamente obtiene datos de Supabase
- Fallback a datos estáticos si Supabase no está disponible
- Estados de carga y error incluidos

## 🎨 Rutas del Sistema

```
/admin/login              # Login administrativo
/admin/dashboard          # Panel de control
/admin/projects/new       # Crear nuevo proyecto
/admin/projects/edit/[id] # Editar proyecto específico
```

## 📋 Estructura de la Base de Datos

```sql
Table: projects
- id (UUID, Primary Key)
- title (TEXT, NOT NULL)
- description (TEXT, NOT NULL)
- technologies (TEXT[], Array de strings)
- images (TEXT[], Array de URLs)
- date (DATE, NOT NULL)
- github_url (TEXT, Optional)
- live_url (TEXT, Optional)
- created_at (TIMESTAMP, Auto)
- updated_at (TIMESTAMP, Auto)
```

## 🔄 Estados del Componente Projects

- **Loading**: Muestra spinner mientras carga
- **Error**: Muestra mensaje de error + fallback
- **Success**: Muestra proyectos de Supabase
- **Empty**: Mensaje cuando no hay proyectos

## 💡 Notas Importantes

1. **Contraseña por defecto**: Si no configuras `ADMIN_SECRET_PASSWORD`, el sistema usa `admin123`
2. **Imágenes**: Actualmente usa URLs externas. Puedes implementar upload a Supabase Storage más tarde
3. **Tipos**: TypeScript completamente tipado con interfaces de Supabase
4. **Responsive**: Todos los formularios y vistas son responsive

## 🚀 Próximos Pasos Sugeridos

1. Configurar Supabase Storage para subida de imágenes
2. Añadir más campos al formulario (categorías, estado, etc.)
3. Implementar filtros y búsqueda en el dashboard
4. Añadir confirmaciones y notificaciones toast
5. Implementar export/import de proyectos