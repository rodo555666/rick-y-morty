import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import  './card.css'

const Card = ({resurl}) => {

const [personaje, setpersonaje] = useState()

useEffect(() => {

  
     axios.get(resurl)
      .then(rest=> setpersonaje(rest?.data))       
      .catch(er=> console.log(er))   
      
  }, [])


  return (
    <div className='contenedor'>
        <article>   
            <header>    
                <img className='foto' src={personaje?.image} alt="personaje" />
                <div><span className='circle'></span>
                    <span className={personaje?.status}>{personaje?.status}</span>
                </div>
                <section>
                    <h3>{personaje?.name}</h3>
                     <ul className='lista'>
                    <li><span>Specie: </span>  {personaje?.species}      </li>
                    <li><span>Origen: </span>  {personaje?.origin.name}     </li>
                    <li><span>Episodios: </span>  {personaje?.episode.length}     </li>
            </ul>
                </section>
            </header>
        </article>
    </div>
  )
}

export default Card