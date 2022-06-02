import React, { useRef } from 'react'
import './styles.css'

//declare an interface for the props that this component will be recieving
interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

//apply the interface to the props that this component will be recieving 
const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  const inputRef= useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={(e)=>{
      handleAdd(e)
      //removes the keyboard focus from the current element
      inputRef.current?.blur();
    }}>
        <input ref={inputRef} type="input"
        value={todo}
        onChange={
          (e)=>setTodo(e.target.value)
        } className="input__box" placeholder='Enter a Reminder'/>
        <button className='input__submit'>Add</button>
    </form>
  )
}

export default InputField