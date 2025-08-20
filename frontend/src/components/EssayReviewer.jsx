import React, { useState } from 'react'
import axios from 'axios'

const EssayReviewer = () => {
  const [essay, setEssay] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/essay/review`, { essay })
      setFeedback(res.data.feedback)
    } catch (err) {
      console.error(err)
      alert('Failed to review essay')
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Essay Reviewer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea value={essay} onChange={e=>setEssay(e.target.value)} placeholder="Paste your essay here..." className="w-full p-2 border rounded h-40"/>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Review Essay</button>
      </form>
      {feedback && <div className="mt-4 p-4 bg-gray-100 rounded">{feedback}</div>}
    </div>
  )
}

export default EssayReviewer
