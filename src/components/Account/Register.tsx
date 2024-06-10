import React from "react";
import "../Styles/EntranceStyle.css"
import { Link } from "react-router-dom";

const Register: React.FC = () =>{

    return(
        <div className="auth-container">
        <form className="auth-form">
            <h2>Register</h2>
            <div>
                <label>Username</label>
                <input type="text"/>
            </div>
            <div>
                <label>Email</label>
                <input type="email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password"/>
            </div>
            <button type="submit"><Link style={{color: "black"}} to={"/"}>Register</Link></button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    </div>
    )
}

export default Register;