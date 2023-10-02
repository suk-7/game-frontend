import logo from '../../logo.svg';
import './login.css';


function Login() {
  return (
    <div className="log">
    <div className="wrapper">
      <head> <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link></head>
      <form action=""></form>
       <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" required/>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required/>
          <i class='bx bxs-lock-alt' ></i>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"/> Remember Me</label>
          <a href='#'> Forgot Password</a>
        </div> 
        <button class ="btn" type="submit">Login</button>
        <p> Don't have an account? <a href='#'> Sign Up</a></p>
      </div>
    </div>
  );
}

export default Login;
