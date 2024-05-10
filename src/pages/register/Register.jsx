import React, { useState } from "react";

const Register = () => {

    //login section

    //make a usestate for 5 fields
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    //use state for error message
    const [firstNameError, setFirstNameError] = useState('')
    const [lasttNameError, setLasttNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmpasswordError, setConfirmPasswordError] = useState('')


    // make a each function for changing the value
    const handleFirstname = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastname = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleComfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    //validation
    var validate = () => {
        var isValid = true;
        //validating the first name
        if (firstName.trim() === '') {
            setFirstNameError('First Name is required');
            isValid = false;
        }
        if (lastName.trim() === '') {
            setLasttNameError('First Name is required');
            isValid = false;
        }
        if (email.trim() === '') {
            setEmailError('First Name is required');
            isValid = false;
        }
        if (password.trim() === '') {
            setPasswordError('First Name is required');
            isValid = false;
        }
        if (confirmpassword.trim() === '') {
            setConfirmPasswordError('First Name is required');
            isValid = false;
        }
        if (confirmpassword.trim() !== password.trim()) { // if the password and confirm password is not matched
            setConfirmPasswordError('password does not match');
            isValid = false;
        }
        return isValid;

    }
    //submit button function
    const handleSubmit = (e) => {
        e.preventDefault()
        //validate 
        var isValidated = validate();
        if (!isValidated) {
            return
        }
        console.log(firstName, lastName, email, password, confirmpassword)
    }


    return (
        <>
            <div className="container mt-2">
                <h1> create an account</h1>
                <form className="  w-50">
                    <label>FirstName :{firstName}</label>
                    <input onChange={handleFirstname} type="text" className="form-control" placeholder="enter your first name" />
                    {firstNameError && <p className="text-danger">{firstNameError}</p>}

                    <label className="mt-2">Lastname :{lastName} </label>
                    <input onChange={handleLastname} type="text" className="form-control" placeholder="enter your last name" />
                    {lasttNameError && <p className="text-danger">{lasttNameError}</p>}

                    <label className="mt-2">email :{email}</label>
                    <input onChange={handleEmail} type="text" className="form-control" placeholder="enter your email" />
                    {emailError && <p className="text-danger">{emailError}</p>}

                    <label className="mt-2">Password :{password}</label>
                    <input onChange={handlePassword} type="text" className="form-control" placeholder="enter your password" />
                    {passwordError && <p className="text-danger">{passwordError}</p>}

                    <label className="mt-2">Comfirm Password :{confirmpassword}</label>
                    <input onChange={handleComfirmPassword} type="text" className="form-control" placeholder="enter your comfirm password" />
                    {confirmpasswordError && <p className="text-danger">{confirmpasswordError}</p>}

                    <button onClick={handleSubmit} className="btn btn-dark mt-3 w-100">create an account</button>
                </form>

            </div>

        </>
    )
}

export default Register;

//step 1: make a complete ui of regestration page(fields, button, etc)
//step 2: input - make a state
//step 3: on change - set the value to the state