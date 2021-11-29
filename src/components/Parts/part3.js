import React, {useState,} from 'react';
import vec1 from '../images/Vector.png';
import vec2 from '../images/Group (2).png';
import vec5 from '../images/Vector (5).png';
import vec6 from '../images/ion_gift-sharp.png';


function Three(){
    const initialValues = {EMAIL: "", };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    
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
                        <h1 className = 'display-4 fw-bold do-head'> Do I need to join<br/> the wait-list now?</h1>
                        <p className = 'h4 do-text fw-normal py-3 pb-3'>By joining our wait-list today, you will</p>
                    </div>
                    <div className = 'text-white do-head-mob'>
                        <h1 className = 'display-5 fw-bold do-head'> Do I need to join<br/> the wait-list now?</h1>
                        <p className = 'h5 do-text  py-3 pb-3'>By joining our wait-list today, you will</p>
                    </div>
                </div>
                <div className = 'd-flex justify-content-center'>
                    <div className = 'layout'>
                        <div className = 'container'>
                            <div className = 'row'>
                                <div className = 'col-lg-6 col-md-6 col-sm-12 pb-4'>
                                    <div className = 'card shadow '>
                                        <div className = 'card-body cb-vec py-5  rounded-3 text-center'>
                                            <div className = ''>
                                                <img src = {vec1} alt ='vector' className = 'vec-1'></img>
                                            </div>
                                            <p className = 'h5 obtain text-white pt-2'> Obtain <b>Premium features</b> <br/>for free for 2 months</p>
                                        </div>
                                    </div>  
                                </div>
                                <div className = 'col-lg-6 col-md-6 col-sm-12 pt-2'>
                                    <div className = 'card shadow'>
                                        <div className = 'card-body cb-vec py-4  rounded-3 text-center'>
                                                <div className = ''>
                                                    <img src = {vec2} alt ='vector' className = 'vec-1'></img>
                                                </div>
                                                <p className = 'h5 obtain text-white pt-2'>Gain <b>first mover advantage </b> <br/>
                                                by being a founding member of our private community.</p>
                                            </div>
                                        </div>  
                                </div>
                            </div>
                        </div>
                        <div className = 'container py-5'>
                            <div className = 'row'>
                                <div className = 'col-lg-6 col-md-6 col-sm-12  pb-5'>
                                    <div className = 'card shadow'>
                                        <div className = 'card-body cb-vec py-5  rounded-3 text-center'>
                                            <div className = ''>
                                                <img src = {vec5} alt ='vector' className = 'vec-1'></img>
                                            </div>
                                            <p className = 'h5 obtain text-white pt-2'> Receive <b>exclusive </b>product <br/>updates.</p>
                                        </div>
                                    </div>  
                                </div>
                                <div className = 'col-lg-6 col-md-6 col-sm-12'>
                                    <div className = 'card shadow'>
                                        <div className = 'card-body cb-vec py-4  rounded-3 text-center'>
                                                <div className = ''>
                                                    <img src = {vec6} alt ='vector' className = 'vec-1 '></img>
                                                </div>
                                                <p className = 'h5 obtain text-white pt-4'>Refer friends and earn<br/> <b>amazing rewards</b> including<br/> up
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
                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 pb-5">
                        <div class="wrapper-2">
                            <input type="email" value = {formValues.EMAIL} onChange ={handleChange} name="EMAIL" class="form-control email-spac rounded-pill" placeholder= "Your email" id="inputEmail4"/>
                            <button type="submit" value="Subscribe" name="subscribe" class="btn email-bt  rounded-pill " id = 'join'>Sign Me Up Now</button>
                        </div>
                    </form>
                </div>
                <div className = ' we-tab'>
                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 pb-5">
                        <div class="wrapper-2">
                            <input type="email" value = {formValues.EMAIL} onChange ={handleChange} name="EMAIL" class="form-control email-spac rounded-pill" placeholder= "Your email" id="inputEmail4"/>
                            <button type="submit" value="Subscribe" name="subscribe" class="btn email-bt  rounded-pill " id = 'join'>Sign Me Up Now</button>
                        </div>
                    </form>
                </div>
                <div className = ' we-mob'>
                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 pb-5">
                        <div class="wrapper-mob">
                            <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} name="EMAIL" class="form-control email-space-mob rounded-pill" placeholder= "Your email" id="inputEmail4-mob-3"/>
                            <button type="submit" value="Subscribe" name="subscribe" class="btn email-btn-mob  rounded-pill " id = 'join-mob'>Join the Wait-list now!</button>
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
                    <div className = 'too-text'>
                        <p className = 'h5 too-text text-white'>
                        Too many people are struggling with insufficient income and are mostly<br/>
                        focused on earning just enough to survive.<br/><br/>

                        Rift Link is a transparent and secure platform to earn automated income.<br/> 
                        So people can focus on living their best life without worrying about their<br/>finances. 
                        </p>
                        <h2 className = 'h2 fw-bold you-text text-white pt-2 pb-5'>
                            You can be one of them too️!
                        </h2>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-btn-2 pb-0 rounded-pill" id = 'join'>Join the Waitlist now!</button>
                    </div>
                    {/* tablet */}
                    <div className = 'too-text-tab'>
                        <p className = 'h5 too-text-tab text-white'>
                        Too many people are struggling with insufficient income and are mostly<br/>
                        focused on earning just enough to survive.<br/><br/>

                        Rift Link is a transparent and secure platform to earn automated income.<br/> 
                        So people can focus on living their best life without worrying about their<br/>finances. 
                        </p>
                        <h2 className = 'h2 fw-bold you-text text-white pt-2 pb-5'>
                            You can be one of them too️!
                        </h2>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-btn-2 pb-0 rounded-pill" id = 'join'>Join the Waitlist now!</button>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className = 'too-text-mob text-center py-5'>
                <p className = 'h6 fw-bolder too-text-mob '>
                Too many people are struggling with insufficient income and are mostly<br/>
                focused on earning just enough to survive.<br/><br/>

                Rift Link is a transparent and secure platform to earn automated income.<br/> 
                So people can focus on living their best life without worrying about their<br/>finances. 
                </p>
                <h2 className = 'h2 fw-bolder you-text pt-5'>
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