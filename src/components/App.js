import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [name, setName] = useState('');
  const [currData, setCurrData] = useState('____');

  function handleOnchange(event) {
    setName(event.target.value);
  }
  function handleOnClick(){
    setCurrData(name);
  }
//code here
  return (
    <div id="main">
      <input id='input' value={name} onChange={handleOnchange} ></input>
      <button id='button' onClick={handleOnClick}>Click</button>
      <p id='text'> Hello my name is {currData} and I study at Newton School</p>
    </div>
  )
}


export default App;
