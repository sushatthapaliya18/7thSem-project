import React, { useState } from 'react';
import StudentDashboard from './components/dashboard/StudentDashboard';
import StudentProfile from './components/profile/StudentProfile';
import StudyPlanner from './components/study/StudyPlanner';
import Sidebar from './components/common/Sidebar';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [studentData, setStudentData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@student.edu',
    university: 'Tribhuvan University',
    studentId: 'TUCSIT2024001',
    semester: '4th Semester',
    major: 'Computer Science',
    gpa: '3.8',
    profilePicture: null,
    studyHours: 120,
    completedCourses: 8,
    upcomingExams: 3,
    assignments: 5
  });

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <StudentDashboard studentData={studentData} />;
      case 'profile':
        return <StudentProfile studentData={studentData} setStudentData={setStudentData} />;
      case 'planner':
        return <StudyPlanner studentData={studentData} />;
      default:
        return <StudentDashboard studentData={studentData} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} studentData={studentData} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;