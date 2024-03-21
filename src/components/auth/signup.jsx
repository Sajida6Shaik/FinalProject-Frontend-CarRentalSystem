import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
 
import backgroundImage from "../../assets/bg-car.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEye,faEnvelope,faUserTag } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailId,setemailId] = useState('');
    const [role, setRole] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();


    const isSignUpDisabled = !username || !password ||  !emailId || !role ;
    const login=(username,password)=>{
      let obj={}
      obj.username=username
      obj.password=password

     
    axios.post('http://localhost:9192/users/authenticate',obj,{
      
    })
    .then(function(response){
             console.log("Response data of user authenticate",response)
 
      let role = ((response.data || {}).userDto || {}).role || ''
      let userName = ((response.data || {}).userDto || {}).username || ''
      let id=((response.data || {}).userDto || {}).id || '' 
        
      let token = 'Bearer '+response.data.accessToken
       localStorage.setItem("JWT",token)
     localStorage.setItem("username", userName)
     localStorage.setItem("role",role)
     localStorage.setItem("id",id)
     
      switch (role) {
        case 'CUSTOMER':
          navigate('/user/dashboard')
          break;
        case 'HOST':
          navigate('/host/dashboard')
          break;
        case 'ADMIN':
          navigate('/admin/dashboard')
          break;
        default:
          break;

      }
    })
    .catch(function(error){
      //handle error
      setMsg('Invalid Credentials')
    })
     
  }
    const signUp = () => {
        // Basic validations
        if ( !username || !password || !emailId || !role) {
            setMsg("Please fill in all fields");
            return;
        }

        // Email validation using a simple regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailId)) {
            setMsg("Please enter a valid email address");
            return;
        }
         

        // Password validation
        // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setMsg("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character");
            return;
        }

        let obj = {
            
            
                "username": username,
                "password": password,
                "emailId": emailId,
                 "role":role
            
        };

        axios.post('http://localhost:9192/users/new', obj)
            .then(response => {
                login(username,password)
                
                
            })
            .catch(function (error) {
                setMsg("Issue in processing in signup");
            });
    };

    return (
        <div style={{backgroundImage:`url(${backgroundImage})`}} className="h-100 ">
        <div className="container w-50  h-100 d-flex justify-content-center ">
          <div className="w-50">
            <div className="row">
              <div className="col ml-auto mt-5">
                <div className="card">
                  <div className="card-header ">
                    <h3 className="text-center">Sign Up</h3>
                  </div>
                  <div className="card-body ">
                    {msg !== "" ? (
                      <div className="alert alert-danger" role="alert">
                        {msg}
                      </div>
                    ) : null}
                    <form>
                      <div class="mb-3">
                        <label for="username" class="form-label">
                        < FontAwesomeIcon icon={faUser}/>  Enter Username:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Enter Your Username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="password" class="form-label">
                        < FontAwesomeIcon icon={faEye}/>Enter Password:
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Enter Your Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="emailId" class="form-label">
                        < FontAwesomeIcon icon={faEnvelope}/> Enter EmailId:
                        </label>
                        <input
                          type="emailId"
                          class="form-control"
                          id="emailId"
                          placeholder="Enter Your EmailId"
                          onChange={(e) => setemailId(e.target.value)}
                        />
                      </div>
    
                      <div class="mb-3">
                        <label for="role" class="form-label">
                        < FontAwesomeIcon icon={faUserTag}/>Select Role:
                        </label>
                        <select
                          class="form-select"
                          id="role"
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option>Select</option>
                           
                          <option value="CUSTOMER">User</option>
                          <option value="HOST">Host</option>
                          <option value="ADMIN">Admin</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center ">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={signUp}
                      disabled={isSignUpDisabled}
                    >
                      SignUp
                    </button>
                  </div>
                </div>
                <div className="my-2" style={{float:'right'}}>
                  <span className="text-white ">
                    Have an Account? &nbsp;
                    <a
                      class="btn btn-primary"
                      href="#"
                      role="button"
                      onClick={() => navigate("/auth/login")}
                    >
                      Login
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
}

export default SignUp;