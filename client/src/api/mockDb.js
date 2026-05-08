export const mockExams = [
  {
    id: 'exam-1',
    title: 'React Fundamentals',
    questions: [
      { id: 1, question: 'What is JSX?', options: ['JavaScript XML', 'JSON XML', 'Java Syntax Extension'], answer: 'JavaScript XML' },
      { id: 2, question: 'What is a Hook?', options: ['A function', 'A component', 'A library'], answer: 'A function' }
    ]
  },
  {
    id: 'exam-2',
    title: 'Modern JavaScript',
    questions: [
      { id: 1, question: 'What does ES6 stand for?', options: ['ECMAScript 6', 'Essential Script 6', 'Easy Script 6'], answer: 'ECMAScript 6' }
    ]
  }
];

export const mockScores = [
  { studentName: 'Alice', examId: 'exam-1', score: 100 },
  { studentName: 'Bob', examId: 'exam-1', score: 50 }
];
