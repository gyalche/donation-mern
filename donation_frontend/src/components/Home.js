import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home=()=>{
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');

    const userLogin=(e)=>{
        e.preventDefault();
        const Logindata={username, password}
        axios.post("http://localhost:90/doner/login", Logindata)
        
        .then((result)=>{
            if(result.data.token){
                const token=result.data.token;
                // result.preventDefault();
                //locally sore
                localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(result.data.donerData));
                window.location.replace('/');
                // alert("sucessfully loged in");
                toast.success("sucessfull", {
                    position: "top-center",                    
                });
   
            }
            else{
                toast.error("invalid login credential");
            }
        }).catch();
    }

    return(
        <>
         {/* <ToastContainer>
         
           </ToastContainer> */}
        <div class="register-photo-doner">
       
    <div class="form-container">
        <div class="image-holder"></div>
        <form method="post">
            <h2 class="text-center"><strong>Login as doner</strong></h2>
            <div class="form-group">
                <input class="form-control" type="Username" name="Username" value={username}
                 onChange={(e)=>setUsername(e.target.value)} placeholder="Username"></input>
                </div>
            <div class="form-group">
                <input class="form-control" type="password" name="password"
                value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></input>
                </div>
            <div class="form-group">
                <div class="d-flex justify-content-between">
                    <div class="form-check"> 
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        </input>
                         <label class="form-check-label" for="flexCheckDefault"> Remember me </label> </div>
                    <div> <Link to="#" class="text-info">Forgot Password</Link> </div>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-success btn-block btn-info" type="submit" onClick={userLogin}>Login</button>
                </div><Link class="already" to="#">Terms of Use and Privacy Policy</Link>
        </form>
    </div>
   
    </div>
    </>
        
    );
}
export default Home;