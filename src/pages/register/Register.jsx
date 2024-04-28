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
    //submit button function
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, email, password, confirmpassword)
    }

    return (
        <>
            <div className="container mt-2">
                <h1> create an account</h1>
                <form className="  w-50">
                    <label>FirstName :{firstName}</label>
                    <input onChange={handleFirstname} type="text" className="form-control" placeholder="enter your first name" />

                    <label className="mt-2">Lastname :{lastName} </label>
                    <input onChange={handleLastname} type="text" className="form-control" placeholder="enter your last name" />

                    <label className="mt-2">email :{email}</label>
                    <input onChange={handleEmail} type="text" className="form-control" placeholder="enter your email" />

                    <label className="mt-2">Password :{password}</label>
                    <input onChange={handlePassword} type="text" className="form-control" placeholder="enter your password" />

                    <label className="mt-2">Comfirm Password :{confirmpassword}</label>
                    <input onChange={handleComfirmPassword} type="text" className="form-control" placeholder="enter your comfirm password" />

                    <button onClick={handleSubmit} className="btn btn-dark mt-3 w-100">create an account</button>
                </form>

            </div>

        </>
    )
}

export default Register;

//step 1: make a complete ui of regestration page(fields, button, etc)
//step 2: input - make a state
//step 3: on change - set the value to the state.