import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>Bringing Consultants Together</h1>
            <p className='search-text'> Search the largest selection of best flats to rent or to buy, from consultants, to consultants</p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Enter Address or Area..' />

                </div>
                <div className='radio'> 
                    <input type='radio' checked />
                    <label>Buy</label>
                    <input type='radio' />
                    <label>Rent</label>
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero