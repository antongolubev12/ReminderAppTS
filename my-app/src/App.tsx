import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

//declares the app function as a functional component
const App : React.FC = () => {
  
  //|
  const [todo, setTodo] = useState<string>("");

  //array of Todo Interface
  const [todos, setTodos]= useState<Todo[]>([]); 

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();

    //if todo is not empty
    if(todo){
      //append the todos state array with the current todo
      setTodos([...todos,{id: Date.now(), todo, isDone:false}])
      setTodo("");
      console.log(todos);
    }
  };
  
 


  return (
    <div className="App">
      <span className="heading">Remind.Me</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
