import React, {useState, useEffect} from 'react'
import axios from '../../Utils/axios'
import requests from '../../Utils/requests'
import "./banner.css"

function Banner() {

    const [movie, setMovie] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request.data.results);
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log("Error getting:\n" + error)
            }
        })()
    }, []);
    function truncate(OverViewWord, length) {
            return OverViewWord?.length > length ? OverViewWord.substr(0, length - 1) + '...' : OverViewWord;
    }
  return (
    <div 
    className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"

    }}
    >
        
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button play">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview , 150)}
            </h1>
        </div>
        <div className="banner_fadeButton" />
    </div>
  )
}

export default Banner
