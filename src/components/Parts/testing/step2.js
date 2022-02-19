import { useState } from "react";
// import "./styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import arrow from '/Users/Awesomejoy/web/Rift-platform/src/components/images/arrow-down-circle.png'
import Navbar from '../signupPage/navbar'





const stepTwoValidationSchema = Yup.object({
    
    occupation:Yup.string().required("Required"),
    income:Yup.string().required("Required"),
    experience:Yup.string().required("Required"),
    account:Yup.string().required("Required"),
  });
  
  const StepTwo = (props) => {
    const handleSubmit = (values) => {
      props.next(values);
    };
  
    return (
      <section className = ''>
        <Navbar/>
      <div className = 'bg-signin'>
          <div className = 'signin-desktop'>
               <div className = 'd-flex justify-content-around signin-move'>
                   <div className = 'signin-move'>
                       <h2 className = 'su-wel-text text-white'>Create a free <br/>account</h2>
                   </div>
                   {/* tablet */}
                   <div className = 'signin-tab'>
                       <h2 className = 'su-wel-text-tab text-white'>Create a <br/> free account</h2>
                   </div>
                   <div className = 'signup-card su2-signup-card-tab'>
                           <div className= 'card-si'>
                               <div className = 'card-body'>
                                   <div className = 'container'>
                                       <h3 className = 'head-text head-text-tab pt-4'>Sign Up</h3>
                                       <h3 className = 'su-head-text su-head-text-tab pt-4 pb-3'>Step 2 of 2:  Financial  Information</h3>
                                       <Formik
                                          validationSchema={stepTwoValidationSchema}
                                          initialValues={props.data}
                                          onSubmit={handleSubmit}
                                        >
                                          {({ values }) => (
                                            <Form>
                                              <div class="mb-5">
                                              <Field as="select" name="occupation"
                                              id = 'occupation'>
                                              <option value="">Occupation *</option>
                                                <option>Employed</option>
                                                <option>Entrepreneur</option>
                                                <option>Student</option>
                                                <option>unemployed</option>
                                                <option>Retired</option>
                                              </Field>
                                              <ErrorMessage
                                                name="occupation"
                                                component="div"
                                                className="validation"
                                                />
                                              </div>

                                              <div class="mb-5">
                                                <Field as="select" name="income"
                                                id= 'occupation'>
                                                <option value="">Monthly Income *</option>
                                                  <option>Less than $100</option>
                                                  <option>$100 - $1000</option>
                                                  <option>$1,000 - $10,000</option>
                                                  <option>More than $10,000</option>
                                                </Field>
                                                <ErrorMessage name="income"
                                                 component="div"
                                                 className="validation" />
                                              </div>

                                              <div class="mb-5">
                                              <label className = 'form-que form-que-tab' >Do you have any trading experience? </label>
                                                <Field as="select" name="experience"
                                                id= 'occupation'>
                                                <option value="">Experience *</option>
                                                  <option>Yes: Less than 5years</option>
                                                  <option>Yes: More than 5years</option>
                                                  <option>No experience</option>
                                                </Field>
                                                <ErrorMessage name="experience"
                                                component="div"
                                                className="validation"  />
                                              </div>


                                              <div class="mb-5">
                                              <label className = 'form-que form-que-tab' >Do you have a Metatrader account? </label>
                                              <Field as="select" name="account"
                                              id= 'occupation'>
                                              <option value="">Account *</option>
                                                <option>Yes: it is funded</option>
                                                <option>Yes: it is not funded</option>
                                                <option> No i dont</option>
                                              </Field>
                                              <ErrorMessage name="account" 
                                              component="div"
                                              className="validation"/>
                                              </div>
                                              <div class="form-check">
                                                <input class="form-check-input check-box-1" type="checkbox" value="" name="checkbox" id="flexCheckDefault"/>
                                                <label class="form-check-label su2-sub-text su2-sub-text-tab" for="flexCheckDefault">
                                                    I agree to be added to Rift Link's mailing list. 
                                                </label>
                                                <ErrorMessage
                                                name="shipping"
                                                component="div"
                                                className="validation"
                                                />
                                            </div> 
                                                    <div className = 'd-flex justify-content-center '>
                                                        <h5 className = 'su2-sub-text su2-sub-text-tab pt-3'>By  signing up, you agree to our “Terms and Conditions”, 
                                                        and “Privacy policy”.</h5>
                                                    </div>
                                                    <div className = 'text-center pt-3 pb-3'>
                                                        <button type="submit"class="btn sign-btn sign-btn-tab btn-primary">SUBMIT</button>
                                                    </div>
                                                    <div className = 'd-flex justify-content-center pb-5'>
                                                        <img src = {arrow} className = 'text-center' onClick={() => props.prev(values)}></img>
                                                        <h5 className = 'sub-text-1 sub-text-1-tab pt-1 ps-1'> GO BACK</h5>
                                                    </div>

                                              
                                             
                                              <button type="submit">Submit</button>
                                             
                                            </Form>
                                          )}
                                        </Formik>
                                   </div>
                               </div> 
                           </div>
                           <p className = 'pt-4 pb-2 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                   </div>
               </div>
          </div>
          {/* mobile */}
          <div className = 'signin-mobile'>
               <div className = 'container ps-5 pb-3'>
                  <h2 className = 'su-wel-text-mob text-white'>Create a free <br/>account</h2>
               </div>
               <div className = 'd-flex justify-content-center'>
                  <div className = 'signup-card-mob'>
                              <div className= 'card-si'>
                                  <div className = 'card-body'>
                                      <div className = 'container'>
                                          <h3 className = 'su-head-text-mob'>Sign Up</h3>
                                          <h3 className = 'su-head-text1-mob pt-2'>Step 2 of 2:  Financial  Information</h3>
                                          <form>
                                          <div class="mb-4">
                                              <select className="form-select occupation-mob pt-4" id="occupationmob" required>
                                              <option selected disabled value="">Occupation *</option>
                                              <option>Undergraduate</option>
                                              <option>Working Professional</option>
                                              <option>unemployed</option>
                                              </select>
                                           </div>
                                          <div class="mb-4">
                                          <select className="form-select occupation-mob" id="occupationmob" required>
                                              <option selected>Monthly Income *</option>
                                              <option>Undergraduate</option>
                                              <option>Working Professional</option>
                                              <option>unemployed</option>
                                              </select>
                                           </div>
                                           <div class="mb-4">
                                              <label className = 'form-que-mob' >Do you have any trading experience? </label>
                                              <select className="form-select occupation-mob" id="occupationmob" required>
                                                  <option selected>select an option *</option>
                                                  <option>Undergraduate</option>
                                                  <option>Working Professional</option>
                                                  <option>unemployed</option>
                                              </select>
                                           </div>
                                           <div class="mb-4">
                                              <label className = 'form-que-mob' >Do you have a Metatrader account? </label>
                                              <select className="form-select occupation-mob" id="occupationmob" required>
                                                  <option selected>select an option *</option>
                                                  <option>Undergraduate</option>
                                                  <option>Working Professional</option>
                                                  <option>unemployed</option>
                                              </select>
                                           </div>
                                           <div class="form-check">
                                              <input class="form-check-input check-box-1" type="checkbox" value="" id="flexCheckDefault"/>
                                              <label class="form-check-label su2-sub-text-mob" for="flexCheckDefault">
                                                  I agree to be added to Rift Link's mailing list. 
                                              </label>
                                           </div>
                                           <div className = 'd-flex justify-content-center '>
                                              <h5 className = 'su2-sub-text-mob pt-3'>By  signing up, you agree to our <u style={{}}>“Terms and Conditions”,</u> 
                                              and “Privacy policy”.</h5>
                                          </div>
                                           <div className = 'text-center pt-3'>
                                               <button type="submit" class="btn  sign-btn-mob btn-primary">SUBMIT</button>
                                           </div>
                                       </form>
                                          
                                      </div>
                                  </div>   
                                  <div className = 'd-flex justify-content-center pb-5'>
                                      <img src = {arrow} className = 'text-center'></img>
                                      <h5 className = 'sub-text-1-mob pt-1 ps-1'> GO BACK</h5>
                                  </div>
                              </div>
                              <p className = 'pt-4 pb-2 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                      </div>
                  </div>
          </div>
      </div>
  </section>
    );
  };
export default StepTwo ;  
