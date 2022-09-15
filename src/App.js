import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<><Navbar /><Dashboard /></>}/>
      </Routes>
  );
}

export default App;
