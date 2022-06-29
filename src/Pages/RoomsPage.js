import React, {useState} from 'react';
import './Page.css';
import AddRoomForm from '../Components/Forms/AddRoomForm'
import RoomList from '../Components/Room Components/RoomList'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function RoomsPage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="heading">
              <br/>
              <h1>Lista sal kinowych: <button className="AddBtn"
                onClick={handleClickOpen}>Dodaj salę</button></h1>
              
              <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='600px'
              >
                <DialogContent>
                <AddRoomForm closeDialog={handleClose}/>
                </DialogContent>
              </Dialog>

          </div>
          <RoomList/>
    </div>
  )
}
