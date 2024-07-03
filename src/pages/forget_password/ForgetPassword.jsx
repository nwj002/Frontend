import React, { useState } from "react";
import { toast } from "react-toastify";
import { forgetPasswordApi, verifyOtpApi } from "../../apis/api";

const ForotPassword = () => {
    // make a state
    const [phone, setPhone] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");

    // send otp
    const handleSendOtp = (e) => {
        e.preventDefault();

        // api call
        forgetPasswordApi({ phone })
            .then((res) => {
                if (res.status === 200) {
                    toast.success(res.data.message);
                    setIsSent(true);
                }
            })
            .catch((error) => {
                if (error.response.status === 400 || error.response.status === 500) {
                    toast.error(error.response.data.message);
                }
            });
    };


    // verify otp and set password
    const handleVerifyOtp = (e) => {
        e.preventDefault();


        const data = {
            'phone': phone,
            'otp': otp,
            'newPassword': newPassword
        }

        // api call
        verifyOtpApi(data)
            .then((res) => {
                if (res.status === 200) {
                    toast.success(res.data.message);
                    setIsSent(true);
                }
            })
            .catch((error) => {
                if (error.response.status === 400 || error.response.status === 500) {
                    toast.error(error.response.data.message);
                }
            });
    };
    return (
        <>
            <div className="container mt-3">
                <h3>Forgot Password!</h3>

                <form action="" className="d-flex">
                    <span className="d-flex">
                        <h4> +977</h4>
                        <input
                            disabled={isSent}
                            onChange={(e) => setPhone(e.target.value)}
                            type="number"
                            className="form-control"
                            placeholder="Enter your number pls"
                        />
                    </span>
                </form>
                <button
                    disabled={isSent}
                    onClick={handleSendOtp}
                    className="btn  mt-3 btn-dark"
                >
                    Send OTP
                </button>
                {isSent && (
                    <>
                        <hr />
                        <p>OTP has been sent to {phone} ✅</p>
                        <input
                            onChange={(e) => setOtp(e.target.value)}
                            type="number"
                            className="form-control"
                            placeholder="Enter valid OTP"
                        />
                        <input
                            onChange={(e) => setNewPassword(e.target.value)}
                            type="text"
                            className="form-control mt-2 %"
                            placeholder="Set New Password"
                        />

                        <button onClick={handleVerifyOtp} className="btn btn-primary w-100 mt-2">
                            {" "}
                            Verify OTP & Set Password
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

// Logic for forgot password
// Make a UI
// Make a state
// Send OTP
// if the send otp is success
// Disable the input button
// Show the UI (Otp input, set password input)
// verify opt and set password
// if not verified don't change password

export default ForotPassword;