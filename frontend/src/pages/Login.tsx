function Login() {
  return (
    <section className = "login-section">
      <div className = "login-content">
        
        <h2>Sign in</h2>
        <p>New here?<span style={{ color: '#4ade80' }}> Create an account</span></p>
        
        <input 
        type = "text" 
        placeholder = "Email" 
        className = "email-box">
        </input>

        <input 
        type = "text" 
        placeholder = "Password" 
        className = "password-box">
        </input>

      </div>
    </section>
  );
}

export default Login;