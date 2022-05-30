import React from 'react';

const App = () => {
  return (
    <div>
        <header>
            <h1 id="siteTitle">Astrographer</h1>
            <nav id="navigator" className="flexspread">
              <span>Home</span>
              <span>About</span>
            </nav>
        </header>
        <main id="mainBody">
          {/* TODO: Set up React Router */}
        </main>
    </div>
  )
}

export default App