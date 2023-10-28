import { useState } from 'react';
import logo from '../../logo.svg';
import './word.css';


// Word-> Encrypted 'Where'(one word at a time)
function Word({word, err, enterInputValue, setEnterInputValue}) {
  let regex = /^[a-zA-Z]+$/;
  return (
    <div className="word">
      {
        //char-> encrypted
        word.split('').map((char) => {
          // checking for characters in word
          if (regex.test(char)) { 
            // displaying 'E'
            // Char is the word in splitted form (For Where to 'W')
            if(char=='F'){
              return <div className='innerBlock' style={{marginBottom: '50 px'}}> <p>E</p></div>
            }
            // input box-> 1 (accept one value as input)
            return <div className='inner' >
              {/* Input starts from here */}
              <input maxLength={1}
              style={{color: err.includes(char)?"red":""}}
            //enterInputValue[char]=> What users has enterned in the box (char shows the encrypted value
            //below the box
            value={enterInputValue[char] || ''}
            //OnChange-> user inserts new value-> Calling set function to set the value of enterInputValue
            onChange={(event)=>{setEnterInputValue((prev)=>{var temp={...prev};
                temp[char] = event.target.value; 
                return temp;
              })}}/> <p>{char}</p></div> 
          } 
          else { 
            return <>{char}</>
          }
        })
         
      }
    </div>
  );
}

export default Word;
