import React from 'react';
import {useParams}  from 'react-router-dom';
import EditShowingForm from './Forms/EditShowingForm';
import PropTypes from "prop-types";

export default function GetShowingId() {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <EditShowingForm id={id} />
        </div>
    )
}

GetShowingId.propTypes = {
    id: PropTypes.number.isRequired
}