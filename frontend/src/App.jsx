import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import ResumePage from './pages/ResumePage'
import EssayPage from './pages/EssayPage'
import DocumentsPage from './pages/DocumentsPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/essay" element={<EssayPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
