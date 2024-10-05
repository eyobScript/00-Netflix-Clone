const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl('');
    } else {
        movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
             const urlParams = new URLSearchParams(new URL(url).search);
            //  console.log(urlParams.get('v'))
             setTrailerUrl(urlParams.get('v'));
         })
        }}