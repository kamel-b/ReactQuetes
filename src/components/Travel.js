import React from 'react'

const voyages = [
  {
   destination : "Napoli",
   country : "Italy",
   photo : "https://www.interrail.eu/content/dam/images/interrail/naples_100x500.adaptive.767.0.png",
   distance : "500km"

  },
    {
        destination : "Barcelona",
        country : "Spain",
        photo : "https://cdn.pixabay.com/photo/2016/12/08/17/45/barcelona-1892487_960_720.jpg",
        distance : "200km"

    },
      {
        destination: "Paris",
        country: "France",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-%D9%86%D9%85%D8%A7740x380-C-DR.jpg",
        distance: "0km"

      },
        {
          destination: "Tokyo",
          country: "Japan",
          photo: "https://www.advtraining.it/img/news/64378.jpg",
          distance: "5000km"

        },
          {
            destination: "New York",
            country: "U.S.A",
            photo: "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_960_720.jpg",
            distance: "900km"

          },
]

const Travel = () =>{
  return(
    <div>
      {voyages.map(voyage =>
        <div>
        <h1>{voyage.destination}</h1>
        <h2>{voyage.country}</h2>
        <img src={voyage.photo} alt=""/>
        <p>{voyage.distance}</p>
        </div>
        )}

    </div>
  )
}


/*const Travel = ({destination, country, photo, distance})=>{
    return(
        <section className="App-travel">
          <h1>{destination}</h1>
          <h2>{country}</h2>
          <img src={photo} alt=""/>
          <p>{distance}</p>
        </section>
      
    )
}*/



export default Travel;