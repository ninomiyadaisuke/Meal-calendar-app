import React, { useState } from 'react'
import { InputTodo } from '../components/Header.jsx/BuyList/InputTodo'
import { ListTodo } from '../components/Header.jsx/BuyList/ListTodo'


const BuyList = () => {
    const [todoText, setTodoText] = useState('');
    const [buyListTodos, setbuyListTodos] = useState([]);

    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...buyListTodos, todoText];
        setbuyListTodos(newTodos);
        setTodoText("");
        // console.log(todoText);
    };

    const onClickDelete = (index) => {
        const newTodos = [...buyListTodos];
        newTodos.splice(index,1)
        setbuyListTodos(newTodos);
        // console.log(index,buyListTodos);
    };

    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
            <ListTodo todos={buyListTodos} onClickDelete={onClickDelete}/>
        </>
    )
}

export default BuyList
