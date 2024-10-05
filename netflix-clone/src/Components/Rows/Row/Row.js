import React,{useState, useEffect} from 'react'
import "./row.css"
import axios from '../../../Utils/axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

function Row({title, fetchUrl, isLargeRow}) {

   const [movie, setMovie] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

   const base_url = "https://image.tmdb.org/t/p/original";

   useEffect(() => {(
    async () => {
    try {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
    } catch (error) {
        console.log("Error getting: ", error);
    }
   })()
}, [ fetchUrl ] );

function handleClick(movie) {



    // Silent Error Handling: The .catch() block clears the trailer URL instead of displaying any error message. 
    //This ensures the UI stays clean without showing any errors.
    /////////////////////////////////////////
    // setTrailerUrl(''): This line ensures that when no trailer is found (or there's an error), 
    //the trailerUrl remains empty, so nothing will be rendered in the UI.


    if (trailerUrl) {
        setTrailerUrl('');
    } else {
        movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then((url) => {
                if (url) {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                } else {
                    // No need to do anything here, simply avoid displaying the trailer
                    setTrailerUrl(''); // Clears out the trailer URL
                }
            })
            .catch(() => {
                // Suppressing the error silently, just clear the trailer URL
                setTrailerUrl('');
            });
    }
};
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        //  autoplay: 1 => Automatically play
        autoplay: 1,
    },
}

  return (
    <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
            {
                movie?.map((movie, index) => (
                     <img
                            onClick={() => handleClick(movie)}
                            key={index}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
                ))
            }
        </div>
        <div style={{padding: '40px'}}>
             {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    </div>
  )
}

export default Row;
