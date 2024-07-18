// QuickLinks.jsx

import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-4">
        <li>
          <Link to="/admin/flyer" className="text-blue-600 hover:underline">
            School Flyer
          </Link>
        </li>
        <li>
          <Link to="/admin/admissions" className="text-blue-600 hover:underline">
            Admissions
          </Link>
        </li>
        <li>
          <Link to="/admin/events" className="text-blue-600 hover:underline">
            Events
          </Link>
        </li>
        <li>
          <Link to="/admin/reports" className="text-blue-600 hover:underline">
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
