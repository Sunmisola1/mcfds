
const RecentActivities = () => {
  const activities = [
    { date: '2024-07-15', description: 'New admission application received' },
    { date: '2024-07-16', description: 'Updated the school flyer' },
    { date: '2024-07-17', description: 'Scheduled parent-teacher meetings' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="border-b pb-2 mb-2">
            <p className="text-sm text-gray-600">{activity.date}</p>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
