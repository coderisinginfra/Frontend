import React, { useState } from 'react'
import '../CSS/Booknow.css'
import { ToastContainer , toast  } from 'react-toastify';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';

const Booknow = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const [open, setOpen] = useState(false);
  const [isButtonDisabled,setIsButtonDisabled] =useState(false)
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true)
    try {
      await axios.post("https://backendrisinginfra.risinginfra.in/api/v1/popupform", { name, email, contact });
      setOpen(false);
      toast("Thank you for your response! Our team will contact you soon.");
    } catch (error) {
      // setOpen(false);
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
<Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmitQuery,
        }}
      >
        <DialogTitle>Get In Touch With Us</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "2em" }}>
            Please enter your details. Our team will contact you soon.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: "1em" }}
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "1em" }}
          />
          <TextField
            required
            margin="dense"
            id="contact"
            name="contact"
            label="Contact Number"
            type="tel"
            fullWidth
            variant="outlined"
            value={contact}
            inputProps={{ maxLength: 10, pattern: '[0-9]*' }}
            onChange={(e) => setContact(e.target.value)}
            sx={{ marginBottom: '1em' }}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant='contained' style={{color:"white",background:"#115850"}} disabled={isButtonDisabled}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    <div className="booknow">
        <h3 className="book" onClick={(e)=>setOpen(true)}>Enquire Now</h3>
    </div>
    </>
  )
}

export default Booknow
