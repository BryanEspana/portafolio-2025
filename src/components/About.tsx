import { useTranslation } from 'next-i18next'

const About = () => {
  const { t } = useTranslation('common')

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white animate-fade-in-up">
            {t('about.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('about.extendedDescription1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.extendedDescription2')}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  React
                </span>
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Next.js
                </span>
                <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  TypeScript
                </span>
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Node.js
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-right">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {t('about.personalInfo')}
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-center hover:text-primary transition-colors duration-300">
                  <svg className="w-4 h-4 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <strong>{t('about.nameLabel')}</strong>&nbsp;{t('about.nameValue')}
                </li>
                <li className="flex items-center hover:text-primary transition-colors duration-300">
                  <svg className="w-4 h-4 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                  </svg>
                  <strong>{t('about.ageLabel')}</strong>&nbsp;{t('about.ageValue')}
                </li>
                <li className="flex items-center hover:text-primary transition-colors duration-300">
                  <svg className="w-4 h-4 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <strong>{t('about.locationLabel')}</strong>&nbsp;{t('about.locationValue')}
                </li>
                <li className="flex items-center hover:text-primary transition-colors duration-300">
                  <svg className="w-4 h-4 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <strong>{t('about.emailLabel')}</strong>&nbsp;bryanespana21550@gmail.com
                </li>
                <li className="flex items-center hover:text-primary transition-colors duration-300">
                  <svg className="w-4 h-4 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <strong>{t('about.phoneLabel')}</strong>&nbsp;+502 3659-7354
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About