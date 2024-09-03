import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Course from './components/Course'
import Dashboard from './modules/dashboard/Dashboard'
import CourseDetails from './components/CourseDetails'
import CourseLayout from './components/CourseLayout'
import Layout from './components/Layout'
import Contact from './components/Contact'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/courses" element={<CourseLayout />}>
          <Route index element={<Course />} />
          <Route path=':name/:id' element={<CourseDetails />} />
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App