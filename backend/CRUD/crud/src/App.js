import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManageRestaurants from './pages/ManageRestaurants';
import ManageTypes from './pages/ManageTypes';
import ManageUsers from './pages/ManageUsers';
import ManageComments from './pages/ManageComments';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/restaurants' element={<ManageRestaurants/>}></Route>
            <Route path='/types' element={<ManageTypes/>}></Route>
            <Route path='/users' element={<ManageUsers/>}></Route>
            <Route path='/comments' element={<ManageComments/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
