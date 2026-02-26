import React, { useState } from 'react';
import './StudyPlanner.css';

const StudyPlanner = ({ studentData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [studySessions, setStudySessions] = useState([
    {
      id: 1,
      subject: 'Physics',
      topic: 'Modern Physics - Quantum Mechanics',
      date: '2026-02-26',
      startTime: '09:00',
      endTime: '11:00',
      completed: false,
      priority: 'high',
      location: 'Science Hall 105',
      semester: '+2 Grade XI',
      courseCode: 'PHY113'
    },
    {
      id: 2,
      subject: 'C Programming',
      topic: 'Pointers and Dynamic Memory Allocation',
      date: '2026-02-26',
      startTime: '13:00',
      endTime: '15:00',
      completed: false,
      priority: 'high',
      location: 'CS Lab 3',
      semester: 'BSc CSIT Semester I',
      courseCode: 'CSC110'
    },
    {
      id: 3,
      subject: 'Database Management System',
      topic: 'Normalization and SQL Queries',
      date: '2026-02-26',
      startTime: '16:00',
      endTime: '18:00',
      completed: true,
      priority: 'medium',
      location: 'Online',
      semester: 'BSc CSIT Semester IV',
      courseCode: 'CSC260'
    },
    {
      id: 4,
      subject: 'Mathematics',
      topic: 'Derivatives and Applications',
      date: '2026-02-27',
      startTime: '10:00',
      endTime: '12:00',
      completed: false,
      priority: 'medium',
      location: 'Library',
      semester: '+2 Grade XII',
      courseCode: 'MTH112'
    },
    {
      id: 5,
      subject: 'Computer Networks',
      topic: 'OSI Model and TCP/IP',
      date: '2026-02-28',
      startTime: '14:00',
      endTime: '16:00',
      completed: false,
      priority: 'high',
      location: 'CS Building 201',
      semester: 'BSc CSIT Semester IV',
      courseCode: 'CSC258'
    },
    {
      id: 6,
      subject: 'Chemistry',
      topic: 'Organic Chemistry - Hydrocarbons',
      date: '2026-02-29',
      startTime: '11:00',
      endTime: '13:00',
      completed: false,
      priority: 'medium',
      location: 'Chemistry Lab',
      semester: '+2 Grade XI',
      courseCode: 'CHE201'
    }
  ]);

  const [showAddSession, setShowAddSession] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('+2');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [newSession, setNewSession] = useState({
    subject: '',
    topic: '',
    date: '',
    startTime: '',
    endTime: '',
    priority: 'medium',
    location: '',
    semester: '',
    courseCode: ''
  });

  // +2 Science Subjects (NEB Curriculum)
  const plusTwoSubjects = {
    'Grade XI': [
      { name: 'Comp. English', code: 'ENG101' },
      { name: 'Comp. Nepali', code: 'NEP101' },
      { name: 'Comp. Mathematics', code: 'MTH101' },
      { name: 'Physics', code: 'PHY101' },
      { name: 'Chemistry', code: 'CHE101' },
      { name: 'Biology', code: 'BIO101' },
      { name: 'Computer Science', code: 'CSC101' }
    ],
    'Grade XII': [
      { name: 'Comp. English', code: 'ENG102' },
      { name: 'Comp. Nepali', code: 'NEP102' },
      { name: 'Comp. Mathematics', code: 'MTH102' },
      { name: 'Physics', code: 'PHY102' },
      { name: 'Chemistry', code: 'CHE102' },
      { name: 'Biology', code: 'BIO102' },
      { name: 'Computer Science', code: 'CSC102' }
    ]
  };

  // BSc CSIT Subjects (TU Curriculum)
  const bscCsitSubjects = {
    'Semester I': [
      { name: 'Introduction to Information Technology', code: 'CSC109' },
      { name: 'C Programming', code: 'CSC110' },
      { name: 'Digital Logic', code: 'CSC111' },
      { name: 'Mathematics I', code: 'MTH112' },
      { name: 'Physics', code: 'PHY113' }
    ],
    'Semester II': [
      { name: 'Discrete Structure', code: 'CSC160' },
      { name: 'Object Oriented Programming', code: 'CSC161' },
      { name: 'Microprocessor', code: 'CSC162' },
      { name: 'Mathematics II', code: 'MTH163' },
      { name: 'Statistics I', code: 'STA164' }
    ],
    'Semester III': [
      { name: 'Data Structure and Algorithms', code: 'CSC206' },
      { name: 'Numerical Method', code: 'CSC207' },
      { name: 'Computer Architecture', code: 'CSC208' },
      { name: 'Computer Graphics', code: 'CSC209' },
      { name: 'Statistics II', code: 'STA210' }
    ],
    'Semester IV': [
      { name: 'Theory of Computation', code: 'CSC257' },
      { name: 'Computer Networks', code: 'CSC258' },
      { name: 'Operating Systems', code: 'CSC259' },
      { name: 'Database Management System', code: 'CSC260' },
      { name: 'Artificial Intelligence', code: 'CSC261' }
    ],
    'Semester V': [
      { name: 'Design and Analysis of Algorithms', code: 'CSC314' },
      { name: 'System Analysis and Design', code: 'CSC315' },
      { name: 'Cryptography', code: 'CSC316' },
      { name: 'Simulation and Modeling', code: 'CSC317' },
      { name: 'Web Technology', code: 'CSC318' }
    ],
    'Semester VI': [
      { name: 'Software Engineering', code: 'CSC364' },
      { name: 'Compiler Design and Construction', code: 'CSC365' },
      { name: 'E-Governance', code: 'CSC366' },
      { name: '.NET Centric Computing', code: 'CSC367' },
      { name: 'Technical Writing', code: 'CSC368' }
    ],
    'Semester VII': [
      { name: 'Advanced Java Programming', code: 'CSC409' },
      { name: 'Data Warehousing and Data Mining', code: 'CSC410' },
      { name: 'Principles of Management', code: 'MGT411' },
      { name: 'Project Work', code: 'CSC412' }
    ],
    'Semester VIII': [
      { name: 'Advanced Database', code: 'CSC461' },
      { name: 'Internship', code: 'CSC462' }
    ],
    'Electives': [
      { name: 'Network Security', code: 'CSC416' },
      { name: 'Cloud Computing', code: 'CSC465' },
      { name: 'Mobile Application Development', code: 'CSC468' },
      { name: 'Game Technology', code: 'CSC463' },
      { name: 'E-commerce', code: 'CSC370' },
      { name: 'Image Processing', code: 'CSC321' },
      { name: 'Multimedia Computing', code: 'CSC319' },
      { name: 'Geographical Information System', code: 'CSC471' }
    ]
  };

  const handleLevelChange = (e) => {
    const level = e.target.value;
    setSelectedLevel(level);
    setSelectedSemester('');
    setNewSession({
      ...newSession,
      subject: '',
      semester: '',
      courseCode: ''
    });
  };

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setSelectedSemester(semester);
    setNewSession({
      ...newSession,
      subject: '',
      semester: semester,
      courseCode: ''
    });
  };

  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    const [subjectName, subjectCode] = selectedSubject.split('|');
    
    let semester = '';
    if (selectedLevel === '+2') {
      semester = selectedSemester;
    } else {
      semester = selectedSemester;
    }
    
    setNewSession({
      ...newSession,
      subject: subjectName,
      courseCode: subjectCode,
      semester: semester
    });
  };

  const handleAddSession = () => {
    if (newSession.subject && newSession.topic && newSession.date) {
      setStudySessions([
        ...studySessions,
        {
          ...newSession,
          id: studySessions.length + 1,
          completed: false
        }
      ]);
      setNewSession({
        subject: '',
        topic: '',
        date: '',
        startTime: '',
        endTime: '',
        priority: 'medium',
        location: '',
        semester: '',
        courseCode: ''
      });
      setSelectedLevel('+2');
      setSelectedSemester('');
      setShowAddSession(false);
    }
  };

  const toggleComplete = (id) => {
    setStudySessions(studySessions.map(session =>
      session.id === id ? { ...session, completed: !session.completed } : session
    ));
  };

  const deleteSession = (id) => {
    if (window.confirm('Are you sure you want to delete this study session?')) {
      setStudySessions(studySessions.filter(session => session.id !== id));
    }
  };

  const getTodaySessions = () => {
    const today = new Date().toISOString().split('T')[0];
    return studySessions.filter(session => session.date === today);
  };

  const getUpcomingSessions = () => {
    const today = new Date().toISOString().split('T')[0];
    return studySessions.filter(session => session.date > today);
  };

  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  const calculateStudyHours = () => {
    const totalMinutes = studySessions.reduce((total, session) => {
      if (session.startTime && session.endTime) {
        const start = session.startTime.split(':');
        const end = session.endTime.split(':');
        const startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
        const endMinutes = parseInt(end[0]) * 60 + parseInt(end[1]);
        return total + (endMinutes - startMinutes);
      }
      return total;
    }, 0);
    return (totalMinutes / 60).toFixed(1);
  };

  const calculateCompletedSessions = () => {
    return studySessions.filter(session => session.completed).length;
  };

  const getSubjectsForSelected = () => {
    if (selectedLevel === '+2') {
      return selectedSemester ? plusTwoSubjects[selectedSemester] || [] : [];
    } else {
      return selectedSemester ? bscCsitSubjects[selectedSemester] || [] : [];
    }
  };

  return (
    <div className="planner-container">
      <div className="planner-header">
        <h1>Study Planner - Nepal Curriculum</h1>
        <button className="add-session-btn" onClick={() => setShowAddSession(true)}>
          + Add Study Session
        </button>
      </div>

      {/* Stats Overview */}
      <div className="planner-stats">
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <div className="stat-info">
            <h3>Total Sessions</h3>
            <p className="stat-value">{studySessions.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">✅</span>
          <div className="stat-info">
            <h3>Completed</h3>
            <p className="stat-value">{calculateCompletedSessions()}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">⏰</span>
          <div className="stat-info">
            <h3>Study Hours</h3>
            <p className="stat-value">{calculateStudyHours()}h</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🎯</span>
          <div className="stat-info">
            <h3>Focus Score</h3>
            <p className="stat-value">85%</p>
          </div>
        </div>
      </div>

      {/* Add Session Modal */}
      {showAddSession && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Study Session</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddSession(); }}>
              
              {/* Level Selection */}
              <div className="form-group">
                <label>Education Level</label>
                <select
                  value={selectedLevel}
                  onChange={handleLevelChange}
                  required
                >
                  <option value="+2">+2 Science (NEB)</option>
                  <option value="bsc-csit">BSc CSIT (TU)</option>
                </select>
              </div>

              {/* Semester/Grade Selection */}
              <div className="form-group">
                <label>{selectedLevel === '+2' ? 'Grade' : 'Semester'}</label>
                <select
                  value={selectedSemester}
                  onChange={handleSemesterChange}
                  required
                >
                  <option value="">Select {selectedLevel === '+2' ? 'Grade' : 'Semester'}</option>
                  {selectedLevel === '+2' ? (
                    <>
                      <option value="Grade XI">Grade XI</option>
                      <option value="Grade XII">Grade XII</option>
                    </>
                  ) : (
                    <>
                      <option value="Semester I">Semester I</option>
                      <option value="Semester II">Semester II</option>
                      <option value="Semester III">Semester III</option>
                      <option value="Semester IV">Semester IV</option>
                      <option value="Semester V">Semester V</option>
                      <option value="Semester VI">Semester VI</option>
                      <option value="Semester VII">Semester VII</option>
                      <option value="Semester VIII">Semester VIII</option>
                      <option value="Electives">Electives</option>
                    </>
                  )}
                </select>
              </div>

              {/* Subject Selection */}
              <div className="form-group">
                <label>Subject</label>
                <select
                  value={newSession.subject ? `${newSession.subject}|${newSession.courseCode}` : ''}
                  onChange={handleSubjectChange}
                  required
                  disabled={!selectedSemester}
                >
                  <option value="">Select Subject</option>
                  {getSubjectsForSelected().map(subject => (
                    <option key={subject.code} value={`${subject.name}|${subject.code}`}>
                      {subject.name} ({subject.code})
                    </option>
                  ))}
                </select>
              </div>

              {/* Topic */}
              <div className="form-group">
                <label>Topic/Chapter</label>
                <input
                  type="text"
                  value={newSession.topic}
                  onChange={(e) => setNewSession({ ...newSession, topic: e.target.value })}
                  placeholder="e.g., Quantum Mechanics, Arrays, Organic Chemistry"
                  required
                />
              </div>

              {/* Date and Priority */}
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    value={newSession.date}
                    onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Priority</label>
                  <select
                    value={newSession.priority}
                    onChange={(e) => setNewSession({ ...newSession, priority: e.target.value })}
                  >
                    <option value="high">High - Exam Soon</option>
                    <option value="medium">Medium - Assignment</option>
                    <option value="low">Low - Revision</option>
                  </select>
                </div>
              </div>

              {/* Time */}
              <div className="form-row">
                <div className="form-group">
                  <label>Start Time</label>
                  <input
                    type="time"
                    value={newSession.startTime}
                    onChange={(e) => setNewSession({ ...newSession, startTime: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>End Time</label>
                  <input
                    type="time"
                    value={newSession.endTime}
                    onChange={(e) => setNewSession({ ...newSession, endTime: e.target.value })}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="form-group">
                <label>Study Location</label>
                <input
                  type="text"
                  value={newSession.location}
                  onChange={(e) => setNewSession({ ...newSession, location: e.target.value })}
                  placeholder="e.g., Library, CS Lab, Home"
                />
              </div>

              {/* Course Code Display */}
              {newSession.courseCode && (
                <div className="course-code-info">
                  <span className="info-badge">Course Code: {newSession.courseCode}</span>
                  <span className="info-badge semester">{newSession.semester}</span>
                </div>
              )}

              <div className="modal-actions">
                <button type="submit" className="save-btn">Add Session</button>
                <button type="button" className="cancel-btn" onClick={() => setShowAddSession(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Today's Schedule */}
      <div className="schedule-section">
        <h2>Today's Schedule</h2>
        <div className="sessions-grid">
          {getTodaySessions().length > 0 ? (
            getTodaySessions().map(session => (
              <div key={session.id} className={`session-card ${getPriorityClass(session.priority)} ${session.completed ? 'completed' : ''}`}>
                <div className="session-header">
                  <input
                    type="checkbox"
                    checked={session.completed}
                    onChange={() => toggleComplete(session.id)}
                    className="session-checkbox"
                  />
                  <span className="session-subject">{session.subject}</span>
                  <span className="course-code-tag">{session.courseCode}</span>
                  <span className={`priority-badge ${session.priority}`}>{session.priority}</span>
                  <button className="delete-btn" onClick={() => deleteSession(session.id)}>×</button>
                </div>
                <div className="session-body">
                  <h3>{session.topic}</h3>
                  <div className="session-meta">
                    <span className="semester-tag">{session.semester}</span>
                  </div>
                  <div className="session-details">
                    <span>⏰ {session.startTime} - {session.endTime}</span>
                    <span>📍 {session.location}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>No study sessions scheduled for today</p>
              <button className="add-session-small" onClick={() => setShowAddSession(true)}>
                + Add Session
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="upcoming-section">
        <h2>Upcoming Sessions</h2>
        <div className="sessions-list">
          {getUpcomingSessions().length > 0 ? (
            getUpcomingSessions().map(session => (
              <div key={session.id} className={`session-item ${getPriorityClass(session.priority)}`}>
                <div className="session-date">
                  <span className="date-day">{new Date(session.date).getDate()}</span>
                  <span className="date-month">{new Date(session.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div className="session-info">
                  <div className="session-title">
                    <h4>{session.subject}</h4>
                    <span className="course-code">{session.courseCode}</span>
                  </div>
                  <p className="session-topic">{session.topic}</p>
                  <p className="session-time-location">
                    ⏰ {session.startTime} - {session.endTime} | 📍 {session.location}
                  </p>
                  <span className="semester-badge">{session.semester}</span>
                </div>
                <div className="session-actions">
                  <button className="mark-complete" onClick={() => toggleComplete(session.id)} title="Mark Complete">✓</button>
                  <button className="delete-small" onClick={() => deleteSession(session.id)} title="Delete">×</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-sessions">No upcoming sessions</p>
          )}
        </div>
      </div>

      {/* Weekly Overview */}
      <div className="weekly-overview">
        <h2>Weekly Overview</h2>
        <div className="week-grid">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => {
            const date = new Date();
            date.setDate(date.getDate() - date.getDay() + index);
            const dateStr = date.toISOString().split('T')[0];
            const daySessions = studySessions.filter(s => s.date === dateStr);
            
            return (
              <div key={day} className="week-day">
                <div className="day-header">
                  <span className="day-name">{day}</span>
                  <span className="day-date">{date.getDate()}</span>
                </div>
                <div className="day-sessions">
                  {daySessions.length > 0 ? (
                    daySessions.map(session => (
                      <div key={session.id} className={`mini-session ${session.completed ? 'completed' : ''}`}>
                        <span className="session-time">{session.startTime}</span>
                        <span className="session-subject">{session.subject}</span>
                        <span className="mini-code">{session.courseCode}</span>
                      </div>
                    ))
                  ) : (
                    <p className="no-sessions">-</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudyPlanner;