import React, { useState } from 'react'
import axios from 'axios'

const DocumentsOrganizer = () => {
  const [files, setFiles] = useState([])
  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleFileChange = (e) => {
    setFiles(e.target.files)
  }

  const handleUpload = async () => {
    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/documents/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setUploadedFiles(res.data.files)
    } catch (err) {
      console.error(err)
      alert('Upload failed')
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Documents Organizer</h2>
      <input type="file" multiple onChange={handleFileChange} className="mb-2"/>
      <button onClick={handleUpload} className="bg-purple-600 text-white px-4 py-2 rounded mb-4">Upload</button>
      {uploadedFiles.length > 0 && (
        <ul className="list-disc pl-5">
          {uploadedFiles.map((file, i) => <li key={i}>{file.filename}</li>)}
        </ul>
      )}
    </div>
  )
}

export default DocumentsOrganizer
