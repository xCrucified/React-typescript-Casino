import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import Slots from './components/SlotList';
import Login from './components/Account/Login';
import Register from './components/Account/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main/>}/>
          <Route path='slots' element={<Slots/>}/>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

