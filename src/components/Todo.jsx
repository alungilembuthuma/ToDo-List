import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer';

export default function Todo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editedTodo, setEditedTodo] = useState(null);

  useEffect(() => {
    axios.get('/api/todo')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), name: newTodo }]);
    setNewTodo('');
  };

  const handleEdit = async (id, item) => {
    try {
      const response = await axios.put(`/api/todo/${id}`, { item });
      setTodos(todos.map((todo) => todo.id === id ? response.data : todo));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/todo/${id}`); 
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='login-container' style={{
      backgroundImage: "url(https://jooinn.com/images/abstract-blue-background-2.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: "100%",
      height: "100vh",
      position: "fixed",
    }}>
      <div className='login-container' style={{
        backgroundColor: "#7bd0ec",
        width: "75%",
        marginLeft: "11%",
        marginTop: "10%",
        height: "70vh"
      }}>
        <div className='inputs' >
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            style={{
              width: "35%",
              padding: "10px",
              fontSize: "18px",
              marginLeft: "4%",
              marginTop: "3%"
            }}
          />
          <input
            type="text"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            placeholder="Add new todo item..."
            style={{
              width: "35%",
              padding: "10px",
              fontSize: "18px",
              marginLeft: "4%",
              marginTop: "3%"
            }}
          />
          <button
            onClick={handleAddTodo}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "4%",
              marginTop: "3%"
            }}
          >
            Add Todo Item
          </button>
        </div>

        <div className='inside' style={{
          backgroundImage: "url(https://th.bing.com/th/id/OIP.jJ0SId9XgMqPeXB6uVQaawHaEJ?w=626&h=351&rs=1&pid=ImgDetMain.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          width: "55vw",
          height: "60vh",
          marginLeft: "12%",
          marginTop: "4%"
        }}>
          <ul style={{ fontSize: "35px" }}>
            {filteredTodos.map((todo) => (
              <li key={todo.id}>
                {editedTodo && editedTodo.id === todo.id ? (
                  <input
                    type="text"
                    value={editedTodo.name}
                    onChange={(event) => setEditedTodo({ ...editedTodo, name: event.target.value })}
                    style={{
                      width: "50%",
                      padding: "10px",
                      fontSize: "18px",
                      marginLeft: "10px"
                    }}
                  />
                ) : (
                  <span>{todo.name}</span>
                )}
                <button
                  onClick={() => handleEdit(todo.id, todo.name)}
                  style={{
                    backgroundColor: "#FFC107",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                >
                  Edit
                </button>
                <button
                   onClick={() => handleDelete(todo.id)}
                   style={{
                     backgroundColor: "#FF0000",
                     color: ""}}>
                Delete
                     </button>
                     </li>
            ))}
          </ul>
        </div>
        <Footer/>
      </div>
    </div>
  )}
