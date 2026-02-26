import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab, studentData }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'planner', label: 'Study Planner', icon: '📅' },
    { id: 'courses', label: 'My Courses', icon: '📚' },
    { id: 'assignments', label: 'Assignments', icon: '📝' },
    { id: 'exams', label: 'Exams', icon: '✍️' },
    { id: 'progress', label: 'Progress', icon: '📈' },
    { id: 'resources', label: 'Resources', icon: '📁' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  // Get initials for avatar
  const getInitials = () => {
    if (!studentData?.name) return 'U';
    return studentData.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Get major abbreviation
  const getMajorAbbr = () => {
    if (!studentData?.major) return 'CS';
    const majorWords = studentData.major.split(' ');
    if (majorWords.length > 1) {
      return majorWords.map(word => word[0]).join('').toUpperCase();
    }
    return studentData.major.substring(0, 2).toUpperCase();
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <h2>Smart Study</h2>
          </div>
          <div className="nepali-flag">
            <img 
              src="https://flagcdn.com/w320/np.png" 
              alt="Nepali Flag" 
              className="flag-icon"
              title="नेपाली - Nepali"
            />
          </div>
        </div>
        
        {/* Dynamic Student Info */}
        <div className="student-info-container">
          {studentData?.profilePicture ? (
            <img 
              src={studentData.profilePicture} 
              alt={studentData.name}
              className="student-avatar-small"
            />
          ) : (
            <div className="student-avatar-initials">
              {getInitials()}
            </div>
          )}
          <div className="student-details">
            <p className="student-name">{studentData?.name || 'Alex Johnson'}</p>
            <p className="student-major-small">
              {studentData?.major || 'Computer Science'} • {getMajorAbbr()}
            </p>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.id === 'assignments' && studentData?.assignments > 0 && (
              <span className="nav-badge">{studentData.assignments}</span>
            )}
            {item.id === 'exams' && studentData?.upcomingExams > 0 && (
              <span className="nav-badge warning">{studentData.upcomingExams}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="study-streak">
          <span className="streak-icon">🔥</span>
          <span className="streak-text">7 Day Streak</span>
        </div>
        <button className="logout-btn">
          <span>🚪</span> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;