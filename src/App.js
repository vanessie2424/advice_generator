import './App.css';
import { useState } from 'react';
import  Axios  from 'axios';
import buttonDice from './images/icon-dice.svg'
import patternDesktop from './images/pattern-divider-desktop.svg'
import patternMobile from './images/pattern-divider-mobile.svg'




function App() {

  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");
  Axios.get("https://api.adviceslip.com/advice").then((res)=>{
    setAdvice(res.data.slip.advice);
});
  Axios.get("https://api.adviceslip.com/advice").then((res)=>{
      setId(res.data.slip.id);
  });
 
  const fetchAdvice = () =>{
    Axios.get("https://api.adviceslip.com/advice").then((res)=>{
      setAdvice(res.data.slip.advice);
  });
  }
  const fetchId = () =>{
    Axios.get("https://api.adviceslip.com/advice").then((res)=>{
      setId(res.data.slip.id);
  });
  }
 
  return (
    <div className="App">
      <div className='container'>
        <h3>Advice # {id}</h3>
        <h1> {advice}</h1>
        <img src= {patternDesktop} alt ="pattern desktop" className='pattern'/> <br></br>
        <img src= {patternMobile} alt ="pattern mobile" className='mobile'/> <br></br>
      </div>
      <div className='green'>
      <img src= {buttonDice} className="button_dice" 
        alt = "button icon" onClick={()=>{fetchAdvice(); fetchId();}} />
      </div>
   
    </div>
  );
}

export default App;
