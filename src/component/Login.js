import React from "react";

import "./Login.css";

function Login(props){
    function handleClick()
    {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
   
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });

		const signIn__first = document.getElementById("signIn__first");
		signIn__first.addEventListener('click', () => {
			props.set(false);
		})
		
    }
 return (
 <div className="body">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
    <h2 className="login__h2__Title">Banking System</h2>
    <div className="container" id="container">
	<div className="form-container sign-up-container">
		<form className="login__form">
			<h1 className="login__h1">Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="bi bi-facebook"></i></a>
				<a href="#" className="social"><i className="bi bi-github"></i></a>
				<a href="#" className="social"><i className="bi bi-google"></i></a>
			</div>
			<span className=".login__span">or use your email for registration</span>
			<input className="login__input" type="text" placeholder="Name" required/>
			<input className="login__input" type="email" placeholder="Email" required/>
			<input className="login__input" type="password" placeholder="Password" required/>
			<button className=".login__button">Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className="login__form" onsubmit="handlesubmit()">
			<h1 className="login__h1">Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="bi bi-facebook"></i></a>
				<a href="#" className="social"><i className="bi bi-github"></i></a>
				<a href="#" className="social"><i className="bi bi-google"></i></a>
			</div>
			<span className=".login__span">or use your account</span>
			<input className="login__input" type="email" placeholder="Email" name="email" required/>
			<input className="login__input" type="password" placeholder="Password" name="password" required/>
			<a href="#">Forgot your password?</a>
			<button className=".login__button" id="signIn__first" type="submit" onClick={handleClick}>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
            <div className="overlay-panel overlay-left">
                <img className= "overlay_img" src="images/bg.jpeg" alt="background"></img>
				<h1 className="login__h1">Welcome Back!</h1>
				<p className="login__p">To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
            </div>
			<div className="overlay-panel overlay-right">
            <img className= "overlay_img"src="images/bg.jpeg" alt="background"></img>
				<h1 className="login__h1">Hello, User!</h1>
				<p className="login__p">Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={handleClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
  </div>);
}

export default Login;