import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/AddProject.css';
import JoditEditor from 'jodit-react';
import axios from 'axios';

const AddProject = (props) => {
    const navigate = useNavigate();
    const [propertyTitle, setpropertyTitle] = useState('');
    const [category, setcategory] = useState('');
    const [projectType, setprojectType] = useState('');
    const [developer, setdeveloper] = useState('');
    const [city, setcity] = useState('Noida');
    const [location, setlocation] = useState('');
    const [size, setsize] = useState('');
    const [price, setprice] = useState('');
    const [amenties, setamenties] = useState([]);
    const [featuredproject, setfeaturedproject] = useState(false);
    const [prelease, setprelease] = useState(false);
    const [sitelocation, setsitelocation] = useState('');
    const [isbuttonsubmit,setisbuttonsubmit] = useState(false)
    const [keywords,setkeywords] = useState('')
    const [ description,setdescription] = useState('')

    const editor = useRef(null);
    const [content, setcontent] = useState('');

    useEffect(() => {
        document.title = props.title;
    });

    const [image, setImage] = useState(null);
    const [galleryimage1,setgalleryimage1] = useState(null)
    const [galleryimage2,setgalleryimage2] = useState(null)
    const [galleryimage3,setgalleryimage3] = useState(null)
    const [floorplan1,setfloorplan1] = useState(null)
    const [floorplan2,setfloorplan2] = useState(null)
    const [floorplan3,setfloorplan3] = useState(null)

    const [imagePreview, setImagePreview] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    
    const handleImageChange1 = (event) => {
        const file = event.target.files[0];
        setgalleryimage1(file);
    };

    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        setgalleryimage2(file);
    };

    const handleImageChange3 = (event) => {
        const file = event.target.files[0];
        setgalleryimage3(file);
    };

    const handleImageChange4 = (event) => {
        const file = event.target.files[0];
        setfloorplan1(file);
    };

    
    const handleImageChange5 = (event) => {
        const file = event.target.files[0];
        setfloorplan2(file);
    };

    
    const handleImageChange6 = (event) => {
        const file = event.target.files[0];
        setfloorplan3(file);
    };

    const handleDeleteImage = () => {
        setImage(null);
        setImagePreview('');
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setamenties((prev) => [...prev, value]);
        } else {
            setamenties((prev) => prev.filter((amenity) => amenity !== value));
        }
    };

    const formsdata = [
        {
            label: 'Property Title*',
            placeholder: 'Property Title',
            type: 'text',
            value: propertyTitle,
            onchange: (e) => setpropertyTitle(e.target.value),
        },
        {
            label: 'Category*',
            type: 'select',
            value: category,
            options: [
                {label: '--Select Project Category--',value:'Commercial'},
                { label: 'Commercial', value: 'commercial' },
                { label: 'Residential', value: 'residential' },
                { label: 'Plots', value: 'Plots' }
            ],
            onchange: (e) => setcategory(e.target.value),
        },
        {
            label: 'Project Type*',
            placeholder: 'Project Type',
            type: 'select',
            value: projectType,
            options: [
                {label:'--Select Project Type--',value:'Commercial'},
                {label:'Independent Villa',value:'Independent Villa'},
                {label: 'Builder Floor', value: 'Builder Floor' },
                {label: 'Apartment', value: 'Apartment' },
                {label: 'Plots', value: 'Plots' },
                {label:'Guest House',value:'Guest house'},
                {label:'Retail Shop', value:'Retail Shop'},
                {label:'Industrial Building', value:'Industrial Building'},
                {label:'Independent House',value:'Independent House'},
                {label:'Warehouse',value:'Warehouse'},
                {label:'Commercial', value:'Commercial'},
                {label:'Gym Space',value:'Gym Space'},
                {label:'PG', value:'PG'},
                {label:'Independent Building', value: 'Independent Building'},
                {label: 'Factory', value:'Factory'},
            ],
            onchange: (e) => setprojectType(e.target.value),
        },
        {
            label: 'Developer*',
            type: 'select',
            value: developer,
            options: [
                {label:'--Select devloper--',value:'ACE Group'},
                { label: 'Sam India', value: 'Sam India' },
                { label: 'Stellar Group', value: 'Stellar Group' },
                { label: 'ACE Group', value: 'ACE Group' },
                { label: 'ACE Group', value: 'ACE Group' },
                {label:'GYGY', value:'GYGY'},
                { label: 'Gaur Group', value: 'Gaur Group' },
                {label:'Bhutani Infra',value:'Bhutani Infra'},
                {label:'Paras Buldtech',value:'Paras Buldtech'},
                {label:'DLF Group',value:'DLF Group'},
                {label:'FAIRFOX',value:'FAIRFOX'},
                {label:'CRC Group',value:'CRC Group'},
                {label:'M3M Group',value:'M3M Group'},
                {label:'Godrej Properties',value:'Godrej Properties'},
                {label:'Omaxe',value:'Omaxe'},
                {label:'Lodha Group',value:'Lodha Group'},
                {label:'ATS Group',value:'ATS Group'},
                {label:'Migsun',value:'Migsun'},
            ],
            onchange: (e) => setdeveloper(e.target.value),
        },
        {
            label: 'City*',
            type: 'select',
            value: city,
            options: [
                // {label:'--Select City--',value:'Noida'},
                { label: 'Noida', value: 'Noida' },
                {label:'Ghaziabad', value:'Ghaziabad'},
                { label: 'Gurugram', value: 'Gurugram' },
                {label:'Goa',value:'Goa'},
                {label:'Ayodhya',value:'Ayodhya'}
            ],
            onchange: (e) => setcity(e.target.value),
        },
        {
            label: 'Location Address*',
            placeholder: 'Location Address',
            type: 'text',
            value: location,
            onchange: (e) => setlocation(e.target.value),
        },
        {
            label: 'Area Size*',
            placeholder: 'Area Size',
            type: 'text',
            value: size,
            onchange: (e) => setsize(e.target.value),
        },
        {
            label: 'Price*',
            placeholder: 'Price',
            type: 'text',
            value: price,
            onchange: (e) => setprice(e.target.value),
        }, 
        {
            label: 'Keywords*',
            placeholder: 'Keywords',
            type: 'text',
            value: keywords,
            onchange: (e) => setkeywords(e.target.value),
        },
        {
            label: ' description*',
            placeholder: ' description',
            type: 'text',
            value:  description,
            onchange: (e) => setdescription(e.target.value),
        },
        {
            type: "text",
            placeholder: "https://map.google.com",
            label: "Site Location*",
            name: 'sitelocation',
            value: sitelocation,
            onchange: (e) => setsitelocation(e.target.value)
        },
        {
            label: 'Amenities*',
            type: 'checkbox',
            value: amenties,
            options: [
                { label: 'A/C', value: 'A/C' },
                { label: 'Power Backup', value: 'Power Backup' },
                { label: 'Security 24*7', value: 'Security 24*7' },
                { label: 'Park', value: 'Park' },
                { label: 'Club/Swimming Pool', value: 'Club/Swimming Pool' },
                { label: 'Shopping Plaza', value: 'Shopping Plaza' },
                { label: 'Car Park', value: 'Car Park' },
                { label: 'Club / Health Center', value: 'Club / Health Center' },
                { label: 'Near By Airport', value: 'Near By Airport' },
                { label: 'Near By Metro Station', value: 'Near By Metro Station' },
            ],

            onchange: (value) => setamenties(value),
        },
        {
            label: 'Overview*',
            placeholder: 'Overview',
            type: 'textarea',
            value: content,
            onchange: (e) => setcontent(e.target.value),
        },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        setisbuttonsubmit(true)
        try {
            const formData = new FormData();
            formData.append('propertyTitle', propertyTitle);
            formData.append('category', category);
            formData.append('projectType', projectType);
            formData.append('developer', developer);
            formData.append('city', city);
            formData.append('location', location);
            formData.append('sitelocation', sitelocation);
            formData.append('size', size);
            formData.append('price', price);
            formData.append('amenties', JSON.stringify(amenties));
            formData.append('content', content);
            formData.append('featuredproject', featuredproject);
            formData.append('prelease', prelease);
            if (image) {
                formData.append('image', image);
            }
            formData.append('galleryimage1',galleryimage1)
            formData.append('galleryimage2',galleryimage2)
            formData.append('galleryimage3',galleryimage3)
            formData.append('floorplan1',floorplan1)
            formData.append('floorplan2',floorplan2)
            formData.append('floorplan3',floorplan3)

            const response = await axios.post('https://www.backend.risinginfra.in/api/v1/addproject', formData);
            alert('Project added successfully!');
            setisbuttonsubmit(false)
            setpropertyTitle('')
            setcategory('')
            setprojectType('')
            setdeveloper('')
            setcity('')
            setlocation('')
            setsitelocation('')
            setsize('')
            setprice('')
            setdescription('')
            setamenties([])
            setcontent('')
            setImage(null)
            setfloorplan1(null)
            setfloorplan2(null)
            setfloorplan3(null)
            setgalleryimage1(null)
            setgalleryimage2(null)
            setgalleryimage3(null)
        } catch (error) {
            // console.error('There was an error!', error);
            alert('Oops! Sorry, something went wrong.');
            console.log(error)
        }
    };

    return (
        <>
            <div className='welcome'>
                <h3>Add Project Listing in<b style={{ color: "red" }}>&nbsp;Risinginfra</b></h3>
            </div>
            <div className='forms-data'>
                <form>
                    <table style={{textAlign:"start"}}>
                        <tbody>
                            <tr className="td-data">
                                <td colSpan="2">Add New Project</td>
                            </tr>
                            {formsdata.map((item, index) => (
                                <tr key={index}>
                                    <td className='label1 labels'>{item.label}</td>
                                    <td className='label2'>
                                        {item.type === 'select' ? (
                                            <select value={item.value} onChange={item.onchange} className='labelsblogs-select'>
                                                {item.options.map((option, idx) => (
                                                    <option key={idx} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : item.type === 'checkbox' && item.label === 'Amenities*' ? (
                                            item.options.map((option, idx) => (
                                                <label key={idx} className='checkbox'>
                                                    <input
                                                        type="checkbox"
                                                        value={option.value}
                                                        checked={amenties.includes(option.value)}
                                                        onChange={handleCheckboxChange}
                                                        className='checkbox2'
                                                    />
                                                    {option.label} <br />
                                                </label>
                                            ))
                                        ) : item.type === 'textarea' ? (
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                onChange={(newContent) => setcontent(newContent)}
                                            />
                                        ) : (
                                            <input
                                                type={item.type}
                                                value={item.type === 'checkbox' ? undefined : item.value}
                                                checked={item.type === 'checkbox' ? item.checked : undefined}
                                                onChange={item.onchange}
                                                placeholder={item.placeholder}
                                                required
                                                className='input'
                                            />
                                        )}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className='labels'>Featured Image*</td>
                                <td>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='labels'>Gallery Image1*</td>
                                <td>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange1}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='labels'>Gallery image 2*</td>
                                <td>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange2}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='labels'>Gallery image 3*</td>
                                <td>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange3}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='labels'>Floor Plan 1*</td>
                                <td>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange4}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='labels'>Floor Plan 2*</td>
                                <td>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange5}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='labels'>Floor Plan 3*</td>
                                <td>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange6}
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className='buttons' disabled={isbuttonsubmit} onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddProject;
