
const LabPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Laboratories</h1>
          <p className="text-lg mb-8">Explore our state-of-the-art physics, chemistry, and biology labs.</p>
        </div>
      </div>

      {/* Physics Lab Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Physics Laboratory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder images with descriptions */}
          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/physics-lab-outside.jpg" alt="Physics Lab Outside" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Outside Physics Lab</p>
              <p className="text-gray-700">View of our physics lab from the outside.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/physics-lab-inside.jpg" alt="Physics Lab Inside" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Inside Physics Lab</p>
              <p className="text-gray-700">Students working in our physics lab.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/physics-lab-staff.jpg" alt="Physics Lab Staff" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Physics Lab Staff</p>
              <p className="text-gray-700">Meet our dedicated physics lab staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemistry Lab Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Chemistry Laboratory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder images with descriptions */}
          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/chemistry-lab-outside.jpg" alt="Chemistry Lab Outside" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Outside Chemistry Lab</p>
              <p className="text-gray-700">View of our chemistry lab from the outside.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/chemistry-lab-inside.jpg" alt="Chemistry Lab Inside" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Inside Chemistry Lab</p>
              <p className="text-gray-700">Students working in our chemistry lab.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/chemistry-lab-staff.jpg" alt="Chemistry Lab Staff" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Chemistry Lab Staff</p>
              <p className="text-gray-700">Meet our dedicated chemistry lab staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Biology Lab Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Biology Laboratory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder images with descriptions */}
          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/biology-lab-outside.jpg" alt="Biology Lab Outside" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Outside Biology Lab</p>
              <p className="text-gray-700">View of our biology lab from the outside.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/biology-lab-inside.jpg" alt="Biology Lab Inside" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Inside Biology Lab</p>
              <p className="text-gray-700">Students working in our biology lab.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md relative">
            <img src="/images/biology-lab-staff.jpg" alt="Biology Lab Staff" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Biology Lab Staff</p>
              <p className="text-gray-700">Meet our dedicated biology lab staff.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabPage;
