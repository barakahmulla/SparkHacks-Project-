// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HangoutPage from './pages/HangoutPage';
import { useState } from 'react';

function App() {
  const [schedules, setSchedules] = useState([]);

  const addSchedule = (schedule) => {
    setSchedules([...schedules, schedule]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage addSchedule={addSchedule} />} />
        <Route path="/hangout" element={<HangoutPage schedules={schedules} />} />
      </Routes>
    </Router>
  );
}

export default App;