import { FaArrowRight } from "react-icons/fa6";

function Login() {
  return (
    <section className = "login-section">
      <div className = "login-content">
        
        <h2>Sign in</h2>
        <p>New here? <span className = "login-link">Create an account</span></p>
        
        <form className = "login-box">

          <div className = "input-group">
            <label htmlFor = "email">EMAIL</label>
            <input 
              id = "email"
              type = "email" 
              placeholder = "you@exmaple.com" 
              className = "email-box"
              required>
            </input>
          </div>

          <div className = "input-group">
            <div className = "label-row">
              <label htmlFor = "password">PASSWORD</label>
              <span className = "forgot-password-link">Forgot password?</span>
            </div>
              
            <input 
              type = "password" 
              placeholder = "******" 
              className = "password-box"
              required>
            </input>
            
          </div>

          <button type = "submit" className = "login-button">Sign In <FaArrowRight /></button>
        </form>

      </div>
    </section>
  );
}

export default Login;