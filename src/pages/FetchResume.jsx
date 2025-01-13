import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchResume = (props) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        document.title = props.title;
    }, [props.title]); // Added dependency array
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://backendrisinginfra.risinginfra.in/api/v1/fetchresume"); // Added await
                setData(response.data);
            } catch (error) {
                // console.log(error);
            }
        };
        fetchData(); // Calling the fetch function
    }, []); // Added empty dependency array
    
    return (
        <div className='blogs'>
            <div className='headingblog'>
                <h1>All Resumes</h1>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Apply For</th>
                            <th>Resume</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.categoriesd}</td>
                                <td><a href={item.files} target='main'>{item.files}</a></td>
                                <td>
                                    {new Date(item.date).toISOString().split('T')[0]} {/* For Date: YYYY-MM-DD */}
                                    {new Date(item.date).toLocaleTimeString()} {/* For Time: HH:MM:SS */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FetchResume;
