import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login'
import Register from '../pages/Register'

function AppRouter() {
    return (
      <Routes>
       
          <Route exact path="/" component={HomePage} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
       
      </Routes>
    );
  }
  
  export default AppRouter;