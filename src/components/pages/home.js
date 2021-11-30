import React, {useState} from 'react';
import logo from '../images/Rift link logo.png';
import savings from '../images/Savings 1.png';
import savings2 from '../images/Savings 2.png';
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
            <div className = ' nav d-flex justify-content-between'>
                <div className = "logo ps-4">
                    <img src = {logo} alt= 'Logo' className = 'logo-gn logo-mob-1'></img>
                </div>
                <div className = ''>
                    <h3 className = ' blog blog-mob fw-bolder pt-5 fs-6'><Link
                            activeClass = "active"
                            to = "blog"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Blog</Link></h3>
                </div>
            </div>
            <div className = ' header rounded-3 text-white py-5'>
                <div className = ' d-sm-flex d-md-flex d-lg-flex justify-content-sm-between justify-content-md-between justify-content-lg-between w-100'>
                    <div className = ' head-content'>
                    {/* {Object.keys(formErrors).length === 0 && isSubmit ? ({successAlert}): (<pre>{JSON.stringify(undefined,2)}</pre>)} */}
                        <h3 className = 'text-heading text-heading-md display-4 text-white'>Automate. Your. Income.</h3>
                        <p className = 'sub-text text-white fw-normal h6 h6-p-md pt-2'>A platform for anyone looking to earn consistently off the forex<br/>
                            market without losing control of their capital</p>
                            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className = ''>Email Added Successfully!</div>)} */}             
                        <div id="">
                            <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                                <div id="mc_embed_signup_scroll">
                                    <div className="wrapper wrapper-medium-12">
                                        <input type="email" value = {formValues.EMAIL} onChange ={handleChange}className="form-control email-space email-space-medium-1 rounded-pill required email"  name="EMAIL" placeholder= "Your email" id="inputEmail4" required/>
                                        <button   type="submit" value="Subscribe" name="subscribe"  className="btn button email-btn email-btn-1-md rounded-pill clear" id ='join'>Join waitlist now</button>
                                    </div>
                                </div>
                               
                            </form>
                        </div>
                                                            
                                                    
                            
                    </div>
                    {/* Tablet-view */}
                    <div className = ' head-content-tab py-5'>
                        <h4 className = 'text-heading fs-2 display-6 text-white'>Automate. Your. Income.</h4>
                        <p className = 'sub-text text-white h6-tab'>A platform for anyone looking to earn consistently off the forex<br/>
                            market without losing control of their capital</p>
                            <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0  ">
                                <div class=" wrapper-tab">
                                    <input type="email"value = {formValues.EMAIL} onChange ={handleChange} class="form-control  email-space-tab rounded-pill" name="EMAIL" placeholder= "Your email" id="inputEmail4-tab"/>
                                    <button type="submit" value="Subscribe" name="subscribe" class="btn  email-btn-1-tab rounded-pill " id = 'join-tab'>Join waitlist now</button>
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
                <div className = ' d-sm-flex d-md-flex d-lg-flex justify-content-sm-between justify-content-md-between justify-content-lg-between w-100'>
                    <div className = ' head-content-mob'>
                        <h3 className = 'text-heading-mob display-4 fw-bold text-white pt-1'>Automate. Your. Income.</h3>
                        <p className = 'sub-text-mob text-white h6-mob pt-1'>A platform for anyone looking to earn consistently<br/> off the forex
                            market without losing control of their<br/> capital</p>
                            <div className = 'row'>
                                <div className  = 'col-6 pt-5'>
                                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                                        <div class="wrapper-mob ">
                                            <input type="email" value = {formValues.EMAIL} onChange ={handleChange} class="form-control email-space-mob rounded-pill" name="EMAIL" placeholder= "Your email" id="inputEmail4-mob"/>
                                            <button type="submit" value="Subscribe" name="subscribe" class="btn email-btn-mob rounded-pill " id = 'join-mob'>Join waitlist now</button>
                                        </div>
                                    </form>
                                </div>
                                <div className = ' col-6'>
                                    <img src = {savings2} alt = 'savings' className = ' savings-mob'></img>
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