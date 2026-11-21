// lucide-react is a library of icons for React applications. that is we used here for bookmark icon in the card component. we can use any icon from this library by importing it and using it in our component. first we need to install the library by running the command "npm install lucide-react" in the terminal. then we can import the icon we want to use and use it in our component. for example, we can import the bookmark icon and use it in our card component as shown below for import 'import { Bookmark } from 'lucide-react'.


import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt={props.name} />
        <button className="btn">Save  <Bookmark /> </button>
      </div>
      <div className="center">
       <h3> {props.name} <span> {props.datePosted}</span></h3>
       <h2>{props.post}</h2>
       <div>
        <h4>{props.tag1}</h4>
        <h4>{props.tag2}</h4>
       </div>
      </div>

      <div className="bottom">
        <div> 
            <h3>{props.pay}</h3>
            <p> {props.location}</p>
          </div>
          <button>Apply Now</button> 
      </div>


    </div>
  )
}

export default Card
