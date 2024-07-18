// AdminOverview.jsx
import { useState } from 'react';
// import NewsAndUpdates from '.';
import RecentActivities from './RecentActivities/RecentActivities';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import PerformanceMetrics from './PerformanceMetrics/PerformanceMetrics';
import QuickLinks from './QuickLinks/QuickLinks';
import FeedbackSuggestions from './Feedback/Feedback';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Overview = () => {
  const [content, setContent] = useState({
    flyerTitle: '',
    flyerDescription: '',
    flyerLink: '',
    admissionTitle: '',
    admissionDescription: '',
    admissionLink: '',
  });


  const [date, setDate] = useState(new Date());


  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const handleSave = () => {
    // Save content to the backend or state management system
    console.log('Content saved:', content);
  };

  return (
    <div className="p-6 space-y-6">
    <h2 className="text-2xl font-bold mb-4">Edit Overview Section</h2>

    {/* Form for Flyer and Admission */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Flyer Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">School Flyer</h3>
        <input
          type="text"
          name="flyerTitle"
          value={content.flyerTitle}
          onChange={handleChange}
          placeholder="Flyer Title"
          className="block w-full mt-2 p-2 border border-gray-300 rounded"
        />
        <textarea
          name="flyerDescription"
          value={content.flyerDescription}
          onChange={handleChange}
          placeholder="Flyer Description"
          className="block w-full mt-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="url"
          name="flyerLink"
          value={content.flyerLink}
          onChange={handleChange}
          placeholder="Flyer Link"
          className="block w-full mt-2 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Admission Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Admission in Progress</h3>
        <input
          type="text"
          name="admissionTitle"
          value={content.admissionTitle}
          onChange={handleChange}
          placeholder="Admission Title"
          className="block w-full mt-2 p-2 border border-gray-300 rounded"
        />
        <textarea
          name="admissionDescription"
          value={content.admissionDescription}
          onChange={handleChange}
          placeholder="Admission Description"
          className="block w-full mt-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="url"
          name="admissionLink"
          value={content.admissionLink}
          onChange={handleChange}
          placeholder="Admission Link"
          className="block w-full mt-2 p-2 border border-gray-300 rounded"
        />
      </div>
    </div>

    <button
      onClick={handleSave}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-6"
    >
      Save Changes
    </button>

      {/* School Calendar */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">School Calendar</h3>
        <Calendar
          onChange={setDate}
          value={date}
          className="react-calendar"
        />
      </div>

    {/* Additional Components in Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RecentActivities />
      <UpcomingEvents />
      <PerformanceMetrics />
      <QuickLinks />
      <FeedbackSuggestions />
     
     
     {/* <NewsAndUpdates /> */}
    </div>
  </div>
  );
};

export default Overview;
