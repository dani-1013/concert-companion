import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

function Login() {
  return (
    <section className = "login-section">
      <div className = "login-content">
        
        <h2>Sign in</h2>
        <p>New here? <span className = "login-link">Create an account</span></p>
        
        <form className = "login-box">

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
          <button type = "submit" className = "google-button"><FaGoogle />Continue with Google</button>
          <div className = "back-home">
            <Link to="/"><FaArrowLeftLong /> Back to home</Link>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Login;