import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
import { useState ,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
 
// const userName=localStorage.getItem("username")
// console.log("userName",userName)
const Header = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState('');

  useEffect(()=>{
    const userName=localStorage.getItem("username")
setUsername(userName)
console.log("userName",username)
  },[])

  const goHome = () => {
    navigate("/");
  };
const logOut=()=>{
  localStorage.removeItem("JWT")
  localStorage.removeItem("username")
  localStorage.removeItem("role")
  navigate("/auth/login");
}
  return (
    <div className="cr-header" >
      <nav class="navbar navbar-expand-lg text-white  bg-dark ">
        <div class="container-fluid text-white " style={{paddingRight: 0}}>
          <div className="row w-100">
            <div className="col-6 d-flex ">
              <img className="pr-2" src={require(`../assets/logo-car.jpg`)} width="50px" height="50px"/>
            <a class="navbar-brand " href="#" style={{color: 'white'}}  onClick={goHome}>
             RoadWheels
          </a>
            </div>
            <div className="col-6 p-0">
            <ul class="navbar-nav ma-auto mb-2 mb-lg-0" style={{'float': 'right'}}>
            <li class="nav-item">
              <button onClick={()=>logOut()} className="btn btn-outline-primary " style={{backgroundColor: 'white', height: '50px', borderRadius: '50px'}}><a class="nav-link active" aria-current="page" href="#" > < FontAwesomeIcon icon={faSignOutAlt}/>  Logout</a></button>
            </li>
            {/* <li class="nav-item mx-3">
              <a  onClick={()=>logOut()} class="nav-link active" aria-current="page" href="#" style={{color: 'white'}}>Logout</a>
            </li> */}
          </ul>
            </div>
          </div>

          
        </div>
      </nav>
    </div>
  );
};

export default Header;
