import { Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import ExamCategories from './components/seeExams/categories';
import SeeExamByClassId from './components/seeExams/classes';
import ExamsByClasses from './components/seeExams/classesExams';
import ExamsByTeacher from './components/seeExams/teacherExams';
import SeeExamByTeacher from './components/seeExams/teachers';
import SelectClass from './components/sendExam/classes';
import FinishSendExam from './components/sendExam/nameLink';
import SelectTeacher from './components/sendExam/teachers';
import SelectType from './components/sendExam/type';

function Pages() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/send-exam/teachers" element={<SelectTeacher />} />
        <Route exact path="/send-exam/class/:teacherId" element={<SelectClass />} />
        <Route exact path="/send-exam/type" element={<SelectType />} />
        <Route exact path="/send-exam/finish" element={<FinishSendExam />} />
        <Route exact path="/see-exam/categories" element={<ExamCategories />} />
        <Route exact path="/see-exam/categories/teachers" element={<SeeExamByTeacher />} />
        <Route exact path="/see-exam/categories/teachers/:id" element={<ExamsByTeacher />} />
        <Route exact path="/see-exam/categories/classes" element={<SeeExamByClassId />} />
        <Route exact path="/see-exam/categories/classes/:id" element={<ExamsByClasses />} />
      </Routes>
    </>
  );
}

export default Pages;
