import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ToDoList from './pages/ToDoList'; 
import Welcome from './pages/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/todo" element={<ToDoList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
