// src/pages/HomePage.js
import { useState } from 'react';
import ScheduleForm from '../components/ScheduleForm';

function HomePage({ addSchedule }) {
  const [schedules, setSchedules] = useState([]);

  return (
    <div>
      <h1>Your Schedule</h1>
      <ScheduleForm addSchedule={addSchedule} />
      <div>
        <h2>My Schedule</h2>
        <ul>
          {schedules.map((schedule, index) => (
            <li key={index}>
              {schedule.time} - {schedule.event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;