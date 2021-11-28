import React from 'react';
import {useParams}  from 'react-router-dom';
import EditShowingForm from './Forms/EditShowingForm';
import ReservationForm from './Forms/ReservationForm';
import PropTypes from "prop-types";

export default function GetShowingId({type}) {
    const {id} = useParams();
    console.log(id);
    if(type === "edit")
    {
        return (
            <div>
                <EditShowingForm id={id} />
            </div>
        )
    }
    if(type === "reservation")
    {
        return (
            <div>
                <ReservationForm id={id} />
            </div>
        )
    }
}

GetShowingId.propTypes = {
    id: PropTypes.number
}