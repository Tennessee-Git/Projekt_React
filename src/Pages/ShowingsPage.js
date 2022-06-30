import React, { useState,useEffect } from 'react'
import AddShowingForm from '../Components/Forms/AddShowingForm';
import ShowingsList from '../Components/Showing Components/ShowingsList';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { getShowings, deleteShowing } from '../api/api'

function ShowingsPage() {
    const [open, setOpen] = useState(false);
    const [showings, setShowings] = useState([]);

    useEffect(() =>{
      const getAllShowings = async () => {
        const allShowings = await getShowings();
        if(allShowings) setShowings(allShowings);
      };
      getAllShowings();
    },[]);

    const deleteFunction = (id) => {
      deleteShowing(id);
      setShowings(showings.filter((i)=>(i.id !== id)));
    };

    const addFunction = (showing) => {
      setShowings(showings => [...showings, showing]);
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
              <br/>
              <h1>Lista seansów: <button className="AddBtn" onClick={handleClickOpen}>Dodaj seans</button></h1>
              <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='600px'
              >
                <DialogContent>
                <AddShowingForm closeDialog={handleClose} addFunction={addFunction}/>
                </DialogContent>
              </Dialog>
          </div>
          <ShowingsList showings={showings} deleteFunc={deleteFunction}/>
      </div>
    )
}

export default ShowingsPage
