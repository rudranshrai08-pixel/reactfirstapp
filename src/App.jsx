import React,{ useState} from 'react'

const App = () => {
  const [Numbers, setNumbers] = useState([1,2,3,4,5]);
const plusTwo = () => {
  const newNumbers = Numbers.map((num) => num + 2);
  setNumbers(newNumbers);
};
  return (
    <div>
      <h2> List of Numbers :</h2>
      {
        Numbers.map((num,index) => <h2 key={index}>{num}</h2>)
         } 
        <button onClick={plusTwo}>Plus+2</button>
     
    </div>
  )
}

export default App
