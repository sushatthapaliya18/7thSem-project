import React, { useState } from 'react';
import './StudentProfile.css';

const StudentProfile = ({ studentData, setStudentData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...studentData });
  const [activeTab, setActiveTab] = useState('personal');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profilePicture: photoUrl });
    }
  };

  const handleSave = () => {
    setStudentData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...studentData });
    setIsEditing(false);
  };

  const courses = [
    { code: 'CS401', name: 'Advanced Algorithms', grade: 'A', credits: 4 },
    { code: 'CS402', name: 'Machine Learning', grade: 'A-', credits: 4 },
    { code: 'CS403', name: 'Database Systems', grade: 'B+', credits: 3 },
    { code: 'CS404', name: 'Web Development', grade: 'A', credits: 3 }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        {!isEditing && (
          <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
            ✎ Edit Profile
          </button>
        )}
      </div>

      <div className="profile-content">
        {/* Profile Sidebar */}
        <div className="profile-sidebar">
          <div className="profile-photo-section">
            <div className="profile-photo">
              {formData.profilePicture ? (
                <img src={formData.profilePicture} alt="Profile" />
              ) : (
                <div className="photo-placeholder">
                  <span>{formData.name?.charAt(0) || 'U'}</span>
                </div>
              )}
              {isEditing && (
                <label htmlFor="photo-upload" className="photo-upload-label">
                  <span className="camera-icon">📷</span>
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: 'none' }}
                  />
                </label>
              )}
            </div>
            <h2>{formData.name}</h2>
            <p className="student-id">{formData.studentId}</p>
            <p className="student-major">{formData.major}</p>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">{formData.semester}</span>
              <span className="stat-label">Current Semester</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{formData.gpa}</span>
              <span className="stat-label">GPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{formData.completedCourses}</span>
              <span className="stat-label">Courses Done</span>
            </div>
          </div>
        </div>

        {/* Profile Main Content */}
        <div className="profile-main">
          <div className="profile-tabs">
            <button
              className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Info
            </button>
            <button
              className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
              onClick={() => setActiveTab('academic')}
            >
              Academic Info
            </button>
            <button
              className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              Courses
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'personal' && (
              <div className="personal-info">
                {isEditing ? (
                  <form className="profile-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>University</label>
                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Major</label>
                      <input
                        type="text"
                        name="major"
                        value={formData.major}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-actions">
                      <button type="button" className="save-btn" onClick={handleSave}>Save Changes</button>
                      <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div className="info-display">
                    <div className="info-row">
                      <span className="info-label">Full Name:</span>
                      <span className="info-value">{studentData.name}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Email:</span>
                      <span className="info-value">{studentData.email}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">University:</span>
                      <span className="info-value">{studentData.university}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Major:</span>
                      <span className="info-value">{studentData.major}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Student ID:</span>
                      <span className="info-value">{studentData.studentId}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'academic' && (
              <div className="academic-info">
                <div className="info-card">
                  <h3>Academic Summary</h3>
                  <div className="academic-stats">
                    <div className="academic-stat">
                      <span className="stat-label">Current Semester</span>
                      <span className="stat-value">{studentData.semester}</span>
                    </div>
                    <div className="academic-stat">
                      <span className="stat-label">GPA</span>
                      <span className="stat-value">{studentData.gpa}</span>
                    </div>
                    <div className="academic-stat">
                      <span className="stat-label">Credits Completed</span>
                      <span className="stat-value">42</span>
                    </div>
                    <div className="academic-stat">
                      <span className="stat-label">Expected Graduation</span>
                      <span className="stat-value">May 2025</span>
                    </div>
                  </div>
                </div>

                <div className="info-card">
                  <h3>Academic Standing</h3>
                  <div className="standing-indicator good">
                    <span className="standing-icon">✓</span>
                    <span className="standing-text">Good Standing</span>
                  </div>
                  <div className="honor-roll">
                    <span className="honor-icon">🏆</span>
                    <span>Dean's List - Fall 2024</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="courses-info">
                <div className="current-courses">
                  <h3>Current Courses</h3>
                  <div className="courses-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Course Code</th>
                          <th>Course Name</th>
                          <th>Grade</th>
                          <th>Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map(course => (
                          <tr key={course.code}>
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td className={`grade-${course.grade.charAt(0)}`}>{course.grade}</td>
                            <td>{course.credits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;