const handleClick = (movie) => {
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
