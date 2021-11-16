import React from 'react'

const MovieDetails = ({title, imageURL}) => {
    return (
        <div>
            <li>{title} {imageURL}</li>
        </div>
    )
}

export default MovieDetails
