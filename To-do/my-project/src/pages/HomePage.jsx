import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      name: 'To-Do List',
      description: 'Organize your day with tasks',
      path: '/todo',
      bg: 'bg-indigo-100',
      icon: '📝',
    },
    // Future features like Diary, Mood Tracker can go here
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome to Reflectify</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => navigate(feature.path)}
            className={`cursor-pointer p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ${feature.bg}`}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold">{feature.name}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
