import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Landing from './components/landing';
import Login from './components/login';
import SignUp from './components/signUp';
import Todo from './components/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

