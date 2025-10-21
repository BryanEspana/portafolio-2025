import { useTranslation } from 'next-i18next'

const Hero = () => {
  const { t } = useTranslation('common')

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <p className="text-lg text-gray-600 mb-4 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            {t('hero.greeting')}
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            Bryan España
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            {t('hero.title')}
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            <a 
              href="#projects"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 hover:scale-105 transform transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
            >
              {t('hero.cta')}
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            <a 
              href="#contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('hero.contact')}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a href="#about" className="block text-gray-600 hover:text-primary transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero