import React from 'react'
import './info.css'

const Info = ({api}) => {


 
  return (
    <div>
        <article className='cabesera'> 
            <h2>{api?.name}</h2>
            <ul className='ul' >
            <li><span className='span'>Type:</span>{api?.type}      </li>
            <li><span className='span'>Dimension:</span>{api?.dimension}     </li>
            <li><span className='span'>Population:</span>{api?.residents.lenght}     </li>
            </ul>
        </article>
    </div>
  )
}

export default Info