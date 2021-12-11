import React, {useState,} from 'react';
import vec1 from '../images/Vector.png';
import vec2 from '../images/Group (2).png';
import vec5 from '../images/Vector (5).png';
import vec6 from '../images/ion_gift-sharp.png';


function Three(){
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
        <section id='about'>
            <div className = 'section-3 py-5 '>
                <div className = ' text-center'>
                    <div className = 'text-white do-head-des'>
                        <h1 className = 'fw-bold do-head do-head-tab'> Do I need to join<br/> the wait-list now?</h1>
                        <p className = 'do-text do-text-tab fw-normal py-3 pb-3'>By joining our wait-list today, you will</p>
                    </div>
                    <div className = 'text-white do-head-mob'>
                        <h1 className = 'fw-bold do-head-mob'> Do I need to join<br/>the wait-list now?</h1>
                        <p className = 'do-text-mob py-3 pb-1'>By joining our wait-list today, you will</p>
                    </div>
                </div>
                <div className = 'd-flex justify-content-center'>
                    <div className = 'layout'>
                        <div className = 'container'>
                            <div className = 'row'>
                                <div className = 'col-lg-6 col-md-6 col-sm-12 pb-4'>
                                    <div className = 'card card-2-tab-1 card-2-mob-1 shadow '>
                                        <div className = 'card-body-1 cb-vec rounded-3 text-center'>
                                            <div className = ''>
                                                <img src = {vec1} alt ='vector' className = 'vec-1-1 vec-1-tab vec-1-mob'></img>
                                            </div>
                                            <p className = 'obtain obtain-tab obtain-mob text-white'> Obtain <b>Premium features</b> <br/>for free for 2 months</p>
                                        </div>
                                    </div>  
                                </div>
                                <div className = 'col-lg-6 col-md-6 col-sm-12'>
                                    <div className = 'card card-2 card-2-tab card-2-mob shadow'>
                                        <div className = 'card-body cb-vec rounded-3 text-center'>
                                                <div className = ''>
                                                    <img src = {vec2} alt ='vector' className = 'vec-1 vec-1-tab vec-1-mob'></img>
                                                </div>
                                                <p className = 'obtain obtain-tab obtain-mob text-white'>Gain <b>first mover advantage </b> <br/>
                                                by being a founding member of our private community.</p>
                                            </div>
                                        </div>  
                                </div>
                            </div>
                        </div>
                        <div className = 'container py-5'>
                            <div className = 'row'>
                                <div className = 'col-lg-6 col-md-6 col-sm-12 pb-2'>
                                    <div className = 'card card-2-3 card-2-tab-3 card-2-mob-3 shadow'>
                                        <div className = 'card-body cb-vec py-4 rounded-3 text-center'>
                                            <div className = ''>
                                                <img src = {vec5} alt ='vector' className = 'vec-1-3 vec-1-tab vec-1-mob pt-3'></img>
                                            </div>
                                            <p className = 'obtain-3 obtain-tab-3 obtain-mob-3 text-white'> Receive <b>exclusive </b>product updates.</p>
                                        </div>
                                    </div>  
                                </div>
                               
                                <div className = 'col-lg-6 col-md-6 col-sm-12'>
                                    <div className = 'card card-2 card-2-tab card-2-mob shadow'>
                                        <div className = 'card-body cb-vec py-4 rounded-3 text-center'>
                                                <div className = ''>
                                                    <img src = {vec6} alt ='vector' className ='vec-1 vec-1-tab vec-1-mob'></img>
                                                </div>
                                                <p className ='obtain obtain-tab-4 obtain-mob-4 text-white'>Refer friends and earn<br/> <b>amazing rewards</b> including<br/> up
                                                to $1000 trading capital</p>
                                            </div>
                                        </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'text-center'>
                <div className = 'we'>
                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                        <div id="mc_embed_signup_scroll">
                            <div class="input-group mb-2">
                                <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field rounded-start" name="EMAIL" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4" required/>
                                <button class="btn rounded-end field-btn" type="submit" value="Subscribe" name="subscribe" id="join">Join waitlist now</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className = ' we-tab'>
                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                        <div id="mc_embed_signup_scroll">
                            <div class="input-group mb-2">
                                <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field rounded-start" name="EMAIL" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4-tab" required/>
                                <button class="btn rounded-end field-btn" type="submit" value="Subscribe" name="subscribe" id="join-tab">Sign Me Up Now</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className = 'we-mob pt-5'>
                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                        <div class="d-grid wrapper-mob-1">
                            <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field-mob rounded-start" name="EMAIL" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4-mob" required/>
                            <button class="btn rounded-end field-btn-mob" type="submit" value="Subscribe" name="subscribe" id="join-mob">Join the wait-list now</button>
                        </div>
                    </form>
                </div>
                    {/* <div className = ' we-1 we-1-md'>
                        <form class="row g-0 py-3 pb-5">
                            <div class="wrapper wrapper-medium ">
                                <input type="email" class="form-control email-space email-space-medium rounded-pill text-white" placeholder= "Your email" id="inputEmail4"/>
                                <button type="submit" class="btn email-btn-1 email-btn-1-medium rounded-pill" id = 'join'>Sign Me Up Now</button>
                            </div>
                        </form>
                    </div> */}
                    <div className = 'too-text pt-5'>
                        <p className = 'too-text text-white'>
                        Too many people are struggling with insufficient income and are mostly<br/>
                        focused on earning just enough to survive.<br/><br/>

                        Rift Link is a transparent and secure platform to earn automated income.<br/> 
                        So people can focus on living their best life without worrying about their<br/>finances. 
                        </p>
                        <h2 className = 'fw-bold you-text text-white pt-2 pb-5'>
                            You can be one of them too️!
                        </h2>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-btn-ft pb-0 rounded-pill" id = 'join'>Join the Waitlist now!</button>
                    </div>
                    {/* tablet */}
                    <div className = 'too-text-tab'>
                        <p className = 'h5 too-text-tab text-white'>
                        Too many people are struggling with insufficient income and are mostly<br/>
                        focused on earning just enough to survive.<br/><br/>

                        Rift Link is a transparent and secure platform to earn automated income.<br/> 
                        So people can focus on living their best life without worrying about their<br/>finances. 
                        </p>
                        <h2 className = 'fw-bold you-text-tab text-white pt-3 pb-5'>
                            You can be one of them too️!
                        </h2>
                        <button class="btn rounded-pill field-btn" type="submit" value="Subscribe" name="subscribe" id="join-tab">Join waitlist now</button>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className = 'too-text-mob text-center py-5'>
                <p className = 'fw-bolder too-text-mob '>
                Too many people are struggling with insufficient income and are mostly<br/>
                focused on earning just enough to survive.<br/><br/>

                Rift Link is a transparent and secure platform to earn automated income.<br/> 
                So people can focus on living their best life without worrying about their<br/>finances. 
                </p>
                <h2 className = 'fw-bolder you-text you-text-mob pt-3'>
                    You can be one of them too️!
                </h2>
                {/* <div className = 'elipse py-5 '>
                   <button type="submit" class="btn email-btn-2 pb-0 rounded-pill" id = 'join'>Join the Waitlist now!</button>
                </div> */}
            </div>
            {/* <div className = 'elipse py-5'>
                   <button type="submit" class="btn email-btn-2 pb-0 rounded-pill" id = 'join'>Join the Waitlist now!</button>
                </div> */}
        </section>
        
    )
}



export default Three;