import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [ expression, setExpression] = useState('');
  const [ displayOutput, setDisplayOutput ] = useState(0);

  const resetPressed = () => {
    setExpression('');
    setDisplayOutput(0);
  }
  const numberPressed = (event) => {
    let inputString = expression + event.currentTarget.value;
    setExpression(inputString);
    
  }
  const operationPressed = (event) => {
    let inputString = expression;
    if(inputString !== '' && inputString.length > 0){
      let lastChar = inputString.charAt(inputString.length-1);
      if(lastChar !== event.currentTarget.value && lastChar.match(/^([0-9])$/)) {
        inputString = expression + event.currentTarget.value;
        setExpression(inputString);
       

      }
    }
  }
  const calculateFinalValue = () => {
    let inputExpression = expression;
    if(inputExpression !== '' && inputExpression.length > 0){
      let lastChar = inputExpression.charAt(inputExpression.length-1);
      if(!lastChar.match(/^([0-9])$/)){
        inputExpression = inputExpression.substring(0, inputExpression.length-1);
      }

      let finalvalue = eval(inputExpression);
      setExpression(finalvalue.toString());
      setDisplayOutput(finalvalue.toString());
      
    }
  }

  return (
    <>
    <div className=" bg-gray-100 flex h-screen w-screen justify-center items-center ">
      <div className="bg-white w-64 h-auto rounded shadow">
        <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded">
          <div className="w-full text-5xl text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 text-right p-4  ">
            {displayOutput}
          </div>
        
          <div>
          <input className="w-full text-2xl text-white font-light focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 text-right p-4 mb-2" type="text" value={expression} />
          </div>
        </div>
        <div className="ml-2 mt-5">
           <Button value="7" run= { numberPressed } op="7" ></Button> 
           <Button value="8" run= { numberPressed }op="8"></Button> 
           <Button value="9" run= { numberPressed } op="9"></Button> 
           <Button value="+" run= { operationPressed } op="+"></Button> 
           <Button value="4" run= {numberPressed} op="4"></Button>
           <Button value="5" run= { numberPressed } op="5"></Button> 
           <Button value="6" run= { numberPressed } op="6"></Button> 
           <Button value="-" run= { operationPressed } op="-"></Button>
           <Button value="1" run= { numberPressed } op="1"></Button>
           <Button value="2" run= { numberPressed } op="2"></Button> 
           <Button value="3" run= { numberPressed } op="3"></Button> 
           <Button value="*" run= { operationPressed } op="*"></Button>
           <Button value="0" run= { numberPressed } op="0"></Button>
           <Button value="%" run= { operationPressed } op="%"></Button>
           <Button value="." run= { operationPressed } op="."></Button> 
           <Button value="/" run= { operationPressed } op="/"></Button> 
          <Button value="=" run= { calculateFinalValue } op="="></Button>
           <Button value="AC" run= { resetPressed } op="AC"></Button> 
        </div>
      </div>
    </div>
    </>
    
  );
}

export default App;
