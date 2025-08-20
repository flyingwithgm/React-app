import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">AI + Aviation Dashboard</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/resume" className="hover:underline">Resume</Link>
        <Link to="/essay" className="hover:underline">Essay</Link>
        <Link to="/documents" className="hover:underline">Documents</Link>
      </div>
    </nav>
  )
}

export default Navbar
