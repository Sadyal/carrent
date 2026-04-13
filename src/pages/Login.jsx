import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");

  return (
    <>
      <style>{`
        .login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;

          background: linear-gradient(
            to top,
            #44444A 0%,
            #3A3A40 15%,
            #2A2A30 30%,
            #1A1A20 55%,
            #0E0E12 100%
          );
        }

        .login-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at bottom center,
            rgba(255,255,255,0.04),
            transparent 60%
          );
          pointer-events: none;
        }

        .login-card {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          color: #fff;
          position: relative;
          z-index: 2;
        }

        .login-title {
          font-size: 28px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 5px;
        }

        .login-subtitle {
          text-align: center;
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 25px;
        }

        .login-input {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.4);
          color: #fff;
          outline: none;
          transition: 0.3s;
        }

        .login-input:focus {
          border-color: rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.6);
        }

        .login-forgot {
          text-align: right;
          font-size: 13px;
          color: #60a5fa;
          cursor: pointer;
          margin-bottom: 15px;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(to right, #2563eb, #1d4ed8);
          color: #fff;
          font-weight: 500;
          transition: 0.3s;
        }

        .login-btn:hover {
          background: linear-gradient(to right, #1d4ed8, #1e40af);
        }

        .login-toggle {
          text-align: center;
          font-size: 13px;
          color: #9ca3af;
          margin-top: 20px;
        }

        .login-toggle span {
          color: #60a5fa;
          cursor: pointer;
          margin-left: 5px;
        }

        .login-toggle span:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-wrapper">
        <div className="login-card">

          <div className="login-title">
            {state === "Sign Up" ? "Create Account" : "Welcome Back"}
          </div>

          <div className="login-subtitle">
            {state === "Sign Up"
              ? "Start your journey with us"
              : "Login to continue"}
          </div>

          <form>
            {state === "Sign Up" && (
              <input
                type="text"
                placeholder="Full Name"
                className="login-input"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="login-input"
              autoComplete="off"
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
              autoComplete="new-password"
            />

            
            {state === "Login" && (
              <div className="login-forgot">
                Forgot password?
              </div>
            )}

            <button className="login-btn">
              {state}
            </button>
          </form>

          <div className="login-toggle">
            {state === "Sign Up" ? (
              <>
                Already have an account?
                <span onClick={() => setState("Login")}>Login</span>
              </>
            ) : (
              <>
                Don’t have an account?
                <span onClick={() => setState("Sign Up")}>Sign Up</span>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;