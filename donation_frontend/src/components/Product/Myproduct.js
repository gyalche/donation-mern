import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Myproduct=()=>{
    const [pdata, setPdata] = useState([]);
    
    const config ={
        headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
            
        }
    }
   
    useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem('user')).role)
        if(JSON.parse(localStorage.getItem('user')).role=="doner"){
            axios.get("http://localhost:90/product/myproduct", config)
            .then(result=>{
                setPdata(result.data)
                // console.log(data)
            }).catch((e)=>{
                alert("something went wrong")
            });
        }else{
            axios.get("http://localhost:90/product/allproducts")
            .then(result=>{
                setPdata(result.data)
                // console.log(data)
            }).catch((e)=>{
                alert("something went wrong")
            });
        }

    
    },[]);
   
    
    
    //to delete product
    const deleteProduct=(pid)=>{
        
        // console.log(pid)
        axios.delete("http://localhost:90/product/delete/"+pid, config)
        
       .then((result)=>{
           if(result.status===200){
            toast.success(result.data.msg)
               setPdata(pdata.filter(donation=> donation._id!==pid))
            //    alert("sucessfully deleted")
            // toast.error(result.data.msg)
           }
       }).catch((e)=>{
           alert("unable to delete")
       })
    }
    
    return(
        <div className="MyP">
            <ToastContainer />
        <div className="container">
            <div className="row">
                {pdata.map(mydata=>{
                    return(
                        
                        
                        <div class="extra-divi col-lg-2 col-md-2 col-6">
                        
                        
                        <h3>{mydata.productName}</h3>
                         <p><img src={'http://localhost:90/'+mydata.pimage} className="pro_image" alt="donation"></img></p>
                        <p className="namm"><b className="Damm">Description</b>:{mydata.desc} </p>
                        <p><b>Doner</b>:{mydata.donerName} </p>
                        <p>
                        {JSON.parse(localStorage.getItem('user')).role=='doner' ?
                        <>
                        <button className=" hoho btn btn-danger" onClick={()=>{deleteProduct(mydata._id)}}>Delete</button>
                        <Link to={"/product/update/" +mydata._id}><button className="hoho btn btn-secondary">Update</button></Link></>:
                        <button className=" hoho btn btn-success" onClick={()=>{alert('Request  sent successfully')}}>Request</button>}
                        </p>
                        <p><Link to={"/product/single/" +mydata._id}>Read More</Link></p>
                    </div>
                   
                    )
                })}
               
                
            </div>
        </div>
        </div>
    )
}
export default  Myproduct;