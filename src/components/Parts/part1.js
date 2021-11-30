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
        <section id = 'blog'>
            <div className = ' text-center'>
                <h1 className = 'does fw-bold display-3 pb-5'>Does this sound <br/>like you?</h1>
            </div>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = ' col-lg-3 col-md-6 col-sm-6 pb-3'>
                        <div className = 'card shadow'>
                            <div className = 'card-body cb py-5 rounded-3 text-center'>
                                <p className = 'card-text card-text-tab card-text-mob fw-bold'>Are you working class/ student/ entrepreneur looking to 
                                increase your sources of income?</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-sm-6 pb-3'>
                        <div className = 'card  shadow'>
                            <div className = 'card-body cb py-4 pt-4 rounded-3 text-center'>
                                <p className = 'card-text card-text-tab card-text-mob fw-bold'>Are you interested in earning from the forex market but you do not have the time or 
                                    skills required to be consistently profitable?</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className = 'col-lg-3 col-md-6 col-sm-6 pb-3 '>
                        <div className = 'card shadow'>
                            <div className = 'card-body cb py-5 rounded-3 text-center'>
                                <p className = 'card-text card-text-tab card-text-mob fw-bold'>Are you tired of trading personally and
                                     blowing your account over and over?</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-sm-6 pb-2'>
                        <div className = 'card shadow'>
                            <div className = 'card-body cb py-5 pt-4  rounded-3 text-center'>
                                <p className = 'card-text card-text-tab  card-text-mob fw-bold'>Are you scared of giving your capital to investment firms or 
                                    traders out of fear of losing your capital? </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'py-5 if text-center'>
                <p className = 'h5 fw-bolder if'>
                If your answer to any of the above is  yes,<br/>
                worry no more, we have built  the one solution to all your problems. 
                </p>
            </div>
            
            <div className = 'we'>
                <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 ">
                    <div class="wrapper-2">
                        <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} class="form-control email-space rounded-pill" placeholder= "Your email" name="EMAIL" id="inputEmail4"/>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-btn  rounded-pill " id = 'join'>Join waitlist now</button>
                    </div>
                </form>
            </div>
            {/* tablet */}
            <div className = 'py-5 if-tab text-center'>
                <p className = 'h4 fw-bold'>
                If your answer to any of the above is  yes,<br/>
                worry no more, we have built  the one solution<br/> to all your problems. 
                </p>
            </div>
            <div className = ' we-tab'>
                <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 ">
                    <div class="wrapper-tab1">
                        <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} name="EMAIL" class="form-control email-space-tab rounded-pill" placeholder= "Your email" id="inputEmail4-tab"/>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-bt  rounded-pill " id = 'join'>Join waitlist now</button>
                    </div>
                </form>
            </div>
            {/* mobile */}
            <div className = 'py-5 if-mob text-center'>
                <p className = 'h5 fw-bolder'>
                If your answer to any of the above is  yes,<br/>
                worry no more, we have built  the one <br/>solution to all your problems. 
                </p>
            </div>
            <div className = ' we-mob'>
                <form action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928" method="post" class="row g-0 pt-4 ">
                <div class="wrapper-mob-2">
                        <input type="email"  value = {formValues.EMAIL} onChange ={handleChange} name="EMAIL"class="form-control email-space-mob-2 rounded-pill" placeholder= " Enter your email" id="inputEmail4-mob-2"/>
                        <button type="submit" value="Subscribe" name="subscribe" class="btn email-btn-mob  rounded-pill " id = 'join-mob'>Join the Wait-list now!</button>
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