import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export const LanguageSwitch = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const handleLanguageChange = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          router.locale === 'es'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {t('languages.spanish')}
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          router.locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {t('languages.english')}
      </button>
    </div>
  )
}