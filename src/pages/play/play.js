import { useEffect, useState } from 'react';
import Word from '../../components/home/word';
import logo from '../../logo.svg';
import './play.css';

function Play() {
  var puzzle = 'WHERE THERE IS A WILL THERE IS A WAY';
  const crypt = { A: 'B', B: 'C', C: 'D', D: 'E', E: 'F', F: 'G', G: 'H', H: 'I', I: 'J', J: 'K', K: 'L', L: 'M', M: 'N', N: 'O', O: 'P', P: 'Q', Q: 'R', R: 'S', S: 'T', T: 'U', U: 'V', V: 'W', W: 'X', X: 'Y', Y: 'Z', Z: 'A' }
  const [enterInputValue, setEnterInputValue] = useState({});
  const [error, setError] = useState([]);
  //Split the puzzle(string) into words
  const [encrypted, setEncrypted] = useState('');
  useEffect(() => {
    var encrypted ='';
    var position = {};
    puzzle.split('').map((char, index) => {
      //Check whether the letter is already present or not
      if (crypt[char]) {
        encrypted = encrypted + crypt[char];
        position[crypt[char]] = ""
      }
      //enter in else when encounter a special char
      else {
        encrypted = encrypted + char;
      }
    })
    setEncrypted(encrypted)
    setEnterInputValue(position)
  }, [])
  


  //For checking each letter of the word .. Whether it is correct ? 
  //After clicking on the Let's Check Button
  const check = () => {
    var err = []
    for (const key in enterInputValue) {
      console.log(`${key}:${enterInputValue[key]}`);
      if (crypt[enterInputValue[key]] == key) {
        //Correct Value; Continue checking
      }
      else {
        console.log('So Sorry! Please try again');
        err.push(key);
      }
    }
    console.log(err);
    setError(err)
  }
  console.log(encrypted)
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
          encrypted.split(' ').map((word, index) => {
            //passing the splitted word('WHERE') in Word
            //enterInputValue for storing the value entered by user
            //setEnterInputValue for setting new value(encrypted) one 
            return <div className='quoteInner'><Word word={word} err={error} enterInputValue={enterInputValue} setEnterInputValue={setEnterInputValue} />&nbsp;</div>
          })
        }
      </div>
      <button class="btn" onClick={check} type="submit">Let's Check</button>
    </div>
  );
}

export default Play;
