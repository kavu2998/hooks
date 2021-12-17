import './App.css';
import React, { useState } from 'react';
import ParentComponent from './components/ParentComponent';
import Header from './components/Header';
import Data from './components/Data';

export const CopyRightContext = React.createContext()

function App() {
  const [who, setWho] = useState('')
 
  const rateHandler = (e) => {
    console.log(e.target.value)
    setWho(e.target.value)
  }
  return (
    <CopyRightContext.Provider value = {"copyrights to Kauvya."}>
      <div className="App">
        <Header />
        <br />
        Who/What would you like to rate?
        <div onChange={e => { rateHandler(e) }}>
          <input type='radio' value="Product" name="feedback" />Product
          <input type='radio' value="Salesman" name="feedback" />Salesman
        </div>
        <br />
        {who && <ParentComponent name={who} />}
        {!who && <Data />}
        {!who && <span className="footer">copyrights to Kauvya.</span>}
      </div>
    </CopyRightContext.Provider>

  );
}

export default App;
