import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoGoogleplus } from "react-icons/io";

const Footer = () => {
  return (
      <div className='footerSection'>
          <footer>
              <ul>
                  <li><CiFacebook /></li>
                  <li><FaInstagram /></li>
                  <li><CiTwitter /></li>
                  <li><IoLogoGoogleplus /></li>
              </ul>
          </footer>
    </div>
  )
}

export default Footer