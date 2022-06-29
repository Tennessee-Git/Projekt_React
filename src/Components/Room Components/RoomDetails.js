import React from 'react';
import { Link } from 'react-router-dom'
import './RoomStyle.css';

const RoomDetails = ({id, label, value, capacity, deleteFunc}) => {
  return (
    <div className='room-card'>
        <div className='room-details'>
            <div className='room-label'>{label.toUpperCase()}</div>
            <div className='room-capacity'>Pojemność: {capacity} osób</div>
        </div>
        <div className='overlay'>
            <div className='inner-card-controls'>
                <Link to={`/edytujSale/${id}`}>
                    <button className="ctrl-btn">
                        <i className="far fa-edit"></i>
                    </button>
                </Link>
                <button className="ctrl-btn" onClick={() => {
                    console.log(id)
                    deleteFunc(id)}}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default RoomDetails