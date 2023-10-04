import './App.css';
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import About from './pages/about/about';

function App() {
  return (
    <div className="App">
      <nav>
          <ul>
            <p><a href="about">About</a></p>
            <p><a href="SignUp">Sign Up</a></p>
            <p><a href="login">Sign In</a></p>
            <p><a href="instructions">How To Play</a></p>
          </ul>
        </nav>
      <Router>
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route exact path ="/login" element={<Login />} />
          <Route exact path ="/signUp" element={<SignUp />}/>
          <Route exact path ="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
