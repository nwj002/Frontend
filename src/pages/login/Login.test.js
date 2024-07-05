// importing
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import { loginUserApi } from '../../apis/api';
import Login from './Login'; //componrnts to be tested

// mock API js(no sending request to real backend)
jest.mock('../../apis/api')

// making test cases
describe('Login Component Test', () => {
    // clear all mocks data
    afterEach(() => {
        jest.clearAllMocks();
    })
    // defining test 1
    it('should show error messege on failed login', async () => {
        // render login component
        render(<Login />);
        // mocking login failure response
        const mockResponse = {
            data: {
                success: false,
                message: 'Password not matched!'
            }
        };
        // config mock resolved value
        loginUserApi.mockResolvedValue(mockResponse);
        // config that toast error messsage as a test finction
        toast.error = jest.fn();
        // testing real ui component 
        // 1. finding email, password and login button
        const email = await screen.getByPlaceholderText('enter your email');
        const password = await screen.getByPlaceholderText('enter your password');
        const loginButton = screen.getByText('Login');

        // 2. simulating the email, password and login button
        fireEvent.change(email, { target: { value: 'test@gmail.com' } });
        fireEvent.change(password, { target: { value: 'test123' } });
        fireEvent.click(loginButton);

        // everyting is async so we need to wait for the response
        waitFor(() => {
            expect(loginUserApi).toHaveBeCalledWith({
                email: 'test@gmail.com',
                password: 'test123'
            });
            //toast error 
            expect(toast.error).toHaveBeCalledWith('Password not matched!');
        });


    })
})