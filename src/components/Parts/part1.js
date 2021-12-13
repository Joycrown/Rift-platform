import React, {useState,} from 'react';


function One(){
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
        <section className = 'part-1' id = 'blog'>
            <div className = 'text-center does-nm pt-5'>
                <h1 className = 'does fw-bold pb-5'>Does this sound <br/>like you?</h1>
            </div>
            <div className = 'text-center does-mob'>
                <h1 className = 'does-mobi pb-5'>Does this sound <br/>like you?</h1>
            </div>
            <div className = 'container'>
                <div className = 'layout-1 layout--1-tab'>
                    <div className = 'row'>
                        <div className = ' col-lg-3 col-md-6 col-sm-6 pb-3'>
                            <div className = 'card shadow'>
                                <div className = 'card-body cb rounded-3 text-center'>
                                    <p className = 'card-text card-text-tab card-text-mob'>Are you working class/ student/ entrepreneur looking to 
                                    increase your sources of income?</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-3 col-md-6 col-sm-6 pb-3'>
                            <div className = 'card  shadow'>
                                <div className = 'card-body cb rounded-3 text-center'>
                                    <p className = 'card-text-2 card-text-tab card-text-mob'>Are you interested in earning from the forex market but you do not have the time or 
                                        skills required to be consistently profitable?</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className = 'col-lg-3 col-md-6 col-sm-6 pb-3 '>
                            <div className = 'card shadow'>
                                <div className = 'card-body cb  rounded-3 text-center'>
                                    <p className = 'card-text-3 card-text-tab card-text-mob'>Are you tired of trading personally and
                                        blowing your account over and over?</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-3 col-md-6 col-sm-6 pb-3'>
                            <div className = 'card shadow'>
                                <div className = 'card-body cb  rounded-3 text-center'>
                                    <p className = 'card-text card-text-tab card-text-mob'>Are you scared of giving your capital to investment firms or 
                                        traders out of fear of losing your capital? </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'py-5 if text-center'>
                <p className = 'h5 fw-bold if'>
                If your answer to any of the above is  yes,<br/>
                worry no more, we have built  the one solution to all your problems. 
                </p>
            </div>
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
            {/* tablet */}
            <div className = 'py-5 if-tab text-center'>
                <p className = 'if-text-tab'>
                If your answer to any of the above is  yes,<br/>
                worry no more, we have built  the one solution<br/> to all your problems. 
                </p>
            </div>
            <div className = ' we-tab'>
            <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                    <div id="mc_embed_signup_scroll">
                        <div class="input-group mb-2">
                            <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field rounded-start" name="EMAIL" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4-tab" required/>
                            <button class="btn rounded-end field-btn" type="submit" value="Subscribe" name="subscribe" id="join-tab">Join waitlist now</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* mobile */}
            
            <div className = 'py-5 if-mob text-center'>
                <p className = 'if-text-mob fw-bolder'>
                If your answer to any of the above is  yes,<br/>
                worry no more, we have built  the one <br/>solution to all your problems. 
                </p>
            </div>
            <div className = ' we-mob'>
            <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0">
                <div class="d-grid wrapper-mob-1">
                    <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} className="form-control field-mob rounded-start" name="EMAIL" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" id="inputEmail4-mob" required/>
                    <button class="btn rounded-end field-btn-mob" type="submit" value="Subscribe" name="subscribe" id="join-mob">Join the wait-list now</button>
                </div>
            </form>
            </div>
            {/* <div className = 'we we-tab'>
                <form class="row g-0 pt-4 ">
                    <div class="wrapper-2 wrapper-tab">
                        <input type="email" class="form-control email-spac email-space-tab rounded-pill" placeholder= "Your email" id="inputEmail4 inputEmail4-tab1"/>
                        <button type="submit" class="btn email-bt email-btn-tab rounded-pill " id = 'join join-tab1'>Join waitlist now</button>
                    </div>
                </form>
            </div> */}
            {/* <div className = 'we we-1-md-2'>
                <form class="row g-0 ">
                    <div class="wrapper wrapper-medium-1">
                        <input type="email" class="form-control email-spac email-space-medium-1 rounded-pill text-white" placeholder= "Your email" id="inputEmail4"/>
                        <button type="submit" class="btn email-bt email-btn-medium-2 rounded-pill " id = 'join'>Join waitlist now</button>
                    </div>
                </form>
            </div> */}
        </section>
    );
}



export default One;