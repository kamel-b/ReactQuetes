import React from 'react'

const Travel = ({destination, country, photo, distance})=>{
    return(
        <section className="App-travel">
          <h1>{destination}</h1>
          <h2>{country}</h2>
          <img src={photo} alt=""/>
          <p>{distance}</p>
        </section>
      
    )
}



export default Travel;