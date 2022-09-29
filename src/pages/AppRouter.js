import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './Login';
import Registration from './Registration';
import ListProjects from './ListProjects';
import CreateProject from './CreateProject';
import ChooseLessonLearned from './ChooseLessonLearned';
import CreateLessonLearned from './CreateLessonLearned';
import EditLessonLearned from './EditLessonLearned';
import EditProject from './EditProject';
import ViewProject from './ViewProject';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProjects/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/create-project" element={<CreateProject/>}/>
        <Route path="/choose-lesson" element={<ChooseLessonLearned/>}/>
        <Route path="/create-lesson" element={<CreateLessonLearned/>}/>
        <Route path="/edit-lesson" element={<EditLessonLearned/>}/>
        <Route path="/edit-project" element={<EditProject/>}/>
        <Route path="/view-project" element={<ViewProject/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;