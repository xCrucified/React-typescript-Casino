import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import Slots from './components/SlotList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main/>}/>
          <Route path='slots' element={<Slots/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

