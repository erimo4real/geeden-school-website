import { createContext, useContext, useState } from 'react'

const SchoolContext = createContext()

export const schoolData = {
  name: 'Geeden Nursery and Primary School',
  tagline: 'Nurturing Young Minds',
  founded: 2010,
  address: '123 Geeden Street, City, State 12345',
  phone: '(555) 123-4567',
  email: 'info@geeden.edu',
  principal: 'Mrs. Grace Williams',
  vicePrincipal: 'Mr. John Peters',
  stats: {
    students: 350,
    teachers: 25,
    programs: 12,
    clubs: 8
  },
  academics: {
    nursery: { ages: '2-3', students: 50 },
    preschool: { ages: '4-5', students: 80 },
    primary: { grades: '1-6', students: 220 }
  },
  programs: [
    { id: 1, name: 'Early Literacy', description: 'Building reading and writing skills from an early age', icon: '📖' },
    { id: 2, name: 'Math Discovery', description: 'Fun math concepts through hands-on activities', icon: '🔢' },
    { id: 3, name: 'Creative Arts', description: 'Art, music, and creative expression', icon: '🎨' },
    { id: 4, name: 'Physical Education', description: 'Motor skills and healthy habits', icon: '⚽' },
    { id: 5, name: 'Science Exploration', description: 'Simple experiments and nature discovery', icon: '🔬' },
    { id: 6, name: 'Social Skills', description: 'Building confidence and teamwork', icon: '👫' }
  ],
  admissions: {
    requirements: [
      'Completed application form',
      'Previous academic records',
      'Teacher recommendations',
      'Student interview',
      'Standardized test scores'
    ],
    deadlines: {
      early: 'November 1',
      regular: 'January 15',
      rolling: 'Open Enrollment'
    },
    tuition: {
      nursery: '$4,500/year',
      preschool: '$3,800/year',
      primary: '$3,200/year'
    }
  }
}

export function SchoolProvider({ children }) {
  const [theme] = useState('light')
  const [data] = useState(schoolData)

  return (
    <SchoolContext.Provider value={{ theme, data }}>
      {children}
    </SchoolContext.Provider>
  )
}

export function useSchool() {
  const context = useContext(SchoolContext)
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider')
  }
  return context
}
