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
                setFetchData(response.data.reverse())
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
        <meta name="keywords" content="Rising Infra Events, Agra Events, Property Events, PropertyExpo, Properties, Rising Infra, Rising Infra Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, Residential Property On Noida Expressway, Noida Expressway Property, Residential Projects On Noida Expressway, Noida Expressway Residential Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Rising Infra, Rising Infra Noida, residential property in Noida, residential properties in Noida, best residential property in Noida, best residential projects in Noida, top residential properties in Noida, Real estate,Real estate near me, Real estate for sale,, Real Estate listings,Best Realtor in Noida, Real Estate Agent, Real Estate Brokerage,Realty,Investment property,Commercial real estate, Residential real estate, Real estate agents in [city name]commercial property in Noida, commercial properties in Noida, best commercial property in Noida, best commercial projects in Noida, top commercial properties in Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, commercial Property On Noida Expressway, Noida Expressway Property, commercial Projects On Noida Expressway, Noida Expressway commercial Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,commercial Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best society in noida ready to move, best project in noida, new residential projects in noida,Home for sale,How to buy a home,New homes for sale,Property for sale, House for sale, Luxury homes for sale, Apartment for sale, Cheap Houses For Sale, Mortgage, Zillow Properties, Home buying, House to buy, Home to buy, Home search, Real estate agency, Real estate listings, Best real estate agents, Real estate investment, Mortgage rates, Open House near me, Open Houses, How to get a mortgage, How to improve your credit score, Affordable homes for sale, Down payment assistance, Mortgage pre-approval, Mortgage calculator, Move-in ready homes, Home financing options, Homeownership benefits, Homeownership education, Home buying process, Home buying checklist, Home affordability calculator, Real estate broker, Real estate agent fees, Home inspection checklist, Home warranty, Homeowners Insurance, Homeowner association fees, Property taxes, Foreclosure, Home maintenance tips, Home buying mistakes to avoid, Home buying vs. renting, Virtual open house, Virtual tours, 3D home tours, Smart home technology, Sustainable homes, Co-living spaces, Smart home, Eco-friendly homes, Co-living, Co-working" />
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
