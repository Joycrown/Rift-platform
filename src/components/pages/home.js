import React, {useState} from 'react';
import logo from '../images/Rift link logo.png';
import savings from '../images/Savings 1.png';
import savings2 from '../images/Savings 2.png';
import logo2 from '../images/Rift link logo1.png';
import {Link} from 'react-scroll';
// import Swal from 'sweetalert2';





function Home(){
    const initialValues = {EMAIL: "", };
    const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) =>{
        // console.log(e.target);
        const {name, value} = e.target;
        setFormValues({...formValues,[name]: value});
        console.log(formValues);
    };
    // const handleSubmit = (e) =>{
    //     setFormErrors(validate(formValues));
    //     setIsSubmit(true);
    // };

   
    
    // const validate = (values) =>{
    //     const errors = {};
    //     const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //     if (!values.EMAIL){
    //         errors.EMAIL = " Email is required!";
    //     } else if(!regex.test(values.EMAIL))
    //       errors.EMAIL = "please, enter a valid email address!";
    //     return errors;
    // };
    return(
        <section className = 'body' id= 'home'>
            <div className = 'na d-flex justify-content-between'>
                <div className = "logo-des-tab">
                        <img src = {logo} alt= 'Logo' className = 'logo-gn logo-1-tab'></img>
                    </div>
                <div className = "logo-mobile">
                    <img src = {logo} alt= 'Logo' className = 'logo-1-mob'></img>
                </div>
                    <div className = ''>
                        <h3 className = 'blog blog-tab blog-mob'><Link
                                activeClass = "active"
                                to = "blog"
                                spy = {true}
                                smooth= {true}
                                offset={0}
                                duration= {500}>Blog</Link></h3>
                    </div>
                </div>
            {/* <div className = 'nav-mob d-flex justify-content-between'>
                <div className = "">
                    <img src = {logo2} alt= 'Logo' className = 'logo-mob-1'></img>
                </div>
                <div className = ''>
                    <h3 className = 'blog-mob'><Link
                            activeClass = "active"
                            to = "blog"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Blog</Link></h3>
                </div>
            </div> */}
            <div className = ' header rounded-3 text-white py-5'>
                <div className = ' d-sm-flex d-md-flex d-lg-flex justify-content-sm-between justify-content-md-between justify-content-lg-between w-100'>
                    <div className = 'head-content'>
                        <h3 className = 'text-heading text-heading-md text-white'>Automate. Your. Income.</h3>
                        <p className = 'sub-text text-white fw-normal h6-p-md pt-1'>A platform for anyone looking to earn consistently off the forex<br/>
                            market without losing control of their capital</p>
                        <div id="">
                            <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                                <div id="mc_embed_signup_scroll">
                                    <div class="input-group mb-2">
                                        <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field rounded-start" name="EMAIL" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4" required/>
                                        <button class="btn rounded-end field-btn" type="submit" value="Subscribe" name="subscribe" id="join">Join waitlist now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                                                            
                                                    
                            
                    </div>
                    {/* Tablet-view */}
                    <div className = ' head-content-tab py-5'>
                        <h4 className = 'text-heading-tab text-white'>Automate. Your. Income.</h4>
                        <p className = 'sub-text-tab text-white'>A platform for anyone looking to earn consistently off the forex<br/>
                            market without losing control of their capital</p>
                            <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                                <div id="mc_embed_signup_scroll">
                                    <div class="input-group mb-2">
                                        <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field rounded-start" name="EMAIL" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4" required/>
                                        <button class="btn rounded-end field-btn" type="submit" value="Subscribe" name="subscribe" id="join">Join waitlist now</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                    <div className = 'pb-3-nm pb-1-tab'>
                        <img src = {savings} alt = 'savings' className = ' savings savings-tab img-fluid'></img>
                    </div>
                </div>
            </div>
            {/* Mobile-view */}
            <div className = ' header-mobile rounded-3 text-white py-4'>
                <div className = 'd-sm-flex d-md-flex d-lg-flex justify-content-sm-between justify-content-md-between justify-content-lg-between w-100'>
                    <div className = ' head-content-mob'>
                        <h3 className = 'text-heading-mob fw-bold text-white pt-2'>Automate. Your. Income.</h3>
                        <p className = 'sub-text-mob text-white'>A platform for anyone looking to earn consistently<br/> off the forex
                            market without losing control of their<br/> capital</p>
                            <div className = 'row'>
                                <div className  = 'col-6'>
                                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                                        <div class="d-grid wrapper-mob">
                                        <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field-mob rounded-start" name="EMAIL" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4-mob-home" required/>
                                        <button class="btn rounded-end field-btn-mob" type="submit" value="Subscribe" name="subscribe" id="join-mob-home">Join the wait-list now</button>
                                        </div>
                                    </form>
                                </div>
                                <div className = ' col-6'>
                                    <img src = {savings2} alt = 'savings' className = 'savings-mob pb-4'></img>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            {/* <div className = ''>
                <img src = {savings2} alt = 'savings' className = ' savings-mob'></img>
            </div> */}
           
        </section>
      
    )
}



export default Home;