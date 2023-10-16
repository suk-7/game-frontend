import logo from '../../logo.svg';
import './word.css';



function Word({word}) {
  let regex = /^[a-zA-Z]+$/;
  return (
    <div className="word">
      {
        word.split('').map((char) => {
          if (regex.test(char)) { 
            if(char=='F'){
              return <div className='inner' style={{marginTop: '10 px'}}> <p>E</p></div>
            }
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
