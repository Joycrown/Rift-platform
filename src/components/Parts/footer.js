import React, {useState,} from 'react';
import logo from '../images/Asset 3@4x 1.png';
// import twitter from '../images/Vector (1).png';
// import facebook from '../images/Vector (2).png';
// import linkedin from '../images/Vector (3).png';
// import instagram from '../images/Vector (4).png';
// import twitter1 from '../images/Vector11.png';
// import facebook1 from '../images/Vector 12.png';
// import linkedin1 from '../images/Vector 13.png';
// import instagram1 from '../images/Vector 14.png';

// import {Link} from 'react-scroll'

function Footer(){
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
                   


                    {/* tablet */}
                    {/* <div className = 'links-tab'>
                        <div className = 'd-flex justify-content-end ft-links'>
                            <div className = 'text-white pt-5 resources'>
                                <h4 className = 'fsize-tab'> RESOURCES </h4>
                                <p className = 'fsize-p-tab '><Link
                            activeClass = "active"
                            to = "blog"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Blog</Link></p>
                            </div>
                            <div className = 'text-white pt-5 company'>
                                <h4 className = ' fsize-tab '>COMPANY</h4>
                                <p className = 'fsize-p-tab '> <Link
                            activeClass = ""
                            to = "about"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>About Us</Link></p>
                                <p className = 'fsize-p-tab '> <Link
                            activeClass = "active"
                            to = "why"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Why rift capital?</Link></p>
                            </div>
                            <div className = 'text-white pt-5 contact'>
                                <h4 className = 'fsize-tab '> CONTACT </h4>
                                <p className = 'fsize-p-tab'> Email</p>
                            </div>
                        </div>
                    </div> */}
                    {/* mobile */}
                    {/* <div className = 'links-mob'>
                        <div className = 'container'>
                            <div className = 'row'>
                                <div className = 'col-4'>
                                    <div className = 'text-white pt-4'>
                                        <h4 className = 'fsize-mob'> RESOURCES </h4>
                                        <p className = 'fsize-p-mob'> <Link
                                    activeClass = "active"
                                    to = "blog"
                                    spy = {true}
                                    smooth= {true}
                                    offset={0}
                                    duration= {500}>Blog</Link></p>
                                    </div>
                                </div>
                                <div className = 'col-4'>
                                    <div className = 'text-white pt-4'>
                                        <h4 className = ' fsize-mob'>COMPANY</h4>
                                        <p className = 'fsize-p-mob'> <Link
                                    activeClass = ""
                                    to = "about"
                                    spy = {true}
                                    smooth= {true}
                                    offset={0}
                                    duration= {500}>About Us</Link></p>
                                        <p className = 'fsize-p-mob'> <Link
                                    activeClass = "active"
                                    to = "why"
                                    spy = {true}
                                    smooth= {true}
                                    offset={0}
                                    duration= {500}>Why rift capital?</Link></p>
                                    </div>
                                </div>
                                <div className = 'col-4'>
                                    <div className = 'text-white pt-4'>
                                        <h4 className = 'fsize-mob'> CONTACT </h4>
                                        <p className = 'fsize-p-mob'> Email</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className = "ps-4-md pt-5">
                        <img src = {logo} alt= 'Logo' className = 'logo-mob'></img>
                    </div> */}
                  
                {/* <div className = 'ending-des'>
                    <div className = 'd-flex justify-content-center pb-3 pt-4  con'>
                        <div className = 'text-center text-white ps-2 ps-2-md pt-1 ending'>
                            <p className = 'ending-p' >Copyright Rift Capital 2021</p>
                        </div>
                        <div className = ' ps-1 ending-1 '>
                            <img src = {twitter} alt = 'icon1' className = 'p-2 bd-highlight '></img>
                            <img src = {facebook} alt = 'icon2' className = 'p-2 bd-highlight ic-social'></img>
                            <img src = {linkedin} alt = 'icon3' className = 'p-2 bd-highlight ic-social'></img>
                            <img src = {instagram} alt = 'icon4' className = 'p-2 bd-highlight ic-social'></img>
                        </div>
                    </div>
                </div> */}
                {/* tablet */}
                {/* <div className = 'ending-tab'>
                    <div className = 'd-flex justify-content-between pb-3 pt-4'>
                        <div className = 'text-center text-white ps-2 pt-1'>
                            <p className = 'ending-p-tab' >Copyright Rift Capital 2021</p>
                        </div>
                        <div className = 'ps-2'>
                            <img src = {twitter} alt = 'icon1' className = 'p-2 bd-highlight '></img>
                            <img src = {facebook} alt = 'icon2' className = 'p-2 bd-highlight ic-social'></img>
                            <img src = {linkedin} alt = 'icon3' className = 'p-2 bd-highlight ic-social'></img>
                            <img src = {instagram} alt = 'icon4' className = 'p-2 bd-highlight ic-social'></img>
                        </div>
                    </div>
                </div> */}
                {/* mobile */}
                {/* <div className = 'ending-mob'>
                    <div className = 'container'>
                        <div className = 'row pt-5'>
                            <div className = 'col-4'>
                                <div className = "">
                                    <img src = {logo} alt= 'Logo' className = 'logo-ending-mob'></img>
                                </div>
                            </div>
                            <div className = 'col-4'>
                                <div className = 'text-center text-white pt-5'>
                                    <p className = 'ending-p-mob text-decoration-underline' >Copyright Rift Capital 2021</p>
                                </div>
                            </div>
                            <div className = 'col-4'>
                                <div className = ' ps-1 '>
                                    <img src = {twitter1} alt = 'icon1' className = 'p-1 bd-highlight'></img>
                                    <img src = {facebook1} alt = 'icon2' className = 'p-1 bd-highlight ic-social'></img>
                                    <img src = {linkedin1} alt = 'icon3' className = 'p-1 bd-highlight ic-social'></img>
                                    <img src = {instagram1} alt = 'icon4' className = 'p-1 bd-highlight ic-social'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </section>
    );
}






export default Footer;

