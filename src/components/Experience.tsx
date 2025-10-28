import { useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'
import { getExperiences, type Experience as ExperienceType } from '../lib/experiences'

const Experience = () => {
  const { t } = useTranslation('common')
  const [experiences, setExperiences] = useState<ExperienceType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences()
        setExperiences(data)
      } catch (error) {
        console.error('Error fetching experiences:', error)
        // Fallback a datos estáticos si hay error
        setExperiences([
          {
            id: '1',
            title: t('experience.jobs.experiencie3.title'),
            company: t('experience.jobs.experiencie3.company'),
            period: t('experience.jobs.experiencie3.period'),
            description: t('experience.jobs.experiencie3.description'),
            display_order: 1
          },
          {
            id: '2',
            title: t('experience.jobs.experiencia2.title'),
            company: t('experience.jobs.experiencia2.company'),
            period: t('experience.jobs.experiencia2.period'),
            description: t('experience.jobs.experiencia2.description'),
            display_order: 2
          },
          {
            id: '3',
            title: t('experience.jobs.experiencia1.title'),
            company: t('experience.jobs.experiencia1.company'),
            period: t('experience.jobs.experiencia1.period'),
            description: t('experience.jobs.experiencia1.description'),
            display_order: 3
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchExperiences()
  }, [])

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

          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-t from-primary/30 via-primary to-primary/30 rounded-full hidden md:block"></div>
              
              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.id || index} 
                    className={`relative flex items-center timeline-responsive ${
                      index % 2 === 0 ? 'md:justify-start justify-center' : 'md:justify-end justify-center'
                    }`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                    }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-800 shadow-lg timeline-node">
                        <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                      </div>
                      {/* Order Number */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                          {exp.display_order}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Order Number */}
                    <div className="md:hidden absolute -top-4 left-4 z-10">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        #{exp.display_order}
                      </span>
                    </div>

                    {/* Experience Card */}
                    <div className={`timeline-card w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        {/* Card Arrow - Desktop only */}
                        <div className={`timeline-arrow absolute top-8 hidden md:block ${
                          index % 2 === 0 
                            ? 'right-0 translate-x-1/2' 
                            : 'left-0 -translate-x-1/2'
                        } w-0 h-0 border-t-8 border-b-8 border-transparent ${
                          index % 2 === 0 
                            ? 'border-l-8 border-l-white dark:border-l-gray-700' 
                            : 'border-r-8 border-r-white dark:border-r-gray-700'
                        }`}></div>

                        {/* Period Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {exp.period}
                        </div>

                        {/* Job Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                          {exp.title}
                        </h3>

                        {/* Company */}
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-lg font-semibold text-primary dark:text-accent">
                            {exp.company}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-600 rounded-full mr-2">
                              <div 
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                                style={{ width: `${((experiences.length - index) / experiences.length) * 100}%` }}
                              ></div>
                            </div>
                            <span>{index === 0 ? 'Más reciente' : index === experiences.length - 1 ? 'Inicio' : 'Progreso'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Career Journey Indicator */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Mi trayectoria profesional
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience