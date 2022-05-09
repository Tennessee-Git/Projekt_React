import React, {useState, useEffect} from 'react'
import { getShowings } from '../api/api';
import AddShowingForm from '../Components/Forms/AddShowingForm';
import ShowingsList from '../Components/Showing Components/ShowingsList';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function ShowingsPage() {
    const [open, setOpen] = useState(false);
    const [showings, setShowings] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    useEffect(() =>{
        const getAllShowings = async () => {
          const allShowings = await getShowings();
          if(allShowings) setShowings(allShowings);
        };
        getAllShowings();
      },[]);

    return (
        <div>
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
                <ShowingsList showings={showings}/>
                
            </div>
        </div>
    )
}

export default ShowingsPage
