import React from 'react';
import './App.css';
import Font from './Components/FontComp/Font';
import NewsDetail from "./Components/NewsDetail/NewsDetail"

function App() {
  return (
    <div className="App">
      <Font>
       <NewsDetail/>
      
      </Font>
    </div>
  );
}

export default App;
