import React from "react";

import "./Login.css";

function Login(){
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
    }
 return (
 <div>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
    <h2>Banking System</h2>
    <div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="index.html">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="bi bi-facebook"></i></a>
				<a href="#" class="social"><i class="bi bi-github"></i></a>
				<a href="#" class="social"><i class="bi bi-google"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" required/>
			<input type="email" placeholder="Email" required/>
			<input type="password" placeholder="Password" required/>
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="index.html" method="post" onsubmit="handlesubmit()">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="bi bi-facebook"></i></a>
				<a href="#" class="social"><i class="bi bi-github"></i></a>
				<a href="#" class="social"><i class="bi bi-google"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" name="email" required/>
			<input type="password" placeholder="Password" name="password" required/>
			<a href="#">Forgot your password?</a>
			<button type="submit" onClick={handleClick}>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
            <div class="overlay-panel overlay-left">
                <img class= "overlay_img" src="images/bg.jpeg" alt="background"></img>
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
            </div>
			<div class="overlay-panel overlay-right">
            <img class= "overlay_img"src="images/bg.jpeg" alt="background"></img>
				<h1>Hello, User!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp" onClick={handleClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
  </div>);
}

export default Login;