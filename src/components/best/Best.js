import React from 'react'

import Flat2 from '../../assets/flat2.jpeg'
import Flat3 from '../../assets/flat3.jpeg'
import Flat4 from '../../assets/flat4.jpeg'

import './Best.css'

const Best = () => {
  return (
    <div className='best'>
        <h1>Find Your Flat</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>UK</p>
            <p>US</p>
            <p>Germany</p>
            <p>Singapore</p>
            <p>China</p>
        </div>
        <div className='container'>
            <img src={Flat2} alt='' />
            <img src={Flat3} alt='' />
            <img src={Flat4} alt='' />
        </div>
        <button className='btn'>View All</button>
    </div>
  )
}

export default Best