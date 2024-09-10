import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchBlogReviewDetailes = (props) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        document.title = props.title;
    }, [props.title]); // Added dependency array
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://www.backend.risinginfra.in/api/v1/fetchblogreview"); 
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
                <h1>All Blog Review Detailes</h1>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Message</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.blogsubmittername}</td>
                                <td>{item.contactnumber}</td>
                                <td>{item.blogmessage}</td>
                                <td>{item.submitdate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FetchBlogReviewDetailes;
