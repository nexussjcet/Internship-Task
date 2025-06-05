import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
    <h1 className="text-4xl font-bold text-indigo-700">Welcome to Reflectify</h1>
    <p className="text-gray-600 max-w-md">
      A place to track your tasks, write your thoughts, and reflect your mood.
    </p>
    <Link to="/home" className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition">
      Get Started
    </Link>
  </div>
);

export default Welcome;
