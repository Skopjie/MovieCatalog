import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import HomeMovie from './pages/HomeMovie.jsx'
import MovieCatalog from './pages/MovieCatalog.jsx'
import MovieInfo from './pages/MovieInfo.jsx'

createRoot(document.getElementById('root')).render(
  <div className='container'>
    <div className='container-width'>
      <Router>
        <Routes>
          <Route path="/" element={<HomeMovie/>} />
          <Route path="/search" element={<MovieCatalog/>} />
          <Route path="/pelicula/:id" element={<MovieInfo/>} />
        </Routes>
      </Router>
    </div>
  </div>,
)
