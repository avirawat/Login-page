export default function validateInfo(values) {
    let errors = {};
     if(!values.username.trim()) {
         errors.username="User Name Required";
     }
     if(!values.email) {
         errors.email="Email Required";
     }
     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email)) {
         errors.email="Email address is invalid";
     }
     if(!values.password1) {
         errors.password1="Password is required";
     }
     else if(values.password1.length<6) {
         errors.password1="Password needs to be 6 charcters or more";
     }
     if(!values.password2) {
         errors.password2="Password is required";
     }
     else if(values.password1!==values.password2) {
         errors.password2="Passwords do not match";
     }

     return errors;
}