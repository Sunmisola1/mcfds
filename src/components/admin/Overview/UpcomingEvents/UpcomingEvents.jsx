
const UpcomingEvents = () => {
  const events = [
    { date: '2024-08-01', event: 'School Open House' },
    { date: '2024-08-15', event: 'Parent-Teacher Conference' },
    { date: '2024-09-01', event: 'Fall Semester Begins' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="border-b pb-2 mb-2">
            <p className="text-sm text-gray-600">{event.date}</p>
            <p>{event.event}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
