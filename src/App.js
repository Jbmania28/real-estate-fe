import './App.css';
import Master from './Pages/Master';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Contactus from './Pages/Contactus';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import { BrowserRouter, Route, Router, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master/>}>
          <Route path='/' element={<Dashboard/>}/>
          <Route path="contactus" element={ <Contactus/> } />
          <Route path="profile" element={ <Profile/> } />
        </Route>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={ <Signup /> }/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
