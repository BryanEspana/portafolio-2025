'use client'

import { Button } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            ¡Bienvenido a mi{' '}
            <span className="text-blue-600 dark:text-blue-400">Portafolio</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Desarrollador apasionado por crear experiencias web increíbles con
            las tecnologías más modernas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Ver proyectos')}
            >
              Ver Proyectos
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => console.log('Contactar')}
            >
              Contactar
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Frontend
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Backend
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Node.js, Express, APIs RESTful
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Herramientas
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Git, VS Code, NPM, Vercel
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}