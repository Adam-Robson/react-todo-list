import React, { useState } from 'react';

const Todo = () => {

  const [currentTodoText, setCurrentTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addCurrentToTodoList = () => {
    const newTodoList = [...todoList];
    
    newTodoList.push({ 
      id: todoList.length + 1, 
      text: currentTodoText, 
      complete: false 
    });
    
    setTodoList(newTodoList);
    setCurrentTodoText('');
  }

  const toggleTodoComplete = (id) => {
    const newTodoList = todoList.map(
      (todo) => {
      if (todo.id === id) {
        return { ...todo, 
          complete: !todo.complete 
        }
      } else {
        return { ...todo }
      }
    });

    setTodoList(newTodoList);
  }

  return (
   <div className="main">
     <h1 id="header">Todo List</h1>
     <form onSubmit={
      (e) => { 
      e.preventDefault();
      addCurrentToTodoList();
     } }>
      <input 
        className="todo-input"
        type="text"
        value={ currentTodoText } 
        onChange={
          (e) => {
            setCurrentTodoText(e.target.value) 
        } } />
      <input className="todo-submit" type="submit" />
     </form>

     <h2 className="todos">Todos</h2>
      <ul>
      {
        todoList.map((todo) => {
        if (!todo.complete) {
          return (
            <li key={ todo.id }>
              <input 
              type="checkbox"
              // checked="checked"
              onClick={ () => toggleTodoComplete(todo.id) } 
              />{ todo.text }</li>
          );
        } else {
        return null;
        }
      })}
     </ul>

     <h2 className="completed">Completed Todos</h2>
     <ul>
     {
      todoList.map((todo) => {
        if (todo.complete) {
          return (
            <li key={ todo.id }>
              <input 
              type="checkbox"
              checked="checked"
              onClick={ () => toggleTodoComplete(todo.id) } 
              />{ todo.text }</li>
          );
        } else {
        return null;
        }
      })}
     </ul>
     <button onClick={() => setTodoList([]) }>Clear Todos</button>
    </div>
  );
}

export default Todo;
