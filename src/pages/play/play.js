import Word from '../../components/home/word';
import logo from '../../logo.svg';
import './play.css';

function Play() {
  var puzzle = 'WHERE THERE IS A WILL THERE IS A WAY';
  return (
    <div className="play">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      </link>
      <div className="difficulty">
        <p>Level:1 <br />
          Difficulty:Easy</p>
      </div>
      <div className='quote'>
        {
          puzzle.split(' ').map((char) => {
           return <div className='quoteInner'><Word char={char}/>&nbsp;</div>
          }) 
        }
      </div>

    </div>
  );
}

export default Play;
