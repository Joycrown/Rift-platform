import React, {useState,} from 'react';
import image1 from '../images/Group 26.png';
import image2 from '../images/Group 25.png';
import image3 from '../images/Group (1).png';
import FAQ from './FAQ';



function Two(){
    const initialValues = {EMAIL: "", };
    const [formValues, setFormValues] = useState(initialValues);
    
    const handleChange = (e) =>{
        
        const {name, value} = e.target;
        setFormValues({...formValues,[name]: value});
        console.log(formValues);
    };
    return(
        <section className = 'section py-5' id='why'>
            <div className = ' text-center'>
                <h1 className = 'why why-tab why-mob pb-3'>
                        Why Rift Link?
                </h1>
                <p className = 'why-text why-text-tab pb-3'>
                We're sure you want to know why Rift Link<br/> is 
                perfect for you, here are a few reasons. 
                </p>
                <p className = 'why-text-mob fw-bold pb-3'>
                We're sure you want to know why Rift Link is 
                perfect for you, here are a few reasons. 
                </p>
            </div>
            <div className = 'container py-5'>
                <div className = 'row'>
                    <div className = 'col-sm-12 col-md-4 col-lg-4'>
                        <div className = 'grp-1'>
                            <img src = {image1} alt = '' className = 'image image-tab image-mob' ></img>
                            <div className = 'text-center'>
                                <h4 className = 'display-6-earn earn earn-tab earn-mob'>Earn From Anywhere in the World</h4>
                                <p className = 'p-text p-text-tab p-text-mob'>With our cloud based, broker agnostic software, 
                                you can connect your Metatrader 4 and 5 accounts regardless of your 
                                broker or location. </p>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-sm-12 col-md-4 col-lg-4'>
                        <div className = 'grp-2'>
                            <img src = {image2} alt = '' className = 'image image-tab image-mob' ></img>
                            <div className = 'text-center'>
                                <h4 className = 'display-6-earn earn earn-tab earn-mob'>Earn on the Go</h4>
                                <p className = 'p-text p-text-tab p-text-mob'>With a 24/7 uptime, all you just have to do 
                                is provide your trading account details, then sit back and watch your capital 
                                grow, without any physical activity required of you. Passive income at its finest! </p>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-sm-12 col-md-4 col-lg-4'>
                        <div className = 'grp-3'>
                            <img src = {image3} alt = '' className = 'image image-tab image-mob' ></img>
                            <div className = 'text-center pt-1'>
                                <h4 className = 'display-6-earn earn earn-tab earn-mob'>Earn without losing Control</h4>
                                <p className = 'p-text p-text-tab p-text-mob'>With Rift Link, you're in full control of your capital,
                                 as we do not have access to your broker account where you make deposits and 
                                 withdrawals. You can disconnect your account any time you wish! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            <FAQ/>
            <div className = 'we pt-5'>
                <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                        <div id="mc_embed_signup_scroll">
                            <div class="input-group mb-2">
                                <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field rounded-start" name="EMAIL" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4" required/>
                                <button class="btn rounded-end field-btn" type="submit" value="Subscribe" name="subscribe" id="join">Notify Me When Ready</button>
                            </div>
                        </div>
                </form>
            </div>
            <div className = 'we-tab pt-5'>
                <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                    <div id="mc_embed_signup_scroll">
                        <div class="input-group mb-2">
                            <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field rounded-start" name="EMAIL" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4-tab" required/>
                            <button class="btn rounded-end field-btn" type="submit" value="Subscribe" name="subscribe" id="join-tab">Notify Me When Ready</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className = 'form-center'>
                <div className = 'we-mob pt-5'>
                    <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                        <div class="d-grid wrapper-mob-1">
                            <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field-mob rounded-start" name="EMAIL" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4-mob" required/>
                            <button class="btn rounded-end field-btn-mob" type="submit" value="Subscribe" name="subscribe" id="join-mob">Join the wait-list now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    );
}



export default Two;