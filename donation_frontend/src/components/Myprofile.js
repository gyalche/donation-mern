import axios from "axios";


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Myprofile=()=>{
    const[userdata, setUserdata]=useState([]);
    const [image, setImage] = useState()
    const config ={
        headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
             
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:90/doner/show", config)
        .then(result=>{
        console.log(result.data)
        setUserdata(result.data)
        result.data.image && setImage(result.data.image)

        }).catch()
    },[])
    const profileHandler = async(image) => {
        const formData = new FormData();
        formData.append('profile', image)
        axios.put("http://localhost:90/doner/profile", formData, config).then((data) => {
            console.log(data.data)
            setImage(data.data.image)
           window.location.replace('/myprofile')

            // alert('Profile updated')
        }).catch(err => {
            console.log(err.response)
        })
    }
   const deleteProfile = () => {
       axios.delete("http://localhost:90/doner/delete", config).then(result => {
           alert('deleted successfully');
           localStorage.clear();
           window.location.replace('/home')
       })
   }
    return(
        <div className="profileC">
            
        <div className="container2">
            {/* <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2 className="ph">Your details</h2>
                    <ul>
                        {/* <li  className="pul">username:{userdata.username}</li>
                        <li><h5>phoneNumber</h5>:{userdata.phoneNumber}</li>
                        <li>email:{userdata.email}</li>
                        <li>address:{userdata.address}</li> */}
                        {/* <label className="hhh"><b>username</b></label><br></br>
                        <label><u>{userdata.username}</u></label>
                        
                    </ul>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div> */} 
        
        <div className="col-md-6">
            <div className="card-md-8">
                <div className="card mb-3">
                    <div className="card-body">
                        <div>
                            {image ? <img src={'http://localhost:90/'+image} style={{width: '100px', height: '100px', borderRadius: '100px'}}/>: <div className="fc mb-3 col-md-12">
                                 <label>Profile Image<span className="text-danger">*</span></label>
                                 <input type="file" name="profile" className="form-control"  onChange={(e) => profileHandler(e.target.files[0])}/> 
                                
                                 
                             </div>}
                        <h4 className="hhh">Welcome {userdata.username}</h4></div>
                        <div className="row">
                        <div class="col-sm-3">
                     <h6 class="mb-0">Username</h6>
                   </div>
                    <div class="col-sm-9 text-secondary">
                      {userdata.username}
                    </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>

                        </div>
                        <div className="col-sm-9 text-secondary">
                            {userdata.email}
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">phoneNumber</h6>

                        </div>
                        <div className="col-sm-9 text-secondary">
                            {userdata.phoneNumber}
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>

                        </div>
                        <div className="col-sm-9 text-secondary">
                            {userdata.address}
                        </div> 
                    </div>
                    <button className="edt btn btn-danger" onClick={deleteProfile}>Delete</button>
                <Link to={`/profile/update/${userdata.id}`}><button className="edt btn btn-success">Update</button></Link>
                
                </div>
                
            </div>
                
            </div>
        </div>
        
       
        </div>



       </div>
    )
}
export default Myprofile;