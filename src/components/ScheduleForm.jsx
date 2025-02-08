// src/components/ScheduleForm.js
import { useState } from 'react';

function ScheduleForm({ addSchedule }) {
  const [time, setTime] = useState('');
  const [event, setEvent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSchedule({ time, event });
    setTime('');
    setEvent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        placeholder="Event Description"
        required
      />
      <button type="submit">Add Schedule</button>
    </form>
  );
}

export default ScheduleForm;