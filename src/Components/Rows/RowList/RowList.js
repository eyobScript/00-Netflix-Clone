import React from 'react';
import Row from '../Row/Row';
import requests from '../../../Utils/requests';

function RowList() {
    // Create an array of objects with title and fetchUrl
    const rowConfigs = [
        { title: "NETFLIX ORIGINAL", fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true },
        { title: "Trending Now", fetchUrl: requests.fetchTrending },
        { title: "Top Rated", fetchUrl: requests.fetchTopRatedMovies },
        { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
        { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
        { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
        { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
        { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
        { title: "TV Shows", fetchUrl: requests.fetchTvShow },
    ];

    return (
        <>
            {/* Map through the rowConfigs array to render Row components */}
            {rowConfigs.map((row, index) => (
                <Row
                    key={index} // Use index as the key; it's acceptable here since the array is static
                    title={row.title}
                    fetchUrl={row.fetchUrl}
                    isLargeRow={row.isLargeRow} // Pass isLargeRow if it's defined
                />
            ))}
        </>
    );
}

export default RowList;
