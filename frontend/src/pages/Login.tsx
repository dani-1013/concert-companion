import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../auth/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await doSignInWithEmailAndPassword(email, password);
      console.log("Logged in!")
      navigate("/diary");
    }
    catch (err) {
      console.error(err);
    }
  };

  return (
    <section className = "login-section">
      <div className = "login-content">
        
        <h2>Sign in</h2>
        <p>New here? <Link to = "/register" className = "login-link">Create an account</Link></p>
        
        <form className = "login-box" onSubmit = {handleLogin}>

          <div className = "input-group">
            <label htmlFor = "email">EMAIL</label>
            <div className = "input-wrapper">
              <span className = "email-icon">
                <CiMail/>
              </span>
              <input 
                id = "email"
                type = "email" 
                placeholder = "you@exmaple.com" 
                className = "email-box"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                required>
              </input>
            </div>
          </div>

          <div className = "input-group">
            <div className = "label-row">
              <label htmlFor = "password">PASSWORD</label>
              <span className = "forgot-password-link">Forgot password?</span>
            </div>

            <div className = "input-wrapper">
              <span className = "password-icon">
                <CiLock />
              </span>
              <input 
              type = "password" 
              placeholder = "******" 
              className = "password-box"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              required>
            </input>
            </div>
          </div>

          <button type = "submit" className = "login-button">Sign In <FaArrowRight /></button>
          <div className = "divider-row">
            <span className = "line"></span>
            <span className = "or-text">OR</span>
            <span className = "line"></span>
          </div>
          <button
            type="button"
            className="google-button"
            onClick={async () => {
              try {
                await doSignInWithGoogle();
                console.log("Google login success");
                navigate("/diary");
              } 
              catch (err) {
                console.error(err);
              }
            }}
          >
            <FaGoogle />
            Continue with Google
          </button>
          <div className = "back-home">
            <Link to="/"><FaArrowLeftLong /> Back to home</Link>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Login;