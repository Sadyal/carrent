import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state === "Sign Up") {
      if (!formData.name.trim()) {
        return setError("Full Name is required");
      }
      if (formData.password.length < 6) {
        return setError("Password must be at least 6 characters");
      }
      if (formData.password !== formData.confirmPassword) {
        return setError("Passwords do not match");
      }
    }

    console.log("Form Data:", formData);
    // 👉 API CALL HERE
  };

  const isSignupInvalid =
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword ||
    formData.password !== formData.confirmPassword;

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
        }

        .login-title {
          font-size: 28px;
          font-weight: 600;
          text-align: center;
        }

        .login-subtitle {
          text-align: center;
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 25px;
        }

        .login-input {
          width: 100%;
          padding: 12px;
          margin-bottom: 12px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.4);
          color: #fff;
          outline: none;
        }

        .login-input:focus {
          border-color: rgba(255,255,255,0.2);
        }

        .error-text {
          color: #f87171;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(to right, #2563eb, #1d4ed8);
          color: #fff;
          font-weight: 500;
          cursor: pointer;
        }

        .login-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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

          <form onSubmit={handleSubmit}>
            {state === "Sign Up" && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="login-input"
                value={formData.name}
                onChange={handleChange}
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              value={formData.password}
              onChange={handleChange}
            />

            {state === "Sign Up" && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="login-input"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            )}

            {error && <div className="error-text">{error}</div>}

            <button
              type="submit"
              className="login-btn"
              disabled={state === "Sign Up" && isSignupInvalid}
            >
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