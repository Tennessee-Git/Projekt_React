import React, {useState} from 'react'
import AddShowingForm from '../Components/Forms/AddShowingForm';
import ShowingsList from '../Components/Showing Components/ShowingsList';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function ShowingsPage() {
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
              <h1>Lista seansów: <button className="AddBtn" onClick={handleClickOpen}>Dodaj seans</button></h1>
              <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='600px'
              >
                <DialogContent>
                <AddShowingForm closeDialog={handleClose}/>
                </DialogContent>
              </Dialog>
          </div>
          <ShowingsList/>
      </div>
    )
}

export default ShowingsPage
