import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import '../CSS/Event.css'

const AllEvents = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isButtonDisabled,setIsButtonDisabled] = useState(false)

    useEffect(() => {
        document.title = props.title
    }, [props.title])

    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchevents")
                setFetchData(response.data)
            } catch (error) {
                console.error("Error fetching event data:", error)
            }
        }
        fetchEvents()
    }, [])

    const [open, setOpen] = useState(false);

    useEffect(()=>{
    setTimeout(()=>{
        setOpen(true)
    },5000)
    },[])
    const handleClose = () => {
        setOpen(false);
        };

    const handleSubmitquery = async (e) => {
        e.preventDefault();
        setIsButtonDisabled(true)
        try {
            const response = await axios.post("https://www.backend.risinginfra.in/api/v1/popupform", { name, email, contact });
            setOpen(false);
            setIsButtonDisabled(false)
            toast("Thank Your For your reponse our team will contact to you soon");
        } catch (error) {
        }
    }

    return (
        <div>
      <Helmet>
        <title>{props.title}</title>
        <link rel="canonical" href="https://www.risinginfra.in/events" />
        <meta name="description" content="" />
        <meta name="keywords" content="Rising Infra Events, Agra Events, Property Events, PropertyExpo, Properties, Rising Infra, Rising Infra Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, Residential Property On Noida Expressway, Noida Expressway Property, Residential Projects On Noida Expressway, Noida Expressway Residential Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,Residential Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best real estate company in noida for job, top 10 real estate companies in noida, famous companies in noida, real estate companies in noida, no 1 real estate company in the world, which real estate company is best for new agents, best real estate company in nyc, top real estate company in noida, top 10 real estate company in noida, best real estate in noida, best real estate companies in greater noida, best real estate consultant in noida, best property dealer in noida, noida real estate company, best real estate brokers in noida, top real estate companies in noida, fortune 500 companies in noida, best real estate developers in noida, best real estate agents in noida,best properties noida, real estate company in noida, no 1 real estate company in india, best real estate projects in noida, best property dealers in noida extension, noida best property dealers, noida best property, top 5 real estate companies in noida, top 10 real estate brokers in noida, real estate company in noida sector 94" />
      </Helmet>
      <div className='flex-content'>
            <ToastContainer />
            <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Get In Touch With Us</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{marginBottom:"2em"}}>
            Submit this form, please enter your Detailes our team will contact to soon.
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
            onChange={(e)=>setName(e.target.value)}
            sx={{marginBottom:"1em"}}
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{marginBottom:"1em"}}
          />
          <TextField
              required
              margin="dense"
              id="contactnumber"
              name="contact number"
              label="Contact Number"
              type="tel"
              fullWidth
              variant="outlined"
              value={contact}
              inputProps={{ maxLength: 10, pattern: '[0-9]*' }}
              onChange={(e)=>setContact(e.target.value)}
              sx={{ marginBottom: '1em' }}
             />
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant='contained' color='primary' onClick={handleSubmitquery} disabled={isButtonDisabled}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      </div>
      <div className='heading-blogs-2'>
                <h1>Our Latest Events</h1>
                <div className='border-bottom-blog'> </div>
            </div>
            <div className='container-events'>
                {
                    fetchData.length > 0 ? (
                        fetchData.map((item, index) => (
                            <div key={index} className='front-events'>
                                <div className='events-images'>
                                    <img src={item.eventLinks} alt="Event" className='events'/>
                                </div>
                                <div className='events-paragraphs'>
                                    <div>
                                        <h1>{item.title}</h1>
                                    </div>
                                     <div className='container-dates'>
                                         <div className='container-dates'>
                                             <DateRangeIcon color='primary' />
                                             <h3 className='h3cont'>{item.eventDate}</h3>
                                         </div>
                                         <div className='container-dates'>
                                             <LocationOnIcon color='primary' />
                                             <h3 className='h3cont'>{item.eventLocation}</h3>
                                         </div>
                                     </div>
                                     <div>
                                         <p title={item.eventsdescription} className='paragraph-events'>{item.eventsdescription}</p>
                                     </div>
                                     </div>
                            </div>
                        ))
                    ) : (
                        <p>No events available at the moment.</p>
                    )
                }
            </div>
        </div>
    )
}

export default AllEvents
