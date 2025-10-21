import { useTranslation } from 'next-i18next'

const Blog = () => {
  const { t } = useTranslation('common')
  
  // Mock blog posts - En el futuro esto podría venir de una API o CMS
  const posts = [
    {
      id: 1,
      title: "Construyendo Microservicios Escalables con Spring Boot",
      description: "Aprende las mejores prácticas para diseñar arquitecturas de microservicios robustas y escalables utilizando Spring Boot y Docker.",
      date: "2024-03-15",
      tags: ["Spring Boot", "Microservicios", "Docker"],
      readTime: "8 min",
    },
    {
      id: 2,
      title: "Flutter vs React Native: Comparación Completa 2024",
      description: "Análisis detallado de las dos frameworks más populares para desarrollo móvil multiplataforma, con casos de uso y rendimiento.",
      date: "2024-02-28",
      tags: ["Flutter", "React Native", "Mobile"],
      readTime: "12 min",
    },
    {
      id: 3,
      title: "Implementando CI/CD con Azure DevOps",
      description: "Guía paso a paso para configurar pipelines de integración y despliegue continuo en proyectos modernos.",
      date: "2024-02-10",
      tags: ["DevOps", "CI/CD", "Azure"],
      readTime: "10 min",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t('blog.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-900"
              >
                {/* Card Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-4">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6">
                  <button className="inline-flex items-center text-primary hover:text-primary-600 font-medium transition-colors">
                    {t('blog.readMore')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;