import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Info from './Info';
import Card from './Card';



function App() {
 
  const [locat, setlocat] = useState()
const [busqueda, setbusqueda] = useState()
 
  useEffect(() => {

let url



  if (busqueda) {
    url = `https://rickandmortyapi.com/api/location/${busqueda}`
  } else {
      const randomnumber = Math.floor( Math.random()* 126) +1
    url = `https://rickandmortyapi.com/api/location/${randomnumber}`
  }






   
   
     
  
     axios.get(url)
      .then(res=> setlocat(res?.data))       
      .catch(err=> console.log(err))   
      
  }, [busqueda])
 

const buscar = e => { e.preventDefault()
  setbusqueda(e.target.search.value)
  console.log(busqueda)}





  

  return (
    <div className="App">

      <img className='ilust' src="./rym.png" alt="img" />
      <img src="./rlogo.png" alt="logo" />
      <form className='form' onSubmit={buscar}>
        <input className='buscar' id='search' type="text" />
        <button className='btn'>Buscar</button>
      </form>
   <Info api={locat}/>
   <div className='cardrender'>
    {
      locat?.residents.map(urlr => (<Card key={urlr}    resurl={urlr}/>))
    }
   </div>
    </div>
  )
}

export default App
