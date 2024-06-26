// OurManagement.js

// Sample data for management team


const Management = () => {
    const managementTeam = [
        {
          id: 1,
          name: 'John Doe',
          position: 'Principal',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
          id: 2,
          name: 'Jane Smith',
          position: 'Vice Principal',
          bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
          id: 3,
          name: 'Michael Johnson',
          position: 'Head of Curriculum',
          bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
      ];
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Management Team</h1>
          <p className="text-lg mb-8">Meet the leaders who drive our school forward.</p>
        </div>
      </div>

      {/* Main Content - Management Team */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full" />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-2">{member.name}</h2>
                <p className="text-gray-600 mb-2">{member.position}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
