import logo from '../../logo.svg';
import './about.css';

function About() {
  return (
    <div className="about">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      </link>
      <div className='box-1'>
          Clause-O-Perfect<br/><br/>
          Easy-Peasy word formation
      </div>
      <div className='box-2'>
          Complete a short quote that has been encrypted by taking each letter in the quote and substituting it with another letter.
          <br/><br/>Your Challenge :  To decrypt it back.
      </div>
    </div>
  );
}

export default About;
