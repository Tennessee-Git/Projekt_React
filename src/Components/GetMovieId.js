import React from 'react';
import {useParams}  from 'react-router-dom';
import EditMovieForm from './Forms/EditMovieForm';
import PropTypes from "prop-types";

export default function GetMovieId() {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <EditMovieForm id={Number(id)} />
        </div>
    )
}

GetMovieId.propTypes = {
    id: PropTypes.number
}