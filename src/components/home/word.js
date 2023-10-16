import logo from '../../logo.svg';
import './word.css';
import { useState } from 'react';


function Word({ word, position}) {
  const [charShow, setChar] = useState('');
  let regex = /^[a-zA-Z]+$/;
  return (
    <div className="word">
      {
        word.split('').map((char,index) => {
          if (regex.test(char)) { 
            if(char=='F'){
              return <div className='inner' style={{marginTop: '10 px'}}> <p>E</p></div>
            }
            // if (position['E'].indexOf(index)!=-1) {
            //    return <div className='inner' > <p>E</p></div>
            // } 
            return <div className='inner' ><input maxLength={1} /> <p>{char}</p></div> 
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
