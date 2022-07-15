import{Route, Routes} from 'react-router-dom'
import Signup from './Signup/Signup';
// import Doner from './Registration/Doner';
import Home from './Home';
import Aboutus from './Aboutus';
import Blog from './Blog/Blog';
// import DonerLogin from './Login/Doner';
import AddProduct from './Product/Addproduct';
import Myproduct from './Product/Myproduct';
import Myprofile from './Myprofile';
import MyBlog from './Blog/Myblog';
import Single from './Single';
import Updatep from './Update/Productupdate';
import Updateprofile from './Update/Profileupdate';
import StripContainer from './Payment/StripContainer';

const Body=()=>{
    return(
   
        <Routes>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/Payment' element={<StripContainer/>}></Route>
            
            <Route path='/Signup' element={<Signup/>}></Route>
            {/* <Route path='/Doner' element={<Doner/>}></Route> */}
            <Route path='/Addproduct' element={<AddProduct/>}></Route>
            <Route path='/' element={<Aboutus/>}></Route>
            <Route path='/Blog' element={<Blog/>}></Route>
            <Route path='/Myproduct' element={<Myproduct/>}></Route>
            <Route path='/Myprofile' element={<Myprofile/>}></Route>
            <Route path='/Myblog' element={<MyBlog/>}></Route>
            <Route path='/product/single/:pid' element={<Single/>}></Route>
            <Route path='/profile/update/:pid' element={<Updateprofile/>}></Route>
            <Route path='/product/update/:pid' element={<Updatep/>}></Route>
            

        </Routes>



        
    );
    
}
export default Body;