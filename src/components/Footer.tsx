import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 Bryan España. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer