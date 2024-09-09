import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div className='landing-page' style={{backgroundImage:"url(https://jooinn.com/images/abstract-blue-background-2.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"100%", width:"100%",height:"100vh", position:"fixed"}}>
        <div className='second' style={{backgroundColor:"#7bd0ec", width:"75%", marginLeft:"11%", marginTop:"10%",height:"70vh"}}>
          <div className='UpperPart' style={{display:"flex"}}>
            <h2 style={{fontSize:"40px", color:"white", marginLeft:"2%"}}>Home</h2>
            <nav style={{display:"flex"}}>
              <button onClick={() => navigate("/login")} style={{width:"150px", height:"30px",marginLeft:"160%",marginTop:'15%', borderColor:"white", color:"navy",backgroundColor:"#3fbdfb"}}>Login</button>
              <br></br>
              <button onClick={() => navigate("/signUp")} style={{width:"100px", height:"30px",marginLeft:"5%",marginTop:"15%",borderColor:"white",color:"navy",backgroundColor:"#3fbdfb" }}>SignUp</button>
              <br></br>
              <button onClick={() => navigate("/todos")} style={{width:"100px", height:"30px",marginLeft:"7%",marginTop:"15%", borderColor:"white",color:"navy",backgroundColor:"#3fbdfb"}}>Todo</button>
            </nav>
          </div>
          <div className='Body'>
            <h1 style={{fontSize:"70px", color:"navy", fontStyle:"normal", marginLeft:"2%"}}>Whats Next??</h1>
            <img src='https://i.pinimg.com/736x/f4/39/af/f439afc5da25253c3e35e532082c69a1.jpg' alt='listImage' style={{width:"200px",height:"30vh", marginLeft:"69%", marginTop:"-10%"}}></img>
            <p style={{ fontSize:"25px", color:"black", fontWeight:"bold",marginLeft:"2%", marginTop:"-10%"}}>This To Do list is there to make your Life easier.</p>
            <p style={{ fontSize:"25px", color:"black", fontWeight:"bold",marginLeft:"2%"}}>Taking it One step At A Time</p>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Landing;