import React, {useState, useEffect} from 'react';
import RoomDetails from "./RoomDetails";
import { getRooms, deleteRoom } from '../../api/api';
import './RoomStyle.css';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() =>{
        const getAllRooms = async () => {
          const allRooms = await getRooms();
          if(allRooms) setRooms(allRooms);
        };
        getAllRooms();
      },[]);

    const deleteFunction = (id) => {
        deleteRoom(id);
        setRooms(rooms.filter((i)=>(i.id !== id)));
    }

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
                        deleteFunc={deleteFunction}/>)
                }
            </div>
        </div>
    )
}

export default RoomList
