import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"
import '../signupPage/signup.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DateTimePicker from '../signupPage/dateandtime'
import Navbar from '../signupPage/navbar'



const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/


const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required().label("First name"),
  last_name: Yup.string().required().label("Last name"),
  email:Yup.string().email('Email is invalid').required('Email is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('Region is required'),
  city: Yup.string().required('City is required'),
  dateOfBirth:Yup.date().required('Date of birth is required'),
  mobileNo:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  password: Yup.string().required('password is required') .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  confirmPassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  })
});

const StepOne = (props) => {
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
                         <h2 className = 'su-wel-text-tab text-white'>Create a free <br/>account</h2>
                     </div>
                     <div className = 'signup-card signup-card-tab'>
                             <div className= 'card-si'>
                                 <div className = 'card-body'>
                                     <div className = 'container'>
                                         <h3 className = 'head-text head-text-tab pt-4'>Sign Up</h3>
                                         <h3 className = 'su-sub-text su-sub-text-tab pt-2'>Register and enjoy our service <b>free<br/> of charge</b>  on your 
                                         linked account for <br/> the first 14 days. </h3>
                                         <h3 className = 'su-head-text su-head-text-tab pt-4'>Step 1 of 2:  Basic Information</h3>
                                         <Formik
                                          validationSchema={stepOneValidationSchema}
                                          initialValues={props.data}
                                          onSubmit={handleSubmit}
                                        >
                                          {({values, handleChange, handleBlur}) => (
                                            <Form>
                                            <div className="pb-4">
                                            <label for ='floatingInput'>First Name</label>
                                            <Field name="first_name" id="firstName"/>
                                            <ErrorMessage 
                                            name="first_name" 
                                            class="validation"
                                            component="div" />
                                            </div>

                                            <div className="pb-4">
                                            <label for ='floatingInput'>Last Name</label>
                                            <Field name="last_name" id="lastName"/>
                                            <ErrorMessage name="last_name" 
                                             name="last_name" 
                                             class="validation"
                                             component="div"/>
                                            </div>

                                            <label for ='floatingInput'>Email</label>
                                            <div className="pb-4">
                                            <Field name="email"id="lastName"  />
                                            <ErrorMessage name="email"
                                             name="email" 
                                             class="validation"
                                             component="div" />
                                            </div>

                                            <div className="pb-4">
                                            <label for ='floatingInput'>Phone No</label>
                                            <Field name="mobileNo" id='mobileNo' />
                                            <ErrorMessage name="mobileNo"
                                            name="mobileNo" 
                                            class="validation"
                                            component="div" />
                                            </div>

                                            <div className="pb-5">
                                              <DateTimePicker
                                                  name='dateOfBirth'
                                                  id = 'dateOfBirth'
                                                  label = 'Date of birth'
                                              required/>
                                              <ErrorMessage name="dateOfBirth"
                                              name="dateOfBirth" 
                                              class="validation"
                                              component="div" />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'>Country</label>
                                             <CountryDropdown
                                              name="country"
                                              // className = "country"
                                              value={values.country}
                                              onChange={(_,e) =>handleChange(e)}
                                              onBlur= {handleBlur}
                                              label = "country"
                                              id = 'country'
                                              ></CountryDropdown>
                                              <ErrorMessage name="country"
                                               name="country" 
                                               class="validation"
                                               component="div"
                                               />
                                              </div>


                                              <label for ='floatingInput'>state</label>
                                              <div className="pb-5">
                                              <RegionDropdown
                                              name="state"
                                              country={values.country}
                                              value={values.state}
                                              onChange={(_,e) =>handleChange(e)}
                                              onBlur= {handleBlur}
                                              label = "State"
                                              id="country"
                                              ></RegionDropdown>
                                              <ErrorMessage name="region" 
                                               name="region" 
                                               class="validation"
                                               component="div"
                                              />
                                              </div>

                                            <label for ='floatingInput'>City</label>
                                            <div className="pb-5">
                                            <Field name="city" id='cityInput'/>
                                            <ErrorMessage name="city" 
                                             name="city" 
                                             class="validation"
                                             component="div"/>
                                            </div>


                                            <div className="pb-5">
                                            <label for ='floatingInput'>Password</label>
                                            <Field name="password" id="passwordInput" />
                                            <ErrorMessage name="password"
                                            name="password" 
                                            class="validation"
                                            component="div" 
                                            />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'>Confirm Password</label>
                                            <Field name="confirmPassword"  id="passwordInput" />
                                            <ErrorMessage name="confirmPassword"
                                            name="confirmPassword" 
                                            class="validation"
                                            component="div" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                            <button type="submit"class="btn sign-btn sign-btn-tab btn-primary">PROCEED</button>
                                            </div>
                                          </Form>
                                          )}
                                        </Formik>
                                     </div>
                                 </div>   
                                 <div className = 'd-flex justify-content-center pb-2'>
                                    <h5 className = 'sub-text sub-text-tab pt-3'>New to Rift Link?</h5>
                                    <h5 className = 'sub-text-1 sub-text-1-tab pt-3'> SIGN UP</h5>
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
                                            <h3 className = 'su-sub-text-mob pt-2'>Register and enjoy our service <b>free of charge</b>  on your 
                                            linked account for the first 14 days. </h3>
                                            <h3 className = 'su-head-text1-mob pt-2'>Step 1 of 2:  Basic Information</h3>
                                            {/* <form>
                                                <div class="mb-4">
                                                    <input type="text" class="form-control pt-4" id="firstNamemob" 
                                                    placeholder="First Name *" />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="text" class="form-control" id="lastNamemob" 
                                                    placeholder="Last Name *"  />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="email" class="form-control" id="emailInputmob" 
                                                    placeholder="Your email *" />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="text" class="form-control" id="mobileNomob" 
                                                    placeholder="Mobile No *"  />
                                                </div>
                                                <div class="form-floating mb-4">
                                                    <input type="date" class="form-control" label= 'Date of birth' id="dateOfBirthmob" 
                                                    placeholder="Date of birth *"showDefaultOption={false} />
                                                    <label for="floatingInputValue">Date of birth</label>
                                                    
                                                </div>
                                                <div className = "form-desktop">
                                                    <CountryDropdown class="country mb-5 pt-3"
                                                        defaultOptionLabel="Select a Country *"
                                                        value={this.state.country} id="mobileNomob"
                                                        onChange={(val) => this.selectCountry(val)} required/>
                                                        <RegionDropdown class="mb-4"
                                                        blankOptionLabel="No country selected."
                                                        defaultOptionLabel="State/province"
                                                        country={this.state.country}
                                                        value={this.state.region} id="mobileNomob"
                                                        onChange={(val) => this.selectRegion(val)} required/>
                                                    </div>
                                                    <div className = "form-tab">
                                                        <CountryDropdown class="country-mob mb-5 pt-3"
                                                            defaultOptionLabel="Select a Country *"
                                                            value={this.state.country} id="mobileNo-tab"
                                                            onChange={(val) => this.selectCountry(val)} required/>
                                                            <RegionDropdown class="mb-4"
                                                            blankOptionLabel="No country selected."
                                                            defaultOptionLabel="State/province"
                                                            country={this.state.country}
                                                            value={this.state.region} id="mobileNo-tab"
                                                            onChange={(val) => this.selectRegion(val)} required/>
                                                    </div>
                                                    <div class="mb-4">
                                                        <input type="text" class="form-control" id="cityInputmob" 
                                                        placeholder="City *" />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="password" class="form-control" id="passwordInputmob"
                                                    placeholder="Your Password *" 
                                                    />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="password" class="form-control"  id="passwordInputmob"
                                                    placeholder="Confirm Password *" 
                                                    />
                                                </div>
                                                <div className = 'text-center pt-3'>
                                                    <button type="submit" class="btn su-sign-btn-mob btn-primary">PROCEED</button>
                                                </div>
                                            </form> */}
                                        </div>
                                    </div>   
                                    <div className = 'd-flex justify-content-center'>
                                        <h5 className = 'sub-text sub-text-mob pt-3'>New to Rift Link?</h5>
                                        <h5 className = 'sub-text-1 sub-text-1-mob ps-2 pt-3'> SIGN UP</h5>
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

export default StepOne;

