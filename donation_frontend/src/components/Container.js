import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Addproduct from './Addproduct';
import Product from './Product';
import Single from './Single';
import Update from './Update';
import PrivateRoute from './ProtectedRoute';
import Aboutus from './AboutUs';
import Signup from './Signup/Signup';
const Container=()=>{
    return(
        <Routes>
            <Route path='/' element={<Aboutus/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Home' element={<Home />} />
            
            
            <Route path='/single/:pid' element={<Single/>} />
            <Route path='/updateproduct/:pid'
            
            element={
                <PrivateRoute>
                    <Update />
                </PrivateRoute>
            } />

            <Route
             path="/Myproduct"
            element={
              <PrivateRoute>
                <Product />
              </PrivateRoute>
            }
          />

          <Route 
          path='/Addproduct'
          element={
              <PrivateRoute>
                  <Addproduct/>
              </PrivateRoute>
          }
          />


        </Routes>


    )
}

export default Container;