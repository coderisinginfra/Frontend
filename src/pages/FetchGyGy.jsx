import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchGyGy = (props) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        document.title = props.title;
    }, [props.title]); // Added dependency array
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchusersubmit"); 
                setData(response.data.reverse());
            } catch (error) {
                // console.log(error);
            }
        };
        fetchData(); // Calling the fetch function
    }, []); // Added empty dependency array
    
    return (
        <div className='blogs'>
            <div className='headingblog'>
                <h2>Fetch GyGy Detailes</h2> 
            </div>
            <br /> <br />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>SR.NO.</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.email}</td>
                                <td>
                                    {new Date(item.submitdate).toISOString().split('T')[0]} {/* For Date: YYYY-MM-DD */}
                                    {new Date(item.submitdate).toLocaleTimeString()} {/* For Time: HH:MM:SS */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FetchGyGy;
