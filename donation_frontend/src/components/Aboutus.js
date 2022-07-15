import './Css/Navbar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Aboutus=()=>{
    const [isAuth, setAuth] = useState(false)
    let token = localStorage.getItem('token');
    console.log()
    useEffect(() => {
        if(token){
            setAuth(true)
        }
        else{
            setAuth(false)
        }
    }, [token])
    return(
        <div className='ASS'>
        <div className='AboutUs'>
        <section class="header-section">
        <div class="center-div font-weight-bold">
            <h1 class="font-weight-bold">Welcome To The Donation Club </h1>
            <p class="font-weight-bold">We are for each other</p>
            {!isAuth && <div class="header-buttons">
                <Link class="font-weight-bold" to="/Home">Login</Link>
                <Link class="font-weight-bold" to="/Signup">SignUp</Link>
            </div>}
        </div>
    </section>

    <section class="header-extradiv">
    <div class="container">
        <div class="row">
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-desktop" aria-hidden="true"></i></a>
                <h2>Easy to use</h2>
                <p class="font-weight-bold">In publishing and graphic design, Lorem ipsum 
                    is a placeholder text commonly used to demonstrate the visual form of a document
                     or a typeface without relying on
                     meaningful content. Lorem ipsum may 
                     be used as a placeholder before final copy is available</p>
            </div>
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-trophy" aria-hidden="true"></i></a>
                <h2>Awesome design</h2>
                <p class="font-weight-bold">In publishing and graphic design, Lorem ipsum 
                    is a placeholder text commonly used to demonstrate the visual form of a document
                     or a typeface without relying on
                     meaningful content. Lorem ipsum may 
                     be used as a placeholder before final copy is available</p>
            </div>
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-magic" aria-hidden="true"></i></a>
                <h2>Easy to Customize</h2>
                <p class="font-weight-bold">In publishing and graphic design, Lorem ipsum 
                    is a placeholder text commonly used to demonstrate the visual form of a document
                     or a typeface without relying on
                     meaningful content. Lorem ipsum may 
                     be used as a placeholder before final copy is available</p>
            </div>
        </div>
    </div>
    
</section>
</div>
<>
<section class="header-extradiv">
    <div class="container">
        <div class="row">
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-desktop" aria-hidden="true"></i></a>
                <h2>Easy to use</h2>
                <p class="font-weight-bold">In publishing and graphic design, Lorem ipsum 
                    is a placeholder text commonly used to demonstrate the visual form of a document
                     or a typeface without relying on
                     meaningful content. Lorem ipsum may 
                     be used as a placeholder before final copy is available</p>
            </div>
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-trophy" aria-hidden="true"></i></a>
                <h2>Awesome design</h2>
                <p class="font-weight-bold">In publishing and graphic design, Lorem ipsum 
                    is a placeholder text commonly used to demonstrate the visual form of a document
                     or a typeface without relying on
                     meaningful content. Lorem ipsum may 
                     be used as a placeholder before final copy is available</p>
            </div>
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-magic" aria-hidden="true"></i></a>
                <h2>Easy to Customize</h2>
                <p class="font-weight-bold">In publishing and graphic design, Lorem ipsum 
                    is a placeholder text commonly used to demonstrate the visual form of a document
                     or a typeface without relying on
                     meaningful content. Lorem ipsum may 
                     be used as a placeholder before final copy is available</p>
            </div>
        </div>
    </div>
</section>


</>

</div>

    )
}
export default Aboutus;