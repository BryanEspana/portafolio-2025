import { useTranslation } from 'next-i18next'

const Education = () => {
  const { t } = useTranslation('common')

  const education = [
    {
      degree: "Ingeniería en Sistemas",
      institution: "Universidad de San Carlos de Guatemala",
      period: "2018 - 2023",
      description: "Enfoque en desarrollo de software y sistemas de información"
    }
  ]

  return (
    <section id="education" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {t('education.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-16">
            {t('education.subtitle')}
          </p>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education