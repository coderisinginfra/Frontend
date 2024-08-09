import React, { useEffect, useState } from 'react'
import '../CSS/loginsignup.css'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import customer from '../assets/customer.jpg'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
  const navigate = useNavigate();
  const [name,setname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handlesubmit = async () => {
    try {
      const response = await axios.post("https://www.backend.risinginfra.in/api/v1/signup", { name, email, password, confirmationCode });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/private/admin/panel'); 
      }
    } catch (error) {
      // console.log(error);
      toast("Invalid Credentials");
    }
  };

  return (
    <div className='container-signup'>
      <ToastContainer style={{ marginTop: "7em" }} />
      <div className='images-data'>
        <div className='images-data-div2'>
          <div className='heading-controller'>
            <h1 className='heading-constructor'>Let's Grow <br /><span style={{ color: 'green' }}>With Rising Infra</span></h1>
            <p className='signup-para'>Please Login to Continue</p>
          </div>
          <div className='data-signup'>
            <form onSubmit={(e) => { e.preventDefault(); handlesubmit(); }}>
            <div className='icons-container-message'>
                <PersonIcon />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder='Name'
                  className='container-contain'
                  required />
              </div><br />
              <div className='icons-container-message'>
                <PersonIcon />
                <input
                  type="email"
                  name="username"
                  id="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Username'
                  className='container-contain'
                  required />
              </div><br />
              <div className='icons-container-message'>
                <EmailIcon />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  className='container-contain'
                  required />
              </div>
              <div className='icons-container-message' style={{marginTop:"1em"}}>
                <ConfirmationNumberIcon />
                <input
                  type="password"
                  name="confirmationCode"
                  id="confirmationCode"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  placeholder='Confirmation Code'
                  className='container-contain'
                  required />
              </div>
              <br />
              <Button variant='contained' color='primary' type='submit' className='button-submit'>Login</Button>
            </form>
          </div>
        </div>
        <div className='images-data-div'>
          <img src={customer} alt="diagram" className='images-data' />
        </div>
      </div>
    </div>
  );
}

export default Signup;
