import { useTranslation } from 'next-i18next'

const Experience = () => {
  const { t } = useTranslation('common')

  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Tech Company",
      period: "2022 - Presente",
      description: "Desarrollo de aplicaciones web modernas utilizando React, Node.js y bases de datos relacionales."
    },
    {
      title: "Desarrollador Frontend",
      company: "Digital Agency",
      period: "2021 - 2022",
      description: "Creación de interfaces de usuario responsivas y optimizadas para diferentes dispositivos."
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t('experience.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
            {t('experience.subtitle')}
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience