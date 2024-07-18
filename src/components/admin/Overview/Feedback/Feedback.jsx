// FeedbackSuggestions.jsx

const FeedbackSuggestions = () => {
  const feedbacks = [
    { name: 'John Doe', feedback: 'Great school with excellent teachers!' },
    { name: 'Jane Smith', feedback: 'The new cafeteria menu is wonderful!' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Feedback & Suggestions</h3>
      <ul className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <li key={index} className="border-b pb-2 mb-2">
            <p className="text-sm font-semibold">{feedback.name}</p>
            <p>{feedback.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackSuggestions;
