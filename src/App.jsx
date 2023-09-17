import React from 'react';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;