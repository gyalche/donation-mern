import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Signup=()=>{
  const[username, setUsername]=useState('');
    const[address, setAddress]=useState('');
    const[email, setEmail]=useState('');
    const[phoneNumber, setPhoneNumber]=useState('');
    const[password, setPassword]=useState('');
    const [profile, setProfile] = useState();
    const[message, setMessage]=useState('');
    const [role, setRole] = useState('doner');

    const {pid} = useParams();
    const updateProfile=(e)=>{

      e.preventDefault();//prevents the page from beign refresh

     const donerData=new FormData();
     donerData.append('username', username)
     donerData.append('address', address)
     donerData.append('email', email)
     donerData.append('phoneNumber', phoneNumber)
     donerData.append('password', password)
     donerData.append('profile', profile)
     donerData.append('role', role)
     
     const config ={
      headers:{
          Authorization: 'Bearer '+localStorage.getItem('token')
          
      }
  }
     axios.put("http://localhost:90/doner/update/", donerData, config)
     .then((result)=>{
         if(result.data.success){
             // setMessage("Doner sucessfylly register")
             alert("sucessfylly updated")
            localStorage.clear()
            //  toast("Sucessfully created")
            //  localStorage.clear();
             window.location.replace('/home')
         }
         else{
             toast("unable to create")
         }
       
     
     }).catch((err)=>{
         alert(err)
     })

   
 }
//  console.log('profile', profile)
 return(
     
    
   <div className="donerBody">
        <ToastContainer>
         
         </ToastContainer>
         <div className="container border  bg-white rounded col-8">
             
             <div className="col-md-6 offset-md-3">
                 <div className="signup-form " id="signup-form">
                     <form className="formSignup mt-5 border p-4 bg-light shadow">
                         <div className="row">
                             <h3 className="dHeader text-center">Update profile</h3>
                             {/* <p>{message}</p> */}
                             <div className="fc mb-3 col-md-12">
                                 <label>Role<span className="text-danger">*</span></label>
                                <select className="form-control" onChange={(e) => setRole(e.target.value)}>
                                    <option value="doner">Doner</option>
                                    <option value="consumer">Consumer</option>
                                </select>
                                 
                             </div>
                             <div className="fc sucess mb-3 col-md-12">
                                 <label>Username<span className="text-danger">*</span></label>
                                 <input type="text" className="form-control" placeholder="username"
                                     value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                                 
                             </div>
                             
                             

                             <div className="fc error mb-3 col-md-12">
                                 <label>Phone Number<span className="text-danger">*</span></label>
                                 <input type="text" className="form-control" placeholder="phoneNumber" 
                                     value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                                 
                             </div>
                             

                             <div className="fc mb-3 col-md-12">
                                 <label>Address<span className="text-danger">*</span></label>
                                 <input type="text" name="address" className="form-control" placeholder="Address" 
                                     value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                                
                             </div>
                             

                             <div className="fc mb-3 col-md-12">
                                 <label>Email<span className="text-danger">*</span></label>
                                 <input type="email" name="email" className="form-control" placeholder="Email" 
                                     value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                                 
                             </div>
                            


                             <div className="fc mb-3 col-md-12">
                                 <label>Password<span className="text-danger">*</span></label>
                                 <input type="password" name="password" className="form-control" placeholder="password" 
                                     value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                                 
                             </div>
                            
                             <div className="fc mb-3 col-md-12">
                                 <label>Profile Image<span className="text-danger">*</span></label>
                                 <input type="file" name="profile" className="form-control"  onChange={(e) => setProfile(e.target.files[0])}/> 
                                    
                                 
                             </div>

                             <div className="col-md-12">
                                 <button className="btn btn-primary float-end" type="submit" onClick={updateProfile}>Update</button>
                             </div>
                         </div>
                     </form>
                     {/* <p className="dButt text-center">If you dont have an Account, Click here <Link to="/Home"><i>Login</i></Link></p> */}
                 </div>
             </div>
         </div>
        
     </div>


 
 
    )
}
export default Signup;