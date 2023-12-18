import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/LoginPage';
import FormPage from './pages/FormPage';
import PageButton from './pages/ButtonPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/register" element={ <FormPage /> } />
      <Route path="/homePage" element={ <PageButton/>} />
      <Route path="/userPage" element={<UserPage />} />
    </Routes>
  );
}

export default App
