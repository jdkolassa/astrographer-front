import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import About from './About';
import Grid from './components/Grid';

const App = () => {
  return (
    <div>
        <header>
            <h1 id="siteTitle">Astrographer</h1>
            <nav id="navigator" className="flexspread">
              <span><Link to="/">Home</Link></span>
              <span><Link to="/about">About</Link></span>
            </nav>
        </header>
        <main id="mainBody">
          {/* //? Is this the way to set up React Router? */}
          <Routes>
            <Route path="/" element={<Grid />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Outlet/>
    </div>
  )
}

export default App