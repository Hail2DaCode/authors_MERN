import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './components/DisplayAll';
import NewAuthor from './components/Create';
import EditAuthor from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<AuthorList/>} exact path ="/" default/>
          <Route element = {<NewAuthor/>} path ="/new"/>
          <Route element = {<EditAuthor/>} path ="/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
