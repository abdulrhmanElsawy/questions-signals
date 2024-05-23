import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Landing2 from './components/Landing2';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
return (
    <Router basename="/questions-signals">
    <div className="App">
        <Routes>
        <Route path="/" element={<Landing2 />} />
        {/* Add more routes here */}
        </Routes>
        <ScrollToTopButton />
    </div>
    </Router>
);
}

export default App;