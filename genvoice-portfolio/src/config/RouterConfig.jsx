import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import ChangeLogin from '../Pages/ChangeLogin';
import ErrorPage from '../Pages/ErrorPage';

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/change-login' element={<ChangeLogin />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default RouterConfig;
