import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import ThemeSwitch from './ThemeSwitch'
import { LanguageSwitch } from './LanguageSwitch'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('common')

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#education', label: t('nav.education') },
    { href: '#blog', label: t('nav.blog') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home"
            className="font-bold text-xl text-primary hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
          >
            Bryan España
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition-all duration-300 relative group px-2 py-1"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <ThemeSwitch />
              <LanguageSwitch />
            </div>

            <button 
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 rounded-lg mx-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 mx-2">
              <ThemeSwitch />
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar