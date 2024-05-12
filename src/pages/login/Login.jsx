import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
    //make a usestate for each input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // make a error state
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    var validate = () => {
        var isValid = true;
        //validating the first name
        if (email.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        }
        if (password.trim() === '') {
            setPasswordError('password is required');
            isValid = false;
        }
        return isValid;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        toast.success('login success')
    }
    return (
        <>
            <div className="container mt-2">
                <h1>Login Page</h1>
                <form className="  w-50">

                    <label className="mt-2">email :{email}</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="enter your email" />
                    {emailError && <p className="text-danger">{emailError}</p>}

                    <label className="mt-2">Password :{password}</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" className="form-control" placeholder="enter your password" />
                    {passwordError && <p className="text-danger">{passwordError}</p>}

                    <button onClick={handleSubmit} className="btn btn-dark mt-3 w-100">Login</button>
                </form>

            </div>

        </>
    )
}

export default Login;