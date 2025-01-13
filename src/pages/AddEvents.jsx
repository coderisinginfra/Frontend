import React, { useEffect, useState } from 'react';
import '../CSS/AddProject.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEvents = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [eventsdescription, setEventsDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [image, setImage] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    setIsButtonDisabled(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('eventsdescription', eventsdescription);
    formData.append('eventDate', eventDate);
    formData.append('eventLocation', eventLocation);
    formData.append('image', image);

    try {
      await axios.post('https://www.backendrisinginfra.risinginfra.in/api/v1/eventadd', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Event Added Successfully');
      setTitle(''); setEventsDescription(''); setEventDate(''); setEventLocation(''); setImage(null);
    } catch (error) {
      alert('Oops something went wrong');
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <>
      <div className="blogs">
        <div className="headingblog">
          <h1>Add Events In Rising Infra</h1>
        </div>
        <div className="datasets-field">
          <form onSubmit={handleSubmit}>
            <label htmlFor="posttitle">Title <br />
              <input type="text"
                placeholder="Event Title"
                id="posttitle"
                className="labelsblogs"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required />
            </label> <br />
            <label htmlFor="Description">Description<br />
              <input type="text"
                placeholder="Event Description"
                id="Description"
                className="labelsblogs"
                value={eventsdescription}
                onChange={(e) => setEventsDescription(e.target.value)}
                required />
            </label> <br />
            <label htmlFor="event">Event Location<br />
              <input type="text"
                placeholder="Event Location"
                id="eventLocation"
                className="labelsblogs"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                required />
            </label> <br />
            <label htmlFor="CollegeName">Event Date<br />
              <input type="date"
                placeholder="Event Date"
                id="eventDate"
                className="labelsblogs"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required />
            </label> <br />
            <label htmlFor="images">Image <br />
              <input type="file"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                placeholder="Add Event Image"
                id="image"
                className="labelsblogs"
                onChange={handleImageChange}
                required />
            </label> <br />
            <button type="submit" disabled={isButtonDisabled} className="submit1">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEvents;
