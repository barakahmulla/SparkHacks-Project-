// src/pages/HangoutPage.jsx
import { useState } from 'react';
import Popup from '../components/Popup';

function HangoutPage({ schedules }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedSchedule, setEditedSchedule] = useState({ time: '', event: '' });

  const deleteSchedule = (index) => {
    const newSchedules = schedules.filter((_, i) => i !== index);
    setSchedules(newSchedules);
  };

  const editSchedule = (index) => {
    setEditIndex(index);
    setEditedSchedule(schedules[index]);
    setIsOpen(true);
  };

  const saveEditedSchedule = () => {
    const newSchedules = [...schedules];
    newSchedules[editIndex] = editedSchedule;
    setSchedules(newSchedules);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View Schedules</button>
      <Popup
        schedules={schedules}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        deleteSchedule={deleteSchedule}
        editSchedule={editSchedule}
      />
      {editIndex !== null && (
        <div>
          <input
            type="time"
            value={editedSchedule.time}
            onChange={(e) => setEditedSchedule({ ...editedSchedule, time: e.target.value })}
          />
          <input
            type="text"
            value={editedSchedule.event}
            onChange={(e) => setEditedSchedule({ ...editedSchedule, event: e.target.value })}
          />
          <button onClick={saveEditedSchedule}>Save</button>
        </div>
      )}
    </div>
  );
}

export default HangoutPage;