import { useState } from "react/cjs/react.development"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AddProduct=()=>{
    const navigate = useNavigate();
    const [desc, setDesc]=useState('');
    const [productName, setProductName]=useState('');
    const[pimage, setPimage]=useState('');
    const[donerName, setDonerName]=useState('');
    
    const ProductRegister=(e)=>{
        e.preventDefault();
        const config={
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token')
            }
        }
        
        const productData=new FormData();
        productData.append('pimage', pimage)
        productData.append('productName', productName)
        productData.append('desc', desc)
        productData.append('donerName', donerName)

        

        // const productData={desc, productName}
        axios.post("http://localhost:90/product/insert", productData, config)
        .then(result=>{
            if(result.data.success){
                // alert("product added");
                toast.success(result.data.msg,{
                    position:"top-center"
                })
                navigate("/Myproduct");

            }
            else{
                alert("Unable to add, please try again")
            }
        })
        .catch(e=>{
            alert("Something went wrong")
        })

    }

    return(
        <div className="addForm">
            <ToastContainer />

          
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                      
                       
                </div>

                <div className="col-md-6">
                    <h2 className="ds">Donate Here</h2>
                   
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
                            <input type="Submit" className="btn btn-primary" onClick={ProductRegister}></input>
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
export default AddProduct;