import React, {useState, useEffect} from 'react';


function Custom (){


    const initialValues = {MERGE0: "", };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

//     const validate = (values) =>{
//         const errors = {};
//         const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//         if (!values.MERGE0){
//             errors.MERGE0 = " Email is required!";
//         } else if(!regex.test(values.MERGE0))
//           errors.MERGE0 = "please, enter a valid email address!";
//         return errors;
//     };

//     const handleChange = (e) =>{
//         // console.log(e.target);
//         const {name, value} = e.target;
//         setFormValues({...formValues,[name]: value});
//         console.log(formValues);
//     };
//     const saveFormData = async () => {
//         const response = await fetch('https://link.us17.list-manage.com/subscribe/post', {
//           method: 'POST',
//           body: JSON.stringify(formValues)
//         });
//         if (response.status !== 200) {
//           throw new Error(`Request failed: ${response.status}`); 
//         };
//       };
// }
//     const handleSubmit = async (e) =>{
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);
//         try{
//             await saveFormData();
//             alert('Your registration was successfully submitted!');
//             setValues({
//                 name: '', color: '', age: '', habits: '' 
//             });
//         }catch (e) {
//             alert(`Registration failed! ${e.message}`);
//         }
//     };

//     useEffect(() =>{
//         console.log(formErrors)
//         if(Object.keys(formErrors).length === 0 && isSubmit){
//             Swal.fire({
//                 title: 'Good Job',
//                 text: 'Email Added Successfully!',
//                 icon: 'success'
//             })
//             // console.log(formValues);
//         }
//     },[formErrors,formValues,isSubmit])








// export default Custom;