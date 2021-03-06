import React from 'react';
import {useParams}  from 'react-router-dom';
import EditMovieForm from './Forms/EditMovieForm';
import PropTypes from "prop-types";

export default function GetMovieId() {
    const {id} = useParams();
    console.log(id);
    
    return (
        <EditMovieForm id={Number(id)} />
    )
}

GetMovieId.propTypes = {
    id: PropTypes.number
}