import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

//declares the app function as a functional component
const App : React.FC = () => {
  
  //|
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      <span className="heading">Remind.Me</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
