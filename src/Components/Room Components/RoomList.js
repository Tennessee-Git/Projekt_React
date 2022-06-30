import React from 'react';
import RoomDetails from "./RoomDetails";
import './RoomStyle.css';

const RoomList = ({rooms,deleteFunc}) => {
    

    return (
        <div className="card-container"> 
            <div className="custom-grid">
                {rooms.map((room,key) =>
                    <RoomDetails
                        key={room.id}
                        id={room.id}
                        label={room.label}
                        value={room.value}
                        capacity={room.capacity}
                        deleteFunc={deleteFunc}/>)
                }
            </div>
        </div>
    )
}

export default RoomList
