import './App.css';
import Login from './components/Landing';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Enter from './components/Enter';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Enter />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
