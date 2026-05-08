import React, { useState, useEffect } from 'react';
import { getAllExams } from './api/examService';

// קומפוננטה של מסך המורה
const TeacherDashboard = () => {
  // exams שומר את רשימת המבחנים
  // בהתחלה הרשימה ריקה
  const [exams, setExams] = useState([]);

  // loading אומר אם אנחנו עדיין מחכים לנתונים
  // בהתחלה true כי עוד לא הבאנו נתונים
  const [loading, setLoading] = useState(true);

  // useEffect רץ פעם אחת כשהמסך נפתח
  useEffect(() => {
    // פונקציה פנימית שמביאה את המבחנים
    const fetchExams = async () => {
      try {
        // מחכים לפונקציה getAllExams שתחזיר את המבחנים
        const data = await getAllExams();

        // שומרים את המבחנים בתוך state
        setExams(data);
      } catch (error) {
        // אם קרתה שגיאה, מדפיסים אותה בקונסול
        console.error('Error fetching exams:', error);
      } finally {
        // בכל מקרה מפסיקים את מצב הטעינה
        setLoading(false);
      }
    };

    // מפעילים את הפונקציה
    fetchExams();
  }, []);

  // מה שיוחזר כאן הוא מה שיופיע במסך
  return (
    <div className="container mt-4">
      <h2>Teacher Dashboard</h2>

      <div className="card shadow-sm mt-3">
        <div className="card-body">
          <h5 className="card-title">All Exams</h5>

          {/* אם loading הוא true, מציגים הודעת טעינה */}
          {loading ? (
            <p>Loading exams...</p>
          ) : (
            <div className="list-group mt-3">
              {/* אם יש מבחנים, מציגים אותם */}
              {exams.length > 0 ? (
                exams.map((exam) => (
                  <div
                    key={exam.id}
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  >
                    <div>
                      {/* שם המבחן */}
                      <strong>{exam.title}</strong>

                      {/* מזהה המבחן ומספר השאלות */}
                      <div className="text-muted small">
                        ID: {exam.id} | {exam.questions.length} Questions
                      </div>
                    </div>

                    {/* כרגע הכפתור רק מוצג ולא עושה פעולה */}
                    <button className="btn btn-sm btn-outline-primary">
                      View Details
                    </button>
                  </div>
                ))
              ) : (
                // אם אין מבחנים
                <p>No exams found.</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        {/* כרגע הכפתור רק מוצג ולא עושה פעולה */}
        <button className="btn btn-success">Create New Exam</button>
      </div>
    </div>
  );
};

export default TeacherDashboard;