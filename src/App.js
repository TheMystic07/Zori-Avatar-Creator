import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AvatarCreator from './pages/AvatarCreatorPage';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <button>
        <Link to="/avatar-creator" style={{ textDecoration: 'none', color: 'inherit' }}>
          Create
        </Link>
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar-creator" element={<AvatarCreator />} />
      </Routes>
    </Router>
  );
};

export default App;
