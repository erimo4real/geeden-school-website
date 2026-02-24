import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSchool } from '../context/SchoolContext'

const slides = [
  {
    title: "Shape Your Future",
    subtitle: "Join our community of dedicated learners and expert educators",
    cta: "Apply Today",
    ctaLink: "/admissions",
    secondary: "Learn More",
    secondaryLink: "/about",
    bg: "from-sky-700 via-sky-600 to-blue-500"
  },
  {
    title: "Excellence in Education",
    subtitle: "World-class curriculum designed for tomorrow's leaders",
    cta: "View Programs",
    ctaLink: "/academics",
    secondary: "About Us",
    secondaryLink: "/about",
    bg: "from-emerald-600 via-teal-600 to-cyan-500"
  },
  {
    title: "Expert Faculty",
    subtitle: "Learn from dedicated teachers with years of experience",
    cta: "Meet Our Team",
    ctaLink: "/about",
    secondary: "Contact Us",
    secondaryLink: "/contact",
    bg: "from-violet-600 via-purple-600 to-indigo-500"
  },
  {
    title: "Vibrant Community",
    subtitle: "A supportive environment that nurtures every student",
    cta: "Join Our Family",
    ctaLink: "/admissions",
    secondary: "Learn More",
    secondaryLink: "/about",
    bg: "from-rose-600 via-pink-600 to-rose-500"
  },
  {
    title: "Bright Futures Start Here",
    subtitle: "Prepare for success in college and beyond",
    cta: "Apply Now",
    ctaLink: "/admissions",
    secondary: "Explore",
    secondaryLink: "/academics",
    bg: "from-amber-600 via-orange-600 to-red-500"
  }
]

export default function Home() {
  const { data } = useSchool()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-r ${slide.bg} transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 flex items-center justify-center min-h-[600px] text-center">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-center">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 mb-10 text-center">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to={slide.ctaLink}
                    className="bg-white text-gray-800 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    {slide.cta}
                  </Link>
                  <Link
                    to={slide.secondaryLink}
                    className="border-3 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white/20 transition-all hover:scale-105"
                  >
                    {slide.secondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-20"></div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-12' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Excellence Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide a nurturing environment that fosters academic excellence, character development, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🎓', value: data.stats.students, label: 'Students' },
              { icon: '👨‍🏫', value: data.stats.teachers, label: 'Teachers' },
              { icon: '📚', value: data.stats.programs, label: 'Programs' },
              { icon: '🏆', value: data.stats.clubs, label: 'Clubs & Activities' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-b from-sky-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-sky-600 mb-2">{stat.value}+</div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to meet the needs of every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.programs.slice(0, 6).map((program) => (
              <div key={program.id} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.name}</h3>
                <p className="text-gray-600 text-lg">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/academics"
              className="inline-flex items-center bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transition-all hover:scale-105"
            >
              View All Programs
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sky-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-2xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Take the first step towards an exceptional education. Our admissions team is here to help.
          </p>
          <Link
            to="/admissions"
            className="bg-white text-sky-700 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 inline-block"
          >
            Start Application
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Community Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "The teachers at Excellence Academy truly care about each student's success. My daughter has flourished here.", author: "Maria Johnson", role: "Parent" },
              { quote: "The STEM program gave me the foundation I needed to pursue engineering at MIT. I'm grateful for this school.", author: "David Chen", role: "Alumni, Class of 2023" },
              { quote: "Excellent academic preparation combined with strong character education. The best choice for our family.", author: "Robert Williams", role: "Parent" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-10 hover:shadow-xl transition-all">
                <div className="text-sky-500 text-6xl font-serif mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-gray-800 text-lg">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
