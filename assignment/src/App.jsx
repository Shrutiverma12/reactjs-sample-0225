import './App.css';
import Dashboard from './components/pages/Dashboard';
import LoginPage from './components/pages/Login';
import Signup from './components/pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const isAuthenticated = true;
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/dashboard'
            element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
