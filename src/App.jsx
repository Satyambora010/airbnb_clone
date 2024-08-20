import { Route, Routes } from 'react-router-dom';
import './App.css';
import Indexpage from './components/Indexpage';
import Loginpage from './components/Loginpage';
import Layout from './components/Layout';
import Register from './components/Register';
import Accountpage from './components/Accountpage';
import axios from 'axios';
import { UserContextProvider } from './components/UserContext';

axios.defaults.baseURL="http://localhost:4000";
axios.defaults.withCredentials=true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Indexpage/>}/>
          <Route path="/login" element={<Loginpage/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/account/:subpage?" element={<Accountpage/>}/>
        </Route>
      </Routes> 
    </UserContextProvider>  
  )
}

export default App;
