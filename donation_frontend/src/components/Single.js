import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Single=()=>{
    const[prodata, setProdata]=useState([])
    const config={
        headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
        }
    }
    const{pid}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:90/product/single/"+pid, config)
        .then((result)=>{
            setProdata(result.data)
        }).catch()
    },[])
    const deleteProduct=(pid)=>{
        
        // console.log(pid)
        axios.delete("http://localhost:90/product/delete/"+pid, config)
        
       .then((result)=>{
           
           if(result.status===200){
               alert("sucessfully deleted")
           }
       }).catch((e)=>{
           alert("unable to delete")
       })
    }
    return(
        <div className="single">
        <div className="container">
            <div className="row">
            <div class="col-md-3 col-3"></div>
            <div class="extra-divbbb col-lg-3 col-md-3 col-3">
            <p><img src={'http://localhost:90/'+prodata[0]?.pimage} className="pro_image_s" alt="donation"></img></p>
                <p className="sName"><b>Description</b>:{prodata[0]?.desc}</p>
                <p><b>ProductName</b>:{prodata[0]?.productName}</p>
                <p><b>donerName</b>:{prodata[0]?.donerName}</p>
                <button className=" hehe btn btn-danger" onClick={()=>{deleteProduct(prodata._id)}}>Delete</button>
            </div>
            <div class="col-md-3 "></div>
            </div>
        </div>
        </div>
    )
}
export default Single;