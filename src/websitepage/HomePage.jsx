import React, { useContext, useEffect, useRef, useState } from 'react'
import '../CSS/HomePage.css'
import buyhome from '../assets/adminimage/buyinghome.jpg'
import leasecommercial from '../assets/adminimage/leasecommercialsapce.png'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, TextareaAutosize } from '@mui/material'
import axios from 'axios'
import '../CSS/HomePageData.css'
import { datasets } from '../App'
import DOMPurify from 'dompurify';
import Notesimage from '../assets/notes.png'
import building from '../assets/building.png'
import '../CSS/HomePageNew.css';
import Carousel from '../components/Carousel'
import noida from '../assets/location/Noida.jpg'
import gurugram from '../assets/location/gurugram.jpg'
import goa from '../assets/location/goa.jpg'
import Ayodhya from '../assets/location/Ayodhya.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import testimonialclient from '../assets/imges/testimonialclient.jpg'
import HomePhoto from '../assets/home.jpg'
import ghaziabad from '../assets/imges/ghaziabad.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet'
import navratri from '../assets/navratri.mp4'
import navratriaudio from '../assets/navratrireel.mp3'

const HomePage = () => {

  const search = useRef()
  
  const { setBlogData } = useContext(datasets);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 3;
  const [category, setCategory] = useState([]);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isButtonDisabled,setIsButtonDisabled] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true)
    try {
        const response = await axios.post("https://www.backend.risinginfra.in/api/v1/popupform", { name, email, contact });    
        setOpen(false);
        toast("Thank Your For your reponse our team will contact to you soon");
    } catch (error) {
    }
}

  useEffect(() => {
      const fetch = async () => {
          try {
              const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchblogs");
              setBlogs(response.data.reverse());
              const categoryData = await axios.get("https://www.backend.risinginfra.in/api/v1/categoryfind");
              setCategory(categoryData.data);
              toast("Anupam Sharma Just Bought 4BHK In Gaur NH24!");
          } catch (error) {
              // console.log(error);
          }
      };
      fetch();
  }, []);

  const [visibleListings, setVisibleListings] = useState([]);
  const [listings,setistings] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchlistings");
        setistings(response.data.reverse());
        setVisibleListings(response.data.slice(0, 9));
      } catch (error) {
        // console.log(error);
      }
    };
    fetch();
  }, []);

  const formatDate = (dateString) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString('en-CA', options); // Format as YYYY-MM-DD
  };

  // Function to truncate HTML content to 35 words
  const truncateHTML = (html, wordLimit) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const text = doc.body.textContent || "";
      const truncatedText = text.split(' ').slice(0, wordLimit).join(' ');
      return truncatedText;
  };

  const pageCount = Math.ceil(blogs.length / blogsPerPage);
  const displayBlogs = blogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage);


  const [newcity,setnewcity] = useState('Noida')
  const [newcategory,setnewcategory] = useState('residential')
  const [responsefilter,setresponsefilter]= useState([])

  const handleSubmitSearch = async () => {
    try {
        const response = await axios.get('https://www.backend.risinginfra.in/api/v1/fetchhomedata', {
            params: {
                city: newcity,
                category: newcategory
            }
        });
      setresponsefilter(response.data.reverse())
    } catch (error) {
        // console.error(error);
    }
};

const firstResult = responsefilter[0] || {};


const [open, setOpen] = useState(false);

useEffect(()=>{
 setTimeout(()=>{
    setOpen(true)
 },100)
},[])

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <>
   <Helmet>
    <title>Rising Infra - Best Real Estate Property Consultant in Delhi/NCR. Improve Your Real Estate Investment In India With Rising infra</title>
    <meta name="keywords" content="Rising Infra, Rising Infra Noida,Real estate, Real estate near me, Real estate for sale, Real Estate listings, Realtor, Best Realtor in noida, Real Estate Agent, Real Estate Brokerage, MLS Listings, Realty, Investment property, Commercial real estate,property expo,expo real estate,real estate expo 2024, proptree mela, expo villas,flats in noida, commercial property in noida,studio apartment in noida,flats in noida for sale,rise resort villas noida,3 bhk flats in noida ready to move,buy flat in noida,residential property,3bhk flat for sale,housing apartments for rent,residential real estate,commercial residential property,villa plots near me, Properties,, Real estate agents in noida residential property in Noida, residential properties in Noida, best residential property in Noida, best residential projects in Noida,commercial space in noida, top residential properties in Noida, commercial property in Noida, commercial properties in Noida, best commercial property in Noida, best commercial projects in Noida, top commercial properties in Noida, Rising Infra Private Limited, Property In Noida, Property On Noida Expressway, Commercial Property On Noida Expressway, Noida Commercial Projects, Noida Expressway Commercial Projects, commercial Property On Noida Expressway, Noida Expressway Property, commercial Projects On Noida Expressway, Noida Expressway commercial Projects, Noida Property Prices, Noida Properties, Commercial Property In Noida, Property In Noida For Sale, Best Property In Noida, Buy Property In Noida, Property In Noida Ready To Move,commercial Property In Noida, Luxury Property In Noida, Commercial Property In Noida For Sale, best real estate company in noida,best society in noida ready to move, best project in noida, new residential projects in noida,Home for sale,How to buy a home,New homes for sale,Property for sale, House for sale, Home for sale, How to buy a home, New homes for sale, Property for sale, House for sale, Luxury homes for sale, Apartment for sale, Cheap Houses For Sale, Mortgage, Zillow Properties, Home buying, House to buy, Home to buy, Home search, Real estate agency, Real estate listings, Best real estate agents, Real estate investment, Mortgage rates, Open House near me, Open Houses, How to get a mortgage, How to improve your credit score, Affordable homes for sale, Down payment assistance, Mortgage pre-approval, Mortgage calculator, Move-in ready homes, Home financing options, Homeownership benefits, Homeownership education, Home buying process, Home buying checklist, Home affordability calculator, Real estate broker, Real estate agent fees, Home inspection checklist, Home warranty, Homeowners Insurance, Homeowner association fees, Property taxes, Foreclosure, Home maintenance tips, Home buying mistakes to avoid, Home buying vs. renting, property in noida, Home for rent, House for rent, Property for rent, Apartment for rent, Noida rentals,Real estate noida, noida Homes for sale, noida real estate agent, noida Homes for sale, Houses for sale in noida, noida real estate market, noida real estate listings, noida Best neighborhoods for families, RISING INFRA - GUNTUR" />
    <meta name="description" content="Best Real Estate Consultant in Delhi/NCR Best Real Estate Property Consultant in Delhi/NCR, Search Real Estate in Noida - Buy Best Residential Properties by Owners, Dealers, and Real Estate Agents. Rising Infra is India’s best real estate company that offers a one-stop solution for all real estate-related problems" />
    <link rel='canonical' href='https://www.risinginfra.in' />
  </Helmet>
     <ToastContainer style={{marginTop:"7em"}}/>
   <div className='container-home'>
     {/* <Dialog
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
          <Button type="submit" variant='contained' color='primary' onClick={handleSubmit} disabled={isButtonDisabled}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>  */}

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
  sx={{ '& .MuiDialog-paper': { margin: 0, width: '100%', height: '100%', backgroundColor:"rgb(11,48,99)"} }} // Full width and height for the popup
>
  <DialogContent sx={{ padding: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
    <video
      src={navratri}
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'contain'
      }}
      loop
      autoPlay
      muted
    />
  </DialogContent>
  <DialogActions sx={{ position: 'absolute', bottom: 0, right: 0 }}>
    <Button onClick={handleClose} sx={{color:"white"}}>Cancel</Button>
  </DialogActions>
</Dialog>


      <div> 
        <h1 className='headiing-home-fron-container'>Find Your Property <br />With Rising Infra</h1>
        <p className='heading-image paragraph-home-front-data'>Discover your dream property nestled in the heart of serene surroundings, offering unparalleled luxury and comfort.</p>
      <div>
        <form action="">
       <div className='form-home-data'>
            <div className='conainer-form'>
            <label htmlFor="">Property For <br />
                <select name="category" id="category" className='selection'>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                  </select>
              </label>
            </div>
              <div className='conainer-form'>
              <label htmlFor="location">Location <br />
                  <select name="location" 
                  id="location"
                  value={newcity}
                  onChange={(e)=>setnewcity(e.target.value)}
                  className='selection'>
                      <option value="all" disabled>Select</option>
                      <option value="Ghaziabad">Ghaziabad</option>
                      <option value="Noida">Noida</option>
                      <option value="Gurugram">Gurgaon</option>
                      <option value="Goa">Goa</option>
                      <option value="Ayodhya">Ayodhya</option>
                    </select>
                </label>
              </div>
            <div className='conainer-form'>
            <label htmlFor="Property Type">Property Type <br />
              <select name="type" 
              id=""
              value={newcategory}
              onChange={(e)=>setnewcategory(e.target.value)}
              className='selection'>
                <option value="all" disabled>Select</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="plots">Plots</option>
                </select>
              </label>
            </div>
            <div className='clasnamebutton'>
            <Button variant='contained' color='primary' sx={{padding:'15px'}} onClick={handleSubmitSearch} className='buttons-home'>Submit</Button>
            </div>
       </div>
        </form>
      </div>
      </div>
    <div className='home-images-div'>
      <img src={HomePhoto} alt="Home Photo" className="home-images" />
    </div>
   </div>

{
  responsefilter.length>0?
  <>
   <div className='projectcity-title'>
   <h1 className='headingwhoweare hedas'>
        OUR EXCLUSIVE {firstResult.category?.toUpperCase() || newcategory.toUpperCase()} PROJECTS IN {firstResult.city?.toUpperCase() || newcity.toUpperCase()}
      </h1>
            <h1 className='heading-image props-name'>Discover Property IN RISING INFRA IN {firstResult.category?.toUpperCase()}</h1>
   </div>
    <div className='tags-data-home-filter'>
      {
        responsefilter.map((item,index)=>(
          <div key={index} className='data-front-home'>
              <Link to={`/projects/${item.propertyTitle}`} className='links-data-home'>
                <div>
                  <img src={item.images} alt="images" className='images-listing' />
                  <h1 className='title-home'>{item.propertyTitle}</h1>
                  <div className='icons-image-home'>
                <LocationOnIcon style={{color:"green"}}
                 />
                <p style={{ color: 'gray', marginLeft: '10px' }}><b>{item.location}</b></p>
              </div>
              <div className="prices-demad">
                <div className="left"><h6 style={{ marginTop: '-5px' }}>Size {item.size}.<sup>*</sup></h6></div>
                <div className="right"><h6 style={{ marginLeft: '2em', marginTop: '-5px' }}>Rs {item.price}<sup>*</sup></h6></div>
              </div>
            </div>
          </Link>
          </div>
    ))
      }
</div>
</>
  :null
}

<div className='projectcity-title'>
            <h1 className='headingwhoweare hedas'>Our Exclusive Projects</h1>
            <h1 className='heading-image props-name'>Discover Property With Rising Infra in India</h1>
        </div>
<div className='tags-data-home'>
{
        visibleListings.map((item,index)=>(
          <div key={index} className='data-front-home'>
              <Link to={`/projects/${item.propertyTitle}`} className='links-data-home'>
                <div>
                  <img src={item.images} alt="images" className='images-listing' />
                  <h1 className='title-home'>{item.propertyTitle}</h1>
                  <div className='icons-image-home'>
                <LocationOnIcon style={{color:"green"}}/>
                <p style={{ color: 'gray', marginLeft: '10px' }}><b>{item.location}</b></p>
              </div>
              <div className="prices-demad">
                <div className="left"><h6 style={{ marginTop: '-5px' }}>Size {item.size}.<sup>*</sup></h6></div>
                <div className="right"><h6 style={{ marginLeft: '2em', marginTop: '-5px' }}>Rs {item.price}<sup>*</sup></h6></div>
              </div>
            </div>
          </Link>
          </div>
    ))
      }
    </div>

{/* Home About Us Css start here  */}
   <div className="home-aboutus">
      <div className="aboutushome1">
            <h1 className='whoweare'>Who We Are</h1>
            <h1 className='headingwhoweare'>10 YEARS OF EXPERIENCE IN PROPERTY MANAGEMENT AND CONSULTANT</h1>
            <p className='paragraph-home home-about-para'>Welcome to The Rising Infra (RERA Reg.), where excellence meets expertise in the world of real estate. Our team of proficient professionals is dedicated to providing world-class real estate services to our esteemed clients.We offer a diverse catalogue of properties, ranging from residential to commercial, catering to the varied needs of our clients. Whether you are looking for your dream home or a prime commercial space, our extensive portfolio ensures that you find the perfect property to meet your requirements.</p>
            <div className='iconsimage-section-home'>
              <img src={Notesimage} alt="Notesimage" className='icons-data-home'/>
              <div className='port-home-center'>
                  <h4 className='content-para-home'>Concept PortFolio</h4>
                   <p className='paragraph-home content-para-home'>Whether you're looking to buy, sell, or rent a home, our extensive portfolio of residential properties ensures that you find the perfect place..</p>
              </div>
            </div>
            <div className='iconsimage-section-home'>
              <img src={building} alt="Building image" className='icons-data-home'/>
              <div className='port-home-center'>
                <h4 className='content-para-home'>Devlopment Design</h4>
                <p className='paragraph-home content-para-home'>Our comprehensive property management services include maintenance, tenant relations, and financial management, ensuring your property.</p>
              </div>
            </div>
      </div>
      <div className="aboutushome2">
          <img src={buyhome} alt="Residential" className='residential-home'/>
          <img src={leasecommercial} alt="Commercial" className='commercial-home'/>
        </div>
   </div>
   {/* Home About Us Css stop here  */}


   {/* Carosel start here  */}
  <div className='crouseals'>
      <div className='devlopers-name'>
        <div>
        <h4>Our Prestigious Partners</h4>
        </div>
        <div className='content-devlopers'></div>
      </div>
    <div>
      <Carousel />
    </div>
  </div>

    {/* Carosel stop here  */}      

    <div>
      <h1 className='location-content-name-home'>Our Projects</h1>
      <div className='location-flex'>
          <div className='data-image-flex-home'>
           <Link to="/noidaproperty" className='link-container'>
           <img src={noida} alt="Noida" className='image-location'/>
            <div className='name-images-flex-home'>
              Noida
            </div></Link>
          </div>
          <div className='data-image-flex-home'>
           <Link to="/gurgaonproperty" className='link-container'>
            <img src={gurugram} alt="Noida" className='image-location'/>
              <div className='name-images-flex-home'>
              Gurugram
              </div>
            </Link>
          </div>
          <div className='data-image-flex-home'>
           <Link to="/ghaziabadproperties" className='link-container'>
            <img src={ghaziabad} alt="Noida" className='image-location'/>
              <div className='name-images-flex-home'>
              Ghaziabad
              </div>
           </Link>
          </div>
          <div className='data-image-flex-home'>
           <Link to="/ayodhyaproperty" className='link-container'>
            <img src={Ayodhya} alt="Noida" className='image-location'/>
              <div className='name-images-flex-home'>
                Ayodhya
              </div>
            </Link>
          </div>
      </div>
    </div>

    {/* <div className="testimonials">
      <div className='testi-monial'>
       <div className='conatiner-testimonials'> 
        <h1 className='heading-image'>TESTIMONIALS</h1>
        </div>
      </div>
      <div className='testimonial'>
        <div className='container-testimonial'>
          <div className='testimonial-data-home'>
           <div className='testimonialclient'> 
            <img src={testimonialclient} alt="testimonialclient" className='testimonialclientimage'/>
            <h1 className='heading-testimonial'>Vansh Chawla </h1>
            </div>
          </div>
          <h1 className='para'>RisingInfra is India's premier property management company, providing exceptional services and unmatched expertise. Their dedication to excellence ensures a seamless experience for property owners and tenants alike.</h1>
        </div>
        <div className='container-testimonial'>
        <div className='testimonial-data-home'>
           <div className='testimonialclient' >
             <img src={testimonialclient} alt="testimonialclient" className='testimonialclientimage' />
              <h1 className='heading-testimonial'>Gaurav Chamoli </h1>
            </div>
          </div>
          <h1 className='para'>Rising Infra provides very genuine and wise advice to their clients. I really appreciate the working experience the seniors have. Yes the name Rising Infra justifies its existence in the market as the best real estate consultant in Delhi/NCR and why people call it Rising Infra.</h1>
        </div>
        <div className='container-testimonial'>
        <div className='testimonial-data-home'>
           <div className='testimonialclient'>
             <img src={testimonialclient} alt="testimonial client" className='testimonialclientimage'/>
            <h1 className='heading-testimonial'>JaiRaj Panekar</h1>
            </div>
          </div>
          <h1 className='para'>Rising Infra provides very genuine and wise advice to their clients. I really appreciate the working experience the seniors have. Yes the name Rising Infra justifies its existence in the market as the best real estate consultant in Delhi/NCR and why people call it Rising Infra.</h1>
        </div>
      </div>
    </div> */}
    <div className='container-div-blogs'>
      <div className='heading-blogs home-front-blogs'>
                  <h1>Must Read Blogs</h1>
                  <div className='border-bottom-blog'> </div>
      </div>
        <div className='blogs-section blogs-home'>
            <div className='blogs-data'>
                {displayBlogs.map((item, index) => (
                    <div key={index} className='flex-blogsimage-show'>
                        <Link
                            to={`/blogs/${item.postTitle}`}
                            className='list-color'
                        >
                            <div className='flex-blogs-content'>
                                <div className='image-blogs'>
                                    <img 
                                        src={item.coverimage} 
                                        alt={item.coverimage} 
                                        onError={(e) => e.target.src = logo} 
                                        className='image-contents-allblogs' 
                                    />
                                </div>
                                <div className='data-blogs'>
                                <div className='blogs-button-data'>
                                    <Button variant='contained'>{item.Category}</Button>
                                    </div>
                                    <h3 className='heading-blogs-content'><b>{item.postTitle}</b></h3>
                                    <div>
                                        <div className='paragraph-blogs' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateHTML(item.description, 25)) }}></div>
                                    </div>
                                    <div className='flexdataarrow'>
                                            <h3 className='data-headi'>READ MORE</h3>
                                            <ArrowCircleRightIcon />
                                        </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </div>
   </>
  )
}

export default HomePage
