import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-indigo-600 text-white py-4 shadow">
    <div className="container mx-auto px-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Reflectify</Link>
      <nav className="space-x-4">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/create" className="hover:underline">Create Task</Link>
      </nav>
    </div>
  </header>
);

export default Header;
