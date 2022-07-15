import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Blog=()=>{
    const navigate=useNavigate();
    const[blogtitle, setBlogtitle]=useState('');
    const[blogdescription, setBlogDescription]=useState('');
    const[bimage, setBimage]=useState('');
    const[blogger, setBlogger]=useState('');
    const config={
        headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
        }
    }
    const uploadBlog=(e)=>{
        e.preventDefault();
        const blogdData = new FormData();
        blogdData.append('blogtitle', blogtitle)
        blogdData.append('blogdescription', blogdescription)
        blogdData.append('bimage', bimage)
        blogdData.append('blogger', blogger)
        axios.post("http://localhost:90/blog/insert", blogdData, config)
        .then((result)=>{
            // console.log(result.data)
            if(result.data.success){
                alert("blog added sucessfully");
                navigate('/Myblog')
            }
            else{
                alert("something went wrong");
            }

        })
    }
    return(
        <div className="addForm">
        <div className="container">
            <div className="row">
            <div class="col-md-6 offset-md-3 mt-5">
       <a className="bI" target="_blank" href="">
          <img src='https://i.imgur.com/Z2Nyxsm.png'></img>
        </a>
        
        <a target="_blank" href="/Addproduct" class="mt-3 d-flex">Getform.io |  Get your free endpoint now</a>
        <h1>Upload Your Blog to excites people.....</h1>
        
          <div class="form-group">
            <label for="exampleInputName">Blog title</label>
            <input type="text" name="Blog title" value={blogtitle} onChange={(e)=>{setBlogtitle(e.target.value)}} class="form-control" required="required" placeholder="Title">
            </input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required">Blog Type</label>
            <input type="text" class="form-control" value={blogdescription} onChange={(e)=>{setBlogDescription(e.target.value)}}  placeholder="Description">
                </input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required">BloggerName</label>
            <input type="text" class="form-control" value={blogger} onChange={(e)=>{setBlogger(e.target.value)}}  placeholder="BloggerName">
                </input>
          </div>
         

          <div class="form-group mt-3">
            <label class="mr-2">Upload Blog pic</label>
            <input type="file" name="file" onChange={(e)=>{setBimage(e.target.files[0])}}></input>
          </div>
          
          <button type="submit" class="btn btn-primary" onClick={uploadBlog}>Submit</button>
        
      
    </div> 
                {/* <div className="col-md-4">
                      
                       
                </div>

                <div className="col-md-4">
                    <h2 className="ds">Upload your Blog Here</h2>
                   
                    <form className="formSignup mt-2 border p-4 bg-light shadow">
                        <div className="form-group">
                            <label>Blog title</label>
                            <input type="text" className="form-control" value={blogtitle} onChange={(e)=>setBlogtitle(e.target.value)}></input>
                        </div>
                       
                        <div className="form-group">
                            <label>Blog Description</label>
                            <input type="text" className="form-control" value={blogdescription} onChange={(e)=>setBlogDescription(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Blog image</label>
                            <input type="file" onChange={(e)=>setBimage(e.target.files[0])}></input>
                        </div>
                        <div className="adBtn">
                        <div className="form-group">
                            <input type="Submit" className="btn btn-primary" onClick={uploadBlog}></input>
                        </div>
                        </div>
                        
                        
                    </form>

    
                </div>

                <div className="col-md-4">
                
                </div> */}
            
        </div>
        </div>
        </div>
    )
}
export default Blog;