import logo from '../../logo.svg';
import './signUp.css';


function SignUp() {
  return (
    <div className="logs">
    <div className="wrappers">
      <head> <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link></head>
      <form action=""></form>
       <h1>Sign Up</h1>
       <div class="input-box">
          <input type="text" placeholder="Email ID" required/>
          <i class='bx bxs-envelope'></i>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Username" required/>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required/>
          <i class='bx bxs-lock-alt' ></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Confirm-Password" required/>
          <i class='bx bxs-lock-alt' ></i>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"/> Remember Me</label>
        </div> 
        <button class ="btn" type="submit">Sign Up</button>
        <p> Already have an account? <a href='login'> Sign In</a></p>
      </div>
    </div>
  );
}

export default SignUp;
