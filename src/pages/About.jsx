import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
const AboutPage=() =>{
  return (
   <Card>
    <div className="about">
<h2>Our Services</h2>
<p>
  This is feedback created to get feedback for product or services
 <br /> version 1.0.0
  {/* <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul> */}
</p>

    <Link to='/' >Back to home</Link>

    </div>

   </Card>
  )
}

export default AboutPage