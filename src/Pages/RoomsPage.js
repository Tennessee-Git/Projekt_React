import React, { useState, useEffect } from "react";
import "./Page.css";
import AddRoomForm from "../Components/Forms/AddRoomForm";
import RoomList from "../Components/Room Components/RoomList";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { getRooms, deleteRoom } from "../api/api";

export default function RoomsPage() {
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getAllRooms = async () => {
      const allRooms = await getRooms();
      if (allRooms) setRooms(allRooms);
    };
    getAllRooms();
  }, []);

  const deleteFunction = (id) => {
    deleteRoom(id);
    setRooms(rooms.filter((i) => i.id !== id));
  };

  const addFunction = (room) => {
    setRooms((rooms) => [...rooms, room]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="heading">
        <h1>Lista sal kinowych:</h1>
        <button className="AddBtn" onClick={handleClickOpen}>
          Dodaj salę
        </button>
        <Dialog open={open} onClose={handleClose} maxWidth="600px">
          <DialogContent>
            <AddRoomForm closeDialog={handleClose} addFunction={addFunction} />
          </DialogContent>
        </Dialog>
      </div>
      <RoomList rooms={rooms} deleteFunc={deleteFunction} />
    </div>
  );
}
