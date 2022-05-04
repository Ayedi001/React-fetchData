import React , {useState}from 'react';
import Header from "./components/Header";
import Lists from './components/List';
import Elements from './components/Elements'
import data from './data'


function greeting(name) {
  const date = new Date()
  const hours = date.getHours()
  if (hours > 4){
      console.log(`food is here ${name}`)
  }
  }


function App (){
  const Element = data.map( x =>{ 
    return(
        <Elements
        {...x}
         />
    )
    
 })
 const [counter,setCounter] = useState(0)
 const inc =  () => {
   setCounter(prev => prev + 1);
 }

 return (
    <div>
      <Header />
      <Lists />
      <Lists />
      {Element}
      <p>{greeting("bob")}</p>
      <h2>count {counter}</h2>
      <button onClick={inc} > click</button>
    </div>
  )
}
export default App;
