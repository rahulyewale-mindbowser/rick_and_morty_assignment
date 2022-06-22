import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import CardList from './containers/CardList';
import FavoriteList from './containers/FavoriteList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
       <Router>
      <NavBar/>
      <Routes>
        <Route path= "/" element={<CardList/>}/>
        <Route path= "/favorite" element={<FavoriteList/>}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
