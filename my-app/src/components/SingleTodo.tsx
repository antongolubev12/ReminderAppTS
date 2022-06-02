import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './model'
import { AiTwotoneEdit, AiTwotoneDelete, AiOutlineCheck } from 'react-icons/ai'
import './styles.css'

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);


    const handleDone = (id: number) => {
        //find the todo in todos using its is and 
        //invert the isDone property of it
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
        );
    }

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        //loop over todos with map
        setTodos(todos.map((todo) => (
            //if the id is a match, then set the todo to editTodo
            //otherwise dont change it 
            todo.id === id ? { ...todo, todo: editTodo } : todo))
        );

        setEdit(false);
    }

    useEffect(() => {
      ref.current?.focus();
    }, [edit])
    

    const ref = useRef<HTMLInputElement>(null)

    return (
        <form action="" className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>

            {
                edit ? (
                    <input
                        ref={ref} value={editTodo} onChange={(e) => setEditTodo(e.target.value)}
                        className='todos__single__text' />
                ) :
                    //if the todo is done, render it with a strike
                    todo.isDone ? (
                        <s className="todos__single__text">{todo.todo}</s>
                    ) : (
                        <span className="todos__single__text">{todo.todo}</span>
                    )
            }
            
            <div>
                <span className="icons" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}>
                    <AiTwotoneEdit />
                </span>
                <span className="icons" onClick={() => handleDelete(todo.id)}>
                    <AiTwotoneDelete />
                </span>
                <span className="icons" onClick={() => handleDone(todo.id)}>
                    <AiOutlineCheck />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo