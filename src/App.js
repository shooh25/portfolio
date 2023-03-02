import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

import Home from './pages/Home';
import Walk from './pages/Walk';
import Movie from './pages/Movie';
import Justice from './pages/Justice';
import Sakuji from './pages/Sakuji';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work1' element={<Walk />} />
          <Route path='/work2' element={<Movie />} />
          <Route path='/work3' element={<Justice />} />
          <Route path='/work4' element={<Sakuji />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
