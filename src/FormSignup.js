import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create your Account</h1>
                <div className="form-inputs">
                    <label htmlFor='username' className="form-label">Username</label>
                        <input 
                        id="Username" 
                        type="text" 
                        name="username" 
                        className="form-input" 
                        placeholder="Enter your username" 
                        value={values.username}
                        onChange={handleChange}
                        required
                        />                       
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor='email' className="form-label">Email</label>
                        <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="Enter your Email" 
                        value={values.email}
                        onChange={handleChange}
                        required
                        />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor='password1' className="form-label">Password</label>
                        <input 
                        id="password1" 
                        type="password" 
                        name="password1" 
                        className="form-input" 
                        placeholder="Enter your Password" 
                        value={values.password1}
                        onChange={handleChange}
                        required
                        />
                    {errors.password1 && <p>{errors.password1}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor='password2' className="form-label">Confirm Password</label>
                        <input 
                        id="password2" 
                        type="password" 
                        name="password2" 
                        className="form-input" 
                        placeholder="Re-Enter your Password" 
                        value={values.password2}
                        onChange={handleChange}
                        required
                        />
                   {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">Signup</button>
                <span className="form-input-login">Already have an Account? 
                Login<a href="#">Here</a>
                </span>
            </form>
        </div>
    );
}

export default FormSignup
