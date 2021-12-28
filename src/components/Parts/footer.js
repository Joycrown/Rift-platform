import React, {useState,} from 'react';
import logo from '../images/Asset 3@4x 1.png';


function Footer(){
    const initialValues = {EMAIL: "", };
    const [formValues, setFormValues] = useState(initialValues);
    

    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues,[name]: value});
        console.log(formValues);
    };
    return(
        <section className = ''>
            <div className = "elipse py-4">
                <div className = 'text-center submit-mob'>
                <div className = 'we-mob pt-5'>
                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                        <div class="d-grid wrapper-mob-1">
                            <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field-mob rounded-start" name="EMAIL" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4-mob" required/>
                            <button class="btn rounded-end field-btn-mob" type="submit" value="Subscribe" name="subscribe" id="join-mob">Join the wait-list now</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div className = 'footer'>
                <div className = 'py-5'>
                    <div className = ''>
                        <div className = "d-flex justify-content-around">
                            <img src = {logo} alt= 'Logo' className = 'logo-ft logo-tab logo-mob' ></img>
                            <div className = ''>
                                <h3 className='text-white find-us-1 find-us-1-tab find-us-1-mob'>Find Us Online</h3>
                                <div class="">
                                    <div className = 'text-white find-us-btn find-us-btn-tab find-us-btn-mob'>
                                        <a href = 'https://linkedin.com/company/rift-capital-ltd'>Linkedin</a>
                                    </div>
                                    <div className = 'text-white find-us-btn find-us-btn-tab find-us-btn-mob'>
                                       
                                        <a href = 'https://instagram.com/rift.link'>Instagram</a>
                                    </div>
                                    <div className = 'text-white find-us-btn find-us-btn-tab find-us-btn-mob'>
                                        <a href = 'https://facebook.com/riftlink.ng'>Facebook</a>
                                    </div>
                                </div>
                            </div>
                            <div className = ''>
                             <h3 className='text-white find-us-1 find-us-1-tab find-us-1-mob'>Contact Us</h3>  
                                    <div className = 'links find-us-btn find-us-btn-tab find-us-btn-mob-1'>
                                        <a href = 'https://us17.list-manage.com/contact-form?u=3d0c961e139280b56dff09d86&form_id=67f0907612afc8ebd6741485c017a852'>Send Us A Message</a>
                                    </div>
                            </div>
                        </div>            
                    </div>
                    </div>
                    <div className = 'ending-des'>
                        <div className = 'd-flex justify-content-center pb-3 pt-4 con'>
                            <div className = 'text-center text-white ps-2-md pt-1'>
                                <p className = 'ending-p ending-p-tab ending-p-mob' >Copyright Rift Capital 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}






export default Footer;

