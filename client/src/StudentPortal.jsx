import React, { useState } from 'react';
import { getExamById } from './api/examService';

// קומפוננטה של מסך הסטודנט
const StudentPortal = () => {
  // שומר את ה־ID שהסטודנט מקליד בשדה הקלט
  const [examId, setExamId] = useState('');

  // שומר את המבחן שנמצא לפי ה־ID
  // בהתחלה null כי עדיין לא חיפשנו/מצאנו מבחן
  const [exam, setExam] = useState(null);

  // שומר האם אנחנו כרגע במצב חיפוש/טעינה
  const [loading, setLoading] = useState(false);

  // שומר הודעת שגיאה אם המבחן לא נמצא
  const [error, setError] = useState(null);

  // פונקציה שרצה כאשר הסטודנט לוחץ על Start Exam
  const handleFetchExam = async (e) => {
    // מונע מהטופס לרענן את כל הדף
    e.preventDefault();

    // אם המשתמש לא הכניס ID אמיתי, לא עושים כלום
    if (!examId.trim()) return;

    // מתחילים מצב טעינה
    setLoading(true);

    // מנקים שגיאות קודמות
    setError(null);

    // מנקים מבחן קודם אם היה מוצג
    setExam(null);

    try {
      // מחפשים מבחן לפי ה־ID שהמשתמש הקליד
      const data = await getExamById(examId);

      // אם נמצא מבחן, שומרים אותו ב־state
      setExam(data);
    } catch (err) {
      // אם לא נמצא מבחן, מציגים הודעת שגיאה
      setError('Exam not found. Please check the ID.');
    } finally {
      // בכל מקרה, אחרי החיפוש מפסיקים את מצב הטעינה
      setLoading(false);
    }
  };

  // מה שמוחזר כאן הוא מה שיופיע במסך
  return (
    <div className="container mt-4">
      <h2>Student Portal</h2>

      <div className="card shadow-sm mt-3" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h5 className="card-title mb-3">Enter Exam ID to Start</h5>

          {/* טופס להזנת ID של מבחן */}
          <form onSubmit={handleFetchExam}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. exam-1"

                // הערך של השדה מגיע מה־state examId
                value={examId}

                // בכל שינוי בשדה, מעדכנים את examId
                onChange={(e) => setExamId(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"

              // בזמן טעינה הכפתור חסום כדי שלא ילחצו כמה פעמים
              disabled={loading}
            >
              {/* אם loading=true מציגים Searching, אחרת Start Exam */}
              {loading ? 'Searching...' : 'Start Exam'}
            </button>
          </form>

          {/* אם יש שגיאה, מציגים אותה */}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>

      {/* אם נמצא מבחן, מציגים כרטיס עם פרטי המבחן */}
      {exam && (
        <div className="mt-4 card">
          <div className="card-header bg-primary text-white">
            Ready to begin: {exam.title}
          </div>

          <div className="card-body">
            <p>This exam contains {exam.questions.length} questions.</p>
            <button className="btn btn-success">Begin Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentPortal;