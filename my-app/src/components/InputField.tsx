import React from 'react'
import './styles.css'

//declare an interface for the props that this component will be recieving
interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
//apply the interface to the props that this component will be recieving 
const InputField: React.FC<Props> = ({todo,setTodo}) => {
  return (
    <form className="input">
        <input type="input"
        value={todo}
        onChange={
          (e)=>setTodo(e.target.value)
        } className="input__box" placeholder='Enter a Reminder'/>
        <button className='input__submit'>Add</button>
    </form>
  )
}

export default InputField