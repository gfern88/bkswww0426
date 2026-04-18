import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Process from './pages/Process'
import Resources from './pages/Resources'
import Quote from './pages/Quote'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/process" element={<Process />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
