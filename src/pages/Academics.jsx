import { useSchool } from '../context/SchoolContext'

export default function Academics() {
  const { data } = useSchool()

  const levels = [
    {
      ...data.academics.nursery,
      title: 'Nursery',
      icon: '🏫',
      description: 'Our nursery program provides a warm, nurturing environment where toddlers develop foundational skills through play-based learning and guided exploration.',
      features: ['Sensory Play', 'Story Time', 'Music & Movement', 'Arts & Crafts', 'Outdoor Play', 'Social Skills']
    },
    {
      ...data.academics.preschool,
      title: 'Preschool',
      icon: '📚',
      description: 'Our preschool program builds on early foundations with structured learning activities that develop literacy, numeracy, and social-emotional skills.',
      features: ['Early Literacy', 'Number Concepts', 'Science Discovery', 'Creative Arts', 'Physical Education', 'Communication Skills']
    },
    {
      ...data.academics.primary,
      title: 'Primary School',
      icon: '🎓',
      description: 'Our primary program delivers a comprehensive curriculum that challenges students academically while fostering critical thinking and personal growth.',
      features: ['English Language Arts', 'Mathematics', 'Science', 'Social Studies', 'Art & Music', 'Physical Education']
    }
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-sky-100">Building foundations from nursery through primary</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our curriculum is designed to challenge students while supporting their individual growth and learning styles.
            </p>
          </div>

          <div className="space-y-12">
            {levels.map((level, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-4xl">{level.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{level.title}</h3>
                        <p className="text-sky-600 font-medium">{level.ages ? `Ages ${level.ages}` : `Grades ${level.grades}`} • {level.students} Students</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-sky-100 rounded-full">
                      <span className="text-3xl">{level.icon}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Special Programs</h2>
            <p className="text-xl text-gray-600">Enriching opportunities beyond the classroom</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sky-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Our academic advisors are here to help you find the right program for your child.
          </p>
          <a
            href="/contact"
            className="bg-white text-sky-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
