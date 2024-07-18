// PerformanceMetrics.jsx

const PerformanceMetrics = () => {
  const metrics = [
    { title: 'Student Enrollment', value: '500' },
    { title: 'Teachers', value: '35' },
    { title: 'Classes', value: '20' },
    { title: 'Events this Month', value: '5' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center border p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">{metric.title}</h4>
          <p className="text-2xl font-bold">{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;
