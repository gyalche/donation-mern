import { useState } from "react/cjs/react.development"
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Updatep=()=>{
    const [desc, setDesc]=useState('');
    const [productName, setProductName]=useState('');
    const[uimage, setPimage]=useState('');
    const[donerName, setDonerName]=useState('');
    const [prodata, setProdata]=useState('');
    
        const config={
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token')
            }
        }

    const {pid} = useParams();
    // useEffect(()=>{
    // axios.get("http://localhost:90/product/single/"+pid, config)
    // .then(result=>{
    //     console.log(result.data);
    //     setProdata(result.data);
    //     setProductName(result.data.productName);
    //     setDesc(result.data.desc);
    // })
    // .catch()
    // },[])
        
        const productUpdates=(e)=>{
            // console.log(uimage)
            e.preventDefault();
            // const myprodata = {
            //     productName , desc, uimage, donerName
            // }
            const productData=new FormData();
            console.log(uimage)
            productData.append('uimage', uimage)
            productData.append('productName', productName)
            productData.append('desc', desc)
            productData.append('donerName', donerName)
            console.log(productData)
            axios.put("http://localhost:90/product/update/"+pid, productData, config)
            .then(result=>{
                console.log(result.data, 
                    'result')
                if(result.data.success){
                        alert("Updated!! sucessfull");
                        window.location.replace('/Myproduct')
                }
                else{
                    alert("something went wrong")
                }
            })
            .catch(e=>{
                alert('something went wrong')
                alert({msg:e.response})
            })
        
        }

    

    return(
        <div className="addForm">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                      
                       
                </div>

                <div className="col-md-6">
                    <h2 className="ds">Update your donation</h2>
                   
                    <form className="formSignup mt-2 border p-4 bg-light shadow">
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" placeholder="description" value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
                        </div>
                       
                        <div className="form-group">
                            <label>ProductName</label>
                            <input type="text" className="form-control" placeholder="product name" value={productName} onChange={(e)=>setProductName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Doner Name</label>
                            <input type="text" className="form-control" placeholder="Doner name" value={donerName} onChange={(e)=>setDonerName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input className="pii" type="file" placeholder="upload here" onChange={(e)=>setPimage(e.target.files[0])}></input>
                        </div>
                        <div className="adBtn">
                        <div className="form-group">
                            <input type="Submit" className="btn btn-primary" onClick={productUpdates}></input>
                        </div>
                        </div>
                        
                        
                    </form>

    
                </div>

                <div className="col-md-4">
                
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Updatep;