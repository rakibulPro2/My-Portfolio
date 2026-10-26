import React from 'react'
import { footerText } from '../data/portfolioData'

const Footer = () => {
  return (
    <div className='py-8 bg-dark-300'>
        <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">{footerText}</p>
        </div>
    </div>
  )
}

export default Footer