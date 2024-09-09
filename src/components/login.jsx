import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import backgroundImage from '../assets/new.jpg'
import Footer from '../footer';
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/Task-7/src/components/Todo.jsx', { username, password });
      console.log(response.data);
      // Redirect to todo list page
      navigate('/Todo');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="backf" style={{
      backgroundImage: "url(https://jooinn.com/images/abstract-blue-background-2.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: "100%",
      height: "100vh",
      position: "fixed",
      width: "100vw",
      height: "100vh",
      position: "fixed"
    }}>
      <div className='login-container' style={{
        backgroundColor: "#7bd0ec",
        width: "75%",
        marginLeft: "11%",
        marginTop: "10%",
        height: "70vh"
      }}>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1 className='heading' style={{ marginLeft: "40%", marginTop: "15%" }}>Please Login</h1>
          <label style={{ marginLeft: "40%" }}>
            UserName:
            <input type='text'
              value={username} onChange={(e) => setUsername(e.target.value)} placeholder='wonderbzn@gmail.com' />
          </label>
          <br></br>
          <br></br>
          <label style={{ marginLeft: "40%" }}>
            PassWord:
            <input type='password'
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <button
      className='login'
      type='submit'
      onClick={handleSubmit}
  
      style={{
        marginLeft: "40%",
        width: "250px",
        height: "50px",
        fontSize: "30px"
      }}
    >
      Login
    </button>
          <br></br>
          <p style={{ marginLeft: "40%" }}>Don't have an account? <Link to="/signUp">Register here</Link></p>
          <p style={{ color: "#7bd0ec" }}>Already have an account? <Link to="/login" style={{ color: "#7bd0ec" }}>Login here</Link></p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <img src="https://static.vecteezy.com/system/resources/previews/010/063/519/original/todo-list-icon-notepad-with-completed-todo-list-3d-render-png.png" alt="emptyList" style={{ width: "35%", marginLeft: "35%", marginTop: "-4%" }}></img>
      </div>
      <Footer/>
    </div>
  )
}

export default Login;