import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './stylesheets/alignment.css';
import './stylesheets/custom.css';
import './stylesheets/form-element.css';
import './stylesheets/sizes.css';
import './stylesheets/themes.css';
import './components/ProtectedRoute'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
