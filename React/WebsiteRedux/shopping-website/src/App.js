import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import NavBar from './components/NavBar';
import store from './components/store/store';
import {Provider} from 'react-redux';
import Card from './components/pages/Card';

function App() {
  return (
    <div className="App">
      <Provider store={store}>    
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
            path='/'
            element={<Home />}
            >
            </Route>
            <Route
            path='/cart'
            element={<Card />}>

            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>  
    </div>
  );
}

export default App;
