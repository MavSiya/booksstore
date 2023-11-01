import Head from './Head';
import './App.css';
import Registration from '../pages/Registration';
import Home from '../pages/Home';
//import BooksList from '../containers/BooksList';
import { Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import PageBuyer from '../pages/PageBuyer';
import PageSeller from '../pages/PageSeller';

function App() {
  return (
    <>
    <div className="wrapper">
      <Head/>
      <Routes>
      <Route path='/' element={<Home/>} />
    <Route path='/auth' element={<Auth/>} />
    <Route path='/registration' element={<Registration/>} />
      </Routes>
      
    </div>

  </>
  );
}

export default App;
