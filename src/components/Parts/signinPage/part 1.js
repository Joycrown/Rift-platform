import React from 'react';




function First(){
    return(
       <section className = ''>
           <div className = 'bg-signin vh-100'>
               <div className = 'signin-desktop'>
                    <div className = 'd-flex justify-content-around signin-move'>
                        <div className = 'signin-move'>
                            <h2 className = 'wel-text text-white'>Welcome Back</h2>
                        </div>
                        {/* tablet */}
                        <div className = 'signin-tab'>
                            <h2 className = 'wel-text wel-text-tab text-white'>Welcome<br/>Back</h2>
                        </div>
                        <div className = 'signin-card signin-card-tab'>
                                <div className= 'card-si'>
                                    <div className = 'card-body'>
                                        <div className = 'container'>
                                            <h3 className = 'head-text head-text-tab pt-4'>Sign In</h3>
                                            <form>
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label"></label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" 
                                                    placeholder="Your email *" aria-describedby="emailHelp"/>
                                                    <div id="emailHelp" class="form-text"></div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label"></label>
                                                    <input type="password" class="form-control" placeholder="Your Password *" 
                                                    id="exampleInputPassword1"/>
                                                </div>
                                                <div class="mb-3 form-check pe-5 pt-3">
                                                    <input type="checkbox" class="form-check-input check-box-1 check-box-1-tab" id="exampleCheck1"/>
                                                    <label class="form-check-label check-box check-box-tab" for="exampleCheck1">Stay Signed In</label>
                                                </div>
                                                <div className = 'text-center pt-5'>
                                                    <button type="submit" class="btn sign-btn sign-btn-tab btn-primary">SIGN IN</button>
                                                    <h5 className = 'sub-text sub-text-tab pt-3'>Forgot Password?</h5>
                                                </div>
                                                <div className = 'd-flex justify-content-center'>
                                                    <h5 className = 'sub-text sub-text-tab pt-3'>New to Rift Link?</h5>
                                                    <h5 className = 'sub-text-1 sub-text-1-tab pt-3'> SIGN UP</h5>
                                                </div>
                                            </form>
                                        </div>
                                    </div>   
                                </div>
                        </div>
                    </div>
               </div>
               {/* mobile */}
               <div className = 'signin-mobile'>
                    <div className = 'container ps-4 pb-3'>
                         <h2 className = 'wel-text-mob text-white'>Welcome Back</h2>
                    </div>
                    <div className = 'd-flex justify-content-center'>
                        <div className = 'card-mobile'>
                            <div className = 'card-body card-si-mob'>
                                <h2 className = 'head-text-mob'>Sign In</h2>
                            </div>
                            <form>
                                <div class="mb-3 ps-3">
                                    <label for="exampleInputEmail1" class="form-label"></label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" 
                                    placeholder="Your email *" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="mb-3 ps-3">
                                    <label for="exampleInputPassword1" class="form-label"></label>
                                    <input type="password" class="form-control" placeholder="Your Password *" 
                                    id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check ps-5 pt-2">
                                    <input type="checkbox" class="form-check-input check-box-1 check-box-1-tab" id="exampleCheck1"/>
                                    <label class="form-check-label check-box-mob" for="exampleCheck1">Stay Signed In</label>
                                </div>
                                <div className = 'text-center pt-3'>
                                    <button type="submit" class="btn sign-btn-mob btn-primary">SIGN IN</button>
                                    <h5 className = 'sub-text-mob pt-3'>Forgot Password?</h5>
                                </div>
                                <div className = 'd-flex justify-content-center pb-2'>
                                    <h5 className = 'sub-text-mob pt-3'>New to Rift Link?</h5>
                                    <h5 className = 'sub-text-1-mob pt-3 ps-2'>  SIGN UP</h5>
                                </div>
                            </form>
                        </div>
                    </div>
               </div>
           </div>
       </section>
    );
}


export default First;