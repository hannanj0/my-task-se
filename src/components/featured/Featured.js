import React from 'react'

import './Featured.css'

import Flat5 from '../../assets/flat5.jpeg'
import Bed1 from '../../assets/bed1.jpeg'
import Bed2 from '../../assets/bed2.jpeg'
import Kitchen1 from '../../assets/kitchen1.jpeg'
import Bath1 from '../../assets/bath1.jpeg'

import Flat6 from '../../assets/flat6.jpeg'
import Bed3 from '../../assets/bed3.jpeg'
import Livroom1 from '../../assets/livroom1.jpeg'
import Kitchen2 from '../../assets/kitchen2.jpeg'
import Bath2 from '../../assets/bath2.jpeg'

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top Featured Listings</h1>
        <p className='featured-text'>Selected Listings by City and Region based on views.</p>
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={Flat5} alt='' />
            <img src={Bed1} alt='' />
            <img src={Bed2} alt='' />
            <img src={Kitchen1} alt='' />
            <img src={Bath1} alt='' />
            <div className='span-3 img-details'>
            <div className='top'>
                        <h2>123 Sesame St. London, England</h2>
                        <p>Flat for Sale</p>
                        <p className='price'>£2,000,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>2</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>2</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>£14,000/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>An amazing modern flat in the busy city of London, a spacious and luxurious home for any consultant looking for work.</p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>


            {/* Section section */}
            <div className='container'>
                
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Livroom1} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={Flat6} alt='' />

                <img className='order-4' src={Kitchen2} alt='' />
                <img className='order-5' src={Bath2} alt='' />
                <div className='span-2 right-img-details order-7'>
                    <p>The second-largest city in the Bavarian dialect area, packed with comfort and amazing views from the top</p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                <div className='top'>
                        <h2>123 Bayern St. Munich, Germany</h2>
                        <p>Flat for Sale</p>
                        <p className='price'>£1,500,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>3</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>2</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>6793</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>£9,000/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>


    </div>
  )
}

export default Featured