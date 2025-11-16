import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const sendOtp = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otp);
    setIsVerified(false);
  };

  const verifyOtp = () => {
    if (parseInt(enteredOtp) === generatedOtp) {
      setIsVerified(true);
    } else {
      alert("Incorrect OTP");
      setIsVerified(false);
    }
  };

  return (
    <div className="container">
      <h2>OTP Verification</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />

      <button onClick={sendOtp} className="btn send-btn">
        Send OTP
      </button>

      {generatedOtp && (
        <div className="otp-section">
          <p>
            <b>Your OTP:</b> {generatedOtp}
          </p>

          <input
            type="number"
            placeholder="Enter OTP"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
            className="input"
          />

          <button onClick={verifyOtp} className="btn verify-btn">
            Verify
          </button>

          {isVerified && (
            <p className="success-msg">OTP Verified Successfully!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
