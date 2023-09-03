import './App.css';
import Header from './Pages/Home Page/Components/header';
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home Page/Home';
import BookingPage from './Pages/Booking Page/BookingPage';
import { useEffect, useState } from 'react';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
