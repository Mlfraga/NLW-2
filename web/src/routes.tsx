import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeachersList from './pages/TeacherList';
import TeachersForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route path="/study" component={TeachersList} />
            <Route path="/give-classes" component={TeachersForm} />
        </BrowserRouter>
    )
}

export default Routes;