import React from 'react';
import {useParams}  from 'react-router-dom';
import EditRoomForm from './Forms/EditRoomForm';
import PropTypes from "prop-types";

export default function GetRoomId() {
    const {id} = useParams();
    console.log(id);

  return (
    <EditRoomForm id={Number(id)}/>
  )
}

GetRoomId.propTypes = {
    id: PropTypes.number
}