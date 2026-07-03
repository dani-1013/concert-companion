import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from "../auth/auth";

function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await doCreateUserWithEmailAndPassword(email, password);
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
        
        <h2>Create your account</h2>
        <p>Already have one? <Link to = "/login" className = "login-link">Sign in</Link></p>
        
        <form className = "login-box" onSubmit = {handleRegister}>

          <div className = "input-group">
            <label htmlFor = "displayName">DISPLAY NAME</label>
            <div className = "input-wrapper">
              <span className = "person-icon">
                <IoPersonOutline />
              </span>
              <input 
                id = "displayName"
                type = "displayName" 
                placeholder = "Jane Doe" 
                className = "display-box"
                value = {displayName}
                onChange = {(e) => setDisplayName(e.target.value)}
                required>
              </input>
            </div>
          </div>

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

          <button type = "submit" className = "login-button">Create account <FaArrowRight /></button>
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

export default Register;