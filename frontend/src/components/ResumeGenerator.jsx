import React, { useState } from 'react'
import axios from 'axios'

const ResumeGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
  })

  const [resumeTemplate, setResumeTemplate] = useState('template1')
  const [downloadUrl, setDownloadUrl] = useState('')

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/resume/generate`, {
        ...formData,
        template: resumeTemplate
      })
      setDownloadUrl(res.data.downloadUrl)
    } catch (err) {
      console.error(err)
      alert('Failed to generate resume')
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Resume Generator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded"/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded"/>
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border rounded"/>
        <textarea name="education" placeholder="Education" onChange={handleChange} className="w-full p-2 border rounded"/>
        <textarea name="experience" placeholder="Experience" onChange={handleChange} className="w-full p-2 border rounded"/>
        <select value={resumeTemplate} onChange={(e)=>setResumeTemplate(e.target.value)} className="w-full p-2 border rounded">
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
          <option value="template3">Template 3</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Generate Resume</button>
      </form>
      {downloadUrl && (
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-600 underline">
          Download Resume
        </a>
      )}
    </div>
  )
}

export default ResumeGenerator
