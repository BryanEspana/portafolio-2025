# Portafolio Web

Un portafolio personal moderno desarrollado con Next.js, TypeScript y Tailwind CSS.

## 🚀 Tecnologías

- **Next.js 14** - Framework de React para producción
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework CSS utilitario
- **ESLint** - Linter para mantener la calidad del código

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app/                # App Router de Next.js
│   │   ├── globals.css     # Estilos globales
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página de inicio
│   ├── components/         # Componentes reutilizables
│   │   ├── Button.tsx      # Componente de botón
│   │   └── index.ts        # Exportaciones de componentes
│   ├── hooks/              # Custom hooks
│   │   └── index.ts        # Hooks personalizados
│   ├── lib/                # Utilidades y librerías
│   │   └── utils.ts        # Funciones utilitarias
│   ├── pages/              # Páginas adicionales (si necesitas Pages Router)
│   └── assets/             # Recursos estáticos
├── public/                 # Archivos públicos
├── .github/                # Configuración de GitHub
│   └── copilot-instructions.md
├── .gitignore              # Archivos ignorados por Git
├── next.config.js          # Configuración de Next.js
├── package.json            # Dependencias del proyecto
├── postcss.config.js       # Configuración de PostCSS
├── tailwind.config.js      # Configuración de Tailwind
└── tsconfig.json           # Configuración de TypeScript
```

## 🛠️ Instalación y Configuración

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Iniciar en producción:**
   ```bash
   npm start
   ```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor en modo producción
- `npm run lint` - Ejecuta ESLint para verificar el código
- `npm run type-check` - Verifica los tipos de TypeScript

## 🎨 Personalización

### Componentes
Los componentes están ubicados en `src/components/`. Cada componente incluye:
- Tipado con TypeScript
- Estilos con Tailwind CSS
- Props configurables

### Hooks Personalizados
En `src/hooks/` encontrarás hooks útiles como:
- `useLoading` - Para manejar estados de carga
- `useLocalStorage` - Para persistencia en localStorage

### Utilidades
En `src/lib/utils.ts` hay funciones auxiliares para:
- Manipulación de clases CSS
- Formateo de fechas
- Transformación de strings

## 🚀 Despliegue

Este proyecto está listo para desplegarse en:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- Cualquier plataforma que soporte Node.js

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como base para tu propio portafolio.

---

Desarrollado con ❤️ usando Next.js y TypeScript