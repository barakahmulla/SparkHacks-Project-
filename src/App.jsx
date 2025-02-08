/ src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HangoutPage from './pages/HangoutPage';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [schedules, setSchedules] = useState([]);

  const addSchedule = (schedule) => {
    setSchedules([...schedules, schedule]);
    toast.success('Schedule added successfully!');
  };

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage addSchedule={addSchedule} />} />
        <Route path="/hangout" element={<HangoutPage schedules={schedules} />} />
      </Routes>
    </Router>
  );
}

export default App;


