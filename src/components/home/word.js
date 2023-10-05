import logo from '../../logo.svg';
import './word.css';


function Word({char}) {
  var str="WHERE";
  let regex = /^[a-zA-Z]+$/;
  return (
    <div className="word">
      {
        char.split('').map((char) => {
          if (regex.test(char)) { return <input maxLength={1} />  } else { return <>{char}</> }
        })
      }
    </div>
  );
}

export default Word;
