import './Css/Navbar.css'
import { Link } from "react-router-dom";


const Header=()=>{

  const logOut=()=>{
    localStorage.clear();
    window.location.replace('/Home');
  }
  var menu;
  if(localStorage.getItem('token')){
    menu=(
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav text-center">
        <li className="nav-item">
          <Link className="nav-link" to="/Myproduct">My Donation</Link>
        </li>
       {JSON.parse(localStorage.getItem('user')).role==='doner' &&  
       <>
       <li className="nav-item">
          <Link className="nav-link" to="/Addproduct">AddDonation</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Blog">UploadBlog</Link>
        </li>

        // </>
      }
        <li className="nav-item">
          <Link className="nav-link" to="/Myblog">MyBlog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Myprofile"> MyProfile</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Payment">Payment</Link>
        </li>
       <div className='log'>
       <li className='nav-item'>
          <button className='logged btn btn-danger' onClick={logOut}>Log Out</button>
        </li>
       </div>
      </ul>
    </div>
    );
  }else{
    menu=(
    
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav text-center">
      <li className="nav-item">
          <Link className="nav-link" to="/Home"> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"> About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Myblog">Blogs</Link>
        </li>

      
      <li className="nav-item">
          <Link className=" log nav-link" to="/Signup"> SignUp</Link>
        </li>
      
        
       

  
        
      </ul>
    </div>
    );
    

  }
    return(

      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="http://www.afrikanheritage.com/wp-content/uploads/2019/02/donation.png " alt="logo" width="150" height="50 "></img>
    <span className="hidden">Donation</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    
      {menu}


  </div>
</nav>
      
      
      
  )
}
export default Header;