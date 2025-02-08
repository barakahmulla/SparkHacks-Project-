// src/components/ScheduleForm.jsx
import { useState } from 'react';

function ScheduleForm({ addSchedule }) {
  const [time, setTime] = useState('');
  const [event, setEvent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!time || !event) {
      setError('Please fill in all fields');
      return;
    }
    addSchedule({ time, event });
    setTime('');
    setEvent('');
    setError('');
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Add Schedule</button>
    </form>
  );
}

export default ScheduleForm;
