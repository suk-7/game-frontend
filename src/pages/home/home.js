import logo from '../../logo.svg';
import './home.css';

function Home() {
  return (
    <div className="home">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      </link>
      <div className="innerHome">
      <h1><i class='bx bxs-game'></i>Clause-O-Perfect</h1>
      <h3>Test your knowledge!!! By Completing the letter Combination</h3>
      </div>
      <br/>
       <button class ="btn" type="submit">Play</button>
    </div>
  );
}

export default Home;
