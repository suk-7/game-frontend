import { useState } from 'react';
import logo from '../../logo.svg';
import './word.css';


// Word-> Encrypted 'Where'(one word at a time)
function Word({word, enterInputValue, setEnterInputValue}) {
  let regex = /^[a-zA-Z]+$/;
  return (
    <div className="word">
      {
        //char-> encrypted
        word.split('').map((char) => {
          // checking for characters in word
          if (regex.test(char)) { 
            // displaying 'E'
            if(char=='F'){
              return <div className='innerBlock' style={{marginBottom: '50 px'}}> <p>E</p></div>
            }
            // input box-> 1 (accept one value as input)
            return <div className='inner' ><input maxLength={1}
            
            value={enterInputValue[char] || ''}
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
