import React from 'react'
import classes from './SocialIcons.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function SocialIcons({ color, size }) {
 
  return (

    <div className={classes.SocialIcons} style={{ color: `${color}`, fontSize: `${size}` }}>
      <a target="_blank" href="https://twitter.com/OnePlanetRating" rel="noopener noreferrer">
      <FaTwitter style={{ color: `${color}` }}/>
      </a>
      <a target="_blank" href="https://www.facebook.com/oneplanetrating" rel="noopener noreferrer">
      <FaFacebook style={{ color: `${color}` }} />
      </a>
      <a target="_blank" href="https://www.instagram.com/oneplanetrating/" rel="noopener noreferrer">
      <FaInstagram style={{ color: `${color}`}} />
      </a>
    </div>

  )
}

export default SocialIcons