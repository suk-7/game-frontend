import Word from '../../components/home/word';
import logo from '../../logo.svg';
import './play.css';

function Play() {
  var puzzle = 'WHERE THERE IS A WILL THERE IS A WAY';
  const crypt={A:'B', B:'C',C:'D',D:'E',E:'F',F:'G',G:'H',H:'I',I:'J',J:'K',K:'L',L:'M',M:'N',N:'O',O:'P',P:'Q',Q:'R',R:'S',S:'T',T:'U',U:'V',V:'W',W:'X',X:'Y',Y:'Z',Z:'A'}
  var position={}
  var encrypted=''
  //Split the puzzle(string) into words
  puzzle.split('').map((char,index)=>{
    //Check whether the letter is already present or not
    if(crypt[char])
    {
      encrypted=encrypted+crypt[char]
      console.log("Inside if")
    }
    //enter in else when encounter a special char
    else{
      encrypted=encrypted+char
      console.log("Inside else ", char)
    }
    // for mapper -> position : having all the positions of the characters[W, H, E, R]
    if(!position[char])
    {
      position[char]=[index];
    }
    else{
      var fetch=position[char];
      fetch.push(index);
      position[char]=fetch;
    }
  })
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
           return <div className='quoteInner'><Word word={word}/>&nbsp;</div>
          }) 
        }
      </div>

    </div>
  );
}

export default Play;
