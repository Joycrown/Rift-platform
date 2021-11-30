import React, {useState,} from 'react';
import image1 from '../images/Group 26.png';
import image2 from '../images/Group 25.png';
import image3 from '../images/Group (1).png';



function Two(){
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
        <section className = 'section py-5' id='why'>
            <div className = ' text-center'>
                <h1 className = 'why display-4 fw-bold pb-3'>
                        Why Rift Link?
                </h1>
                <p className = 'why-text h5 fw-bold pb-3'>
                We're sure you want to know why Rift Link<br/> is 
                perfect for you, here are a few reasons. 
                </p>
                <p className = 'why-text-mob fw-bolder pb-3'>
                We're sure you want to know why Rift Link is 
                perfect for you<br/>, here are a few reasons. 
                </p>
            </div>
            <div className = 'container py-5'>
                <div className = 'row'>
                    <div className = 'col-sm-12 col-md-4 col-lg-4'>
                        <div className = 'grp-1'>
                            <img src = {image1} alt = '' className = 'image image-tab image-mob' ></img>
                            <div className = 'text-center'>
                                <h4 className = 'display-6-earn earn-tab'>Earn From Anywhere in the World</h4>
                                <p className = ' h6 fw-bold p-text-tab p-text-mob'>With our cloud based, broker agnostic software, 
                                you can connect your Metatrader 4 and 5 accounts regardless of your 
                                broker or location. </p>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-sm-12 col-md-4 col-lg-4'>
                        <div className = 'grp-2'>
                            <img src = {image2} alt = '' className = 'image image-tab image-mob' ></img>
                            <div className = 'text-center pt-3-earn'>
                                <h4 className = 'display-6-earn earn-tab'>Earn on the Go</h4>
                                <p className = 'h6 fw-bold p-text-tab p-text-mob'>With a 24/7 uptime, all you just have to do 
                                is provide your trading account details, then sit back and watch your capital 
                                grow, without any physical activity required of you. Passive income at its finest! </p>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-sm-12 col-md-4 col-lg-4'>
                        <div className = 'grp-3'>
                            <img src = {image3} alt = '' className = 'image image-tab image-mob' ></img>
                            <div className = 'text-center pt-1'>
                                <h4 className = 'display-6-earn earn-tab'>Earn without losing Control</h4>
                                <p className = ' h6 fw-bold p-text-tab p-text-mob'>With Rift Link, you're in full control of your capital,
                                 as we do not have access to your broker account where you make deposits and 
                                 withdrawals. You can disconnect your account any time you wish! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   <div className = 'we'>
                <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 pb-5">
                    <div class="wrapper-2">
                        <input type="email" value = {formValues.EMAIL} onChange ={handleChange} name="EMAIL" class="form-control email-spac rounded-pill" placeholder= "Your email" id="inputEmail4"/>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-bt  rounded-pill " id = 'join'>Notify Me When Ready</button>
                    </div>
                </form>
            </div>
            <div className = ' we-tab'>
                <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 pb-5">
                    <div class="wrapper-2">
                        <input type="email" value = {formValues.EMAIL} onChange ={handleChange} name="EMAIL" class="form-control email-spac rounded-pill" placeholder= "Your email" id="inputEmail4"/>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-bt  rounded-pill " id = 'join'>Notify Me When Ready</button>
                    </div>
                </form>
            </div>
            <div className = ' we-mob'>
                <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 pb-5">
                    <div class="wrapper-mob-2">
                        <input type="email" value = {formValues.EMAIL} onChange ={handleChange} name="EMAIL" class="form-control email-space-mob-2 rounded-pill" placeholder= " Enter your email" id="inputEmail4-mob-2"/>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-btn-mob  rounded-pill " id = 'join-mob'>Join the Wait-list now!</button>
                    </div>
                </form>
            </div>
         
            {/* <div className = 'we we-1-md-11'>
                <form class="row g-0 py-3 pb-5">
                    <div class="wrapper wrapper-medium-1">
                        <input type="email" class="form-control email-space email-space-medium-1 rounded-pill text-white" placeholder= "Your email" id="inputEmail4"/>
                        <button type="submit" class="btn email-btn-1 email-btn-1-medium-1 rounded-pill" id = 'join'>Notify Me When Ready</button>
                    </div>
                </form>
            </div> */}
        </section>


    );
}



export default Two;