import { useRouter } from 'next/navigation'; // Import useHistory for navigation

export const ProjectContainer = () => {
  const route = useRouter(); // Initialize history for navigation

  const handleBack = () => {
    route.push('/'); // Navigate back to the root route
  };

  return (
    <div className="bg-gray-50 relative flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Work in Progress</h1>
      <p className="text-lg mb-6">This page is currently under construction.</p>
      <button 
        onClick={handleBack} 
        className="bg-theme text-white px-4 py-2 rounded hover:opacity-50 mb-4"
      >
        Back to Home
      </button>
    </div>
  );
};

