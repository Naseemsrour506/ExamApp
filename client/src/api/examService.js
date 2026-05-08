import { mockExams } from './mockDb';

// זמן השהייה כדי לדמות בקשת רשת אמיתית לשרת
const DELAY = 500;

// מחזירה את כל המבחנים
export const getAllExams = () => {
  return new Promise((resolve) => {
    // מחכים חצי שנייה לפני שמחזירים תשובה
    setTimeout(() => {
      // מחזירים עותק חדש של מערך המבחנים
      resolve([...mockExams]);
    }, DELAY);
  });
};

// מחזירה מבחן לפי id
export const getExamById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // מחפשים במערך מבחן שה-id שלו שווה בדיוק ל-id שקיבלנו
      const exam = mockExams.find((e) => e.id === id);

      // אם נמצא מבחן — מחזירים אותו כהצלחה
      if (exam) {
        resolve(exam);
      } 
      // אם לא נמצא — מחזירים שגיאה
      else {
        reject(new Error('Exam not found'));
      }
    }, DELAY);
  });
};

// יוצרת מבחן חדש ומוסיפה אותו ל-mock database
export const createExam = (exam) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // יוצרים אובייקט חדש: מעתיקים את exam ומוסיפים לו id חדש
      const newExam = { ...exam, id: `exam-${Date.now()}` };

      // מוסיפים את המבחן החדש למערך המבחנים
      mockExams.push(newExam);

      // מחזירים את המבחן החדש כהצלחה
      resolve(newExam);
    }, DELAY);
  });
};