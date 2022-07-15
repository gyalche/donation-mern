import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyBlog=()=>{
    const [bdata, setBdata] = useState();
    
    const config ={
        headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
            
        }
    }
   
    useEffect(()=>{
    axios.get("http://localhost:90/blog/show", config)
    .then(result=>{
        setBdata(result.data.data)
    }).catch((e)=>{
        console.log(e)
        alert("something went wrong")
    });
    
    },[]);
   
    
    
    //to delete product
    const deleteBlog=(pid)=>{
        
        // console.log(pid)
        axios.delete("http://localhost:90/blog/delete/" +pid, config)
       .then((result)=>{
           if(result.status===200){
            setBdata(bdata.filter(donation=> donation._id!==pid))
               alert("sucessfully deleted")
           }
       }).catch((e)=>{
           alert("unable to delete")
       })
    }
    
    return(
        <div className="MyP">
        <div className="container">
            <div className="row">
            
                {bdata && bdata.map(myblog=>{
                    return(
                        // <div className="col-md-3">
                        // <h3>{myblog.blogger}</h3>
                        // <p><img src={'http://localhost:90/'+myblog.bimage} className="pro_image" alt="donation"></img></p>
                        // <p>Blog title:{myblog.blogtitle} </p>
                        // <p>dlogdescription:{myblog.blogdescription} </p>
                        
                        // <p><button onClick={()=>{deleteProduct(myblog._id)}}>Delete</button>
                        // <p><Link to={"/blog/update/" +myblog._id}>Update</Link></p>
                        // </p>
                        // <p><Link to={"/blog/single/" +myblog._id}>Read More</Link></p>
                        <>
                       <div className="col-md-3"></div>
                        <div class="extra-divb col-lg-6 col-md-6 col-6">
                        <p className="btitle">{myblog.blogtitle} </p>
                        
                        <p className="bname">BloggerName:{myblog.blogger} </p>
                        <p className="bname">Description:{myblog.blogdescription} </p>
                         <p><img src={'http://localhost:90/'+myblog.bimage} className="blog_image" alt="donation"></img></p>
                         {JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).role=='doner' && <p><button className="btn btn-danger" onClick={()=>{deleteBlog(myblog._id)}}>Delete</button></p>}
                        
                        </div>
                        
                        
                     
                </>     
                    
                    )
                     
                },
                
                )}
               
                
            </div>
            
        </div>
        </div>
    )
}
export default  MyBlog