import { Route, Routes } from 'react-router-dom';
import './App.css';
import Indexpage from './components/Indexpage';
import Loginpage from './components/Loginpage';
import Layout from './components/Layout';
import Register from './components/Register';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:4000";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Indexpage/>}/>
        <Route path="/login" element={<Loginpage/>}/> 
        <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default App;
