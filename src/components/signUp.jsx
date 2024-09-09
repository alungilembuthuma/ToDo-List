import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, passWord);

    try {
      const response = await axios.post('/api/signup', { username: userName, password: passWord });
      console.log(response.data);
      // Redirect to login page
      navigate('/login');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className='Login-container' style={{
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
          <div>
            <h1 className='heading' style={{ marginLeft: "40%", marginTop: "15%" }}>Please Register</h1>
            <label style={{ marginLeft: "40%" }}>
              Name:
              <input type='text'
                value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br></br>
            <label style={{ marginLeft: "40%" }}>
              SurName:
              <input type='text'
                value={surName} onChange={(e) => setSurName(e.target.value)} />
            </label>
            <br></br>
            <label style={{ marginLeft: "40%" }}>
              UserName:
              <input type='text'
                value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='wonderbzn@gmail.com' />
            </label>
            <br></br>
            <label style={{ marginLeft: "40%", marginTop: "25%" }}>
              PassWord:
              <input type='password'
                value={passWord} onChange={(e) => setPassWord(e.target.value)} />
            </label>
            <div>
              <br></br>
              <button className='login' type='submit' style={{
                marginLeft: "40%",
                width: "250px",
                height: "50px",
                fontSize: "30px",
                marginTop: "8%"
              }}>Register</button>
            </div>
            <br></br>
            <p style={{ marginLeft: "40%" }}>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </form>
      </div>

    </div>
  );
}
export default SignUp;