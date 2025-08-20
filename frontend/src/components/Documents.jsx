import React, { useState } from "react";
import api from "../api";

const Documents = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first");
    const formData = new FormData();
    formData.append("file", file);
    try {
      await api.post("/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploaded(true);
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Documents Organizer</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="ml-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Upload
      </button>
      {uploaded && <p className="mt-2 text-green-600">File uploaded successfully!</p>}
    </div>
  );
};

export default Documents;
