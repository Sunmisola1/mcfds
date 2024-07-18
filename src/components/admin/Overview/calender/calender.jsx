import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



// eslint-disable-next-line react-hooks/rules-of-hooks

export default function schoolcalender() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const [date, setDate] = useState(new Date());

  return (
    <div>  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">School Calendar</h3>
    <Calendar
      onChange={setDate}
      value={date}
      className="react-calendar"
    />
  </div>
</div>
  )
}
