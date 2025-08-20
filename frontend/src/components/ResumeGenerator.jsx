import React, { useState } from "react";
import api from "../api";

const templates = ["Classic", "Modern", "Creative"];

const ResumeGenerator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    template: templates[0],
  });

  const [downloadUrl, setDownloadUrl] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    try {
      const res = await api.post("/resume/generate", formData, {
        responseType: "blob",
      });
      const url = URL.createObjectURL(new Blob([res.data]));
      setDownloadUrl(url);
    } catch (err) {
      alert("Error generating resume");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Resume Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="template"
          value={formData.template}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          {templates.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleGenerate}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate & Download
      </button>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download={`${formData.name}_resume.pdf`}
          className="ml-4 text-blue-700 underline"
        >
          Download
        </a>
      )}
    </div>
  );
};

export default ResumeGenerator;
