import React,{useState} from "react";

const Movie=[
    {
        Title:"Movie 1",
        Description: "This is the movie 1",
        Rating: 9.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 2",
        Description: "This is the movie 2",
        Rating: 7.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 3",
        Description: "This is the movie 3",
        Rating: 9.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 4",
        Description: "This is the movie 4",
        Rating: 4.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 5",
        Description: "This is the movie 5",
        Rating: 9.53,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 6",
        Description: "This is the movie 1",
        Rating: 9.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 6",
        Description: "This is the movie 6",
        Rating: 6.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 1",
        Description: "This is the movie 1",
        Rating: 9.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 7",
        Description: "This is the movie 7",
        Rating: 7.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    {
        Title:"Movie 8",
        Description: "This is the movie 8",
        Rating: 8.3,
        url: "https://igimages.gumlet.io/hindi/gallery/actress/deepikapadukone/deepikapadukone190623_3.jpg?w=600&dpr=1.3"
    },
    
]


const MovieApp13June=({setDet})=>{
    // let [details,setDetails] = useState({});
    // const showDetails=(movie)=>{
    //     setDetails(movie);
    // }
    console.log(typeof(setDet));


    return(
        <div className="MovieApp13June">
            <div className="movie-container">
                {/* <img src={Movie[0].url} />
                <h1>{Movie[0].Title}</h1>
                <h2>{Movie[0].Description}</h2> */}
                {
                    Movie.map((movie)=>(
                        <div onClick={()=>{setDet(movie)}} className="movie-item">
                            <img src={movie.url}/>
                            <h1>{movie.Title}</h1>
                            <h2>{movie.Description}</h2>
                            </div>
                    ))
                }    
            </div>
            {/* {
            {details} && (
                
            <div className="details">
                <p>{details.Title}</p>
                <p>{details.Description}</p>
            </div>
            )
} */}
            
            
        </div>
    )
}

export default MovieApp13June;