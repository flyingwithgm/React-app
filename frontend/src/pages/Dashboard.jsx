import React from "react";
import Navbar from "../components/Navbar";
import ResumeGenerator from "../components/ResumeGenerator";
import EssayReviewer from "../components/EssayReviewer";
import Documents from "../components/Documents";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8 space-y-8">
        <ResumeGenerator />
        <EssayReviewer />
        <Documents />
      </div>
    </div>
  );
};

export default Dashboard;
