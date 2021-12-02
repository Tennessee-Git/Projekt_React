import React from 'react';
import {useParams}  from 'react-router-dom';
import EditMovieForm from './Forms/EditMovieForm';

export default function GetMovieId() {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <EditMovieForm id={id} />
        </div>
    )
}