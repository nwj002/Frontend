import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import { registerUserApi } from '../../apis/api';
import Register from './Register';

//import browser router
// import { BrowserRouter } from 'react-router-dom';

//Mocking the API js (No sending request to real backend)
jest.mock('../../apis/Api');

//Making test case
describe('Login Component Test', () => {
    //Clear all the mock data
    afterEach(() => {
        jest.clearAllMocks();
    });

    //defining test1
    it('should show error message on failed register', async () => {
        //rendering login component
        render(<Register />) //Built Screen

        //render(
        //    <BrowserRouter>
        //        <Login/>
        //    </BrowserRouter>
        //)

        //Mocking register fail response
        const mockResponse = {
            data: {
                success: false,
                message: "Please enter all fields!"
            }
        }

        //Config mock resolved value
        registerUserApi.mockResolvedValue(mockResponse);

        //Config that toast error message as a test function
        toast.error = jest.fn();

        //Testing real UI component
        //1. Finding teh details and button
        const firstName = screen.getByPlaceholderText("enter your first name")
        const lastName = screen.getByPlaceholderText("enter your last name")
        const email = screen.getByPlaceholderText("enter your email")
        const password = screen.getByPlaceholderText("enter your password")
        const confirmPassword = screen.getByPlaceholderText("enter your comfirm password")
        const phone = screen.getByPlaceholderText("enter your phone")
        const registerBtn = screen.getByText("registerBtn")

        //2. Simulating the details
        fireEvent.change(firstName, { target: { value: "test" } })
        fireEvent.change(lastName, { target: { value: "test" } })
        fireEvent.change(email, { target: { value: "test@gmail.com" } })
        fireEvent.change(password, { target: { value: "test123" } })
        fireEvent.change(confirmPassword, { target: { value: "test123" } })
        fireEvent.change(phone, { target: { value: "1234567890" } })
        fireEvent.click(registerBtn)
        //We have done all setup above
        waitFor(
            () => {
                expect(registerUserApi).toHaveBeenCalledWith({
                    firstName: "test",
                    lastName: "test",
                    email: "test@gmail.com",
                    password: "test123",
                    confirmPassword: "test",
                    phone: "1234567890"
                })
                //Toast error
                expect(toast.error).toHaveBeenCalledWith("Please fill up all the given fields!")

            });
    })

});