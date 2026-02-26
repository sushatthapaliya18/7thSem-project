import React from 'react';
import './StudentDashboard.css';

const StudentDashboard = ({ studentData }) => {
  const upcomingTasks = [
    { id: 1, title: 'Math Assignment', course: 'Calculus II', due: 'Today', priority: 'high' },
    { id: 2, title: 'Research Paper', course: 'AI Fundamentals', due: 'Tomorrow', priority: 'medium' },
    { id: 3, title: 'Lab Report', course: 'Physics', due: '3 days', priority: 'low' },
    { id: 4, title: 'Group Project', course: 'Software Eng', due: '5 days', priority: 'medium' }
  ];

  const studySessions = [
    { id: 1, subject: 'Mathematics', time: '09:00 - 11:00', progress: 75 },
    { id: 2, subject: 'Programming', time: '13:00 - 15:00', progress: 60 },
    { id: 3, subject: 'Physics', time: '16:00 - 18:00', progress: 45 }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {studentData.name}! 👋</h1>
        <p className="date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-info">
            <h3>Total Study Hours</h3>
            <p className="stat-value">{studentData.studyHours}</p>
          </div>
          <div className="stat-trend positive">+12%</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-info">
            <h3>Assignments</h3>
            <p className="stat-value">{studentData.assignments}</p>
          </div>
          <div className="stat-trend">Due soon</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✍️</div>
          <div className="stat-info">
            <h3>Upcoming Exams</h3>
            <p className="stat-value">{studentData.upcomingExams}</p>
          </div>
          <div className="stat-trend warning">In 2 weeks</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-info">
            <h3>GPA</h3>
            <p className="stat-value">{studentData.gpa}</p>
          </div>
          <div className="stat-trend positive">↑0.2</div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Today's Schedule */}
        <div className="dashboard-card schedule-card">
          <div className="card-header">
            <h2>Today's Schedule</h2>
            <button className="view-all">View All</button>
          </div>
          <div className="schedule-list">
            {studySessions.map(session => (
              <div key={session.id} className="schedule-item">
                <div className="session-subject">{session.subject}</div>
                <div className="session-time">{session.time}</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${session.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="dashboard-card tasks-card">
          <div className="card-header">
            <h2>Upcoming Tasks</h2>
            <button className="add-task">+ Add Task</button>
          </div>
          <div className="tasks-list">
            {upcomingTasks.map(task => (
              <div key={task.id} className={`task-item priority-${task.priority}`}>
                <input type="checkbox" className="task-checkbox" />
                <div className="task-info">
                  <h4>{task.title}</h4>
                  <p>{task.course}</p>
                </div>
                <div className="task-due">
                  <span className="due-badge">{task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Progress */}
        <div className="dashboard-card progress-card">
          <div className="card-header">
            <h2>Weekly Progress</h2>
            <span className="week-number">Week 8</span>
          </div>
          <div className="progress-chart">
            <div className="subject-progress">
              <span>Mathematics</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
              <span className="percentage">85%</span>
            </div>
            <div className="subject-progress">
              <span>Programming</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '70%' }}></div>
              </div>
              <span className="percentage">70%</span>
            </div>
            <div className="subject-progress">
              <span>Physics</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }}></div>
              </div>
              <span className="percentage">60%</span>
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <div className="dashboard-card tips-card">
          <h2>Study Tips 💡</h2>
          <div className="tips-list">
            <div className="tip-item">
              <span className="tip-icon">⏰</span>
              <p>Take a 5-minute break every 25 minutes (Pomodoro Technique)</p>
            </div>
            <div className="tip-item">
              <span className="tip-icon">📝</span>
              <p>Review your notes within 24 hours of class</p>
            </div>
            <div className="tip-item">
              <span className="tip-icon">💪</span>
              <p>Stay hydrated - keep water on your desk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;