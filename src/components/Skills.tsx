import { useTranslation } from 'next-i18next'

const Skills = () => {
  const { t } = useTranslation('common')
  
  const skillCategories = [
    {
      title: "Lenguajes",
      skills: ["JavaScript", "TypeScript", "Ruby", "Java", "Python", "Kotlin", "Dart"],
    },
    {
      title: "Frontend / UI",
      skills: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Material UI", "Flutter"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Ruby on Rails", "Spring Boot", "FastAPI", "PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps / Cloud",
      skills: ["Docker", "AWS", "Azure", "CI/CD", "GitHub Actions", "Kubernetes"],
    },
    {
      title: "Herramientas",
      skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {t('skills.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;