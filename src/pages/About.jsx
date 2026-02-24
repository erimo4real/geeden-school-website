import { useSchool } from '../context/SchoolContext'

export default function About() {
  const { data } = useSchool()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-sky-700 to-sky-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-2xl text-sky-100">Discover what makes Excellence Academy special</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">A Legacy of Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in {data.founded}, {data.name} has been dedicated to providing 
                exceptional education to generations of students. Our commitment to academic 
                excellence, character development, and innovation has made us one of the 
                most respected educational institutions in the region.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in nurturing the whole child - academically, socially, and emotionally. 
                Our diverse curriculum, experienced faculty, and supportive community create 
                an environment where every student can thrive.
              </p>
              <div className="flex items-center space-x-4 bg-sky-50 p-6 rounded-2xl">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏫</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-sky-700">{data.founded}</p>
                  <p className="text-gray-600 font-semibold">Year Founded</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-sky-700 mb-2">{data.stats.students}+</div>
                <div className="text-sky-600 font-semibold text-lg">Students</div>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-2">{data.stats.teachers}+</div>
                <div className="text-white font-semibold text-lg">Teachers</div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-gray-700 mb-2">{data.stats.programs}+</div>
                <div className="text-gray-600 font-semibold text-lg">Programs</div>
              </div>
              <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-2">{data.stats.clubs}+</div>
                <div className="text-white font-semibold text-lg">Clubs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">Meet the dedicated team guiding our school</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-5xl">👨‍💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{data.principal}</h3>
              <p className="text-sky-600 font-bold text-lg mb-4">Principal</p>
              <p className="text-gray-600 leading-relaxed">
                Leading our school with a vision for academic excellence and student success.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-5xl">👩‍💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{data.vicePrincipal}</h3>
              <p className="text-sky-600 font-bold text-lg mb-4">Vice Principal</p>
              <p className="text-gray-600 leading-relaxed">
                Supporting student achievement and ensuring a positive school environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Excellence', description: 'We strive for the highest standards in everything we do, from academics to athletics.' },
              { icon: '🤝', title: 'Integrity', description: 'We foster honesty, respect, and ethical behavior in all our interactions.' },
              { icon: '🌍', title: 'Inclusivity', description: 'We celebrate diversity and create a welcoming environment for all students and families.' },
            ].map((value, index) => (
              <div key={index} className="text-center p-10 bg-gray-50 rounded-2xl hover:bg-sky-50 transition-all">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
