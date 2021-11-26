import React from 'react';
import {useParams}  from 'react-router-dom';
import EditShowingForm from './Forms/EditShowingForm';

export default function GetMovieId() {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <EditShowingForm id={id} />
        </div>
    )
}