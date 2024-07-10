import React, { useEffect, useRef, useState } from 'react';
// import '../CSS/AddUserProject.css';
import JoditEditor from 'jodit-react';

const UserAddProject = (props) => {
    const [propertyTitle, setpropertyTitle] = useState('');
    const [category, setcategory] = useState('');
    const [projectType, setprojectType] = useState('');
    const [developer, setdeveloper] = useState('');
    const [city, setcity] = useState('');
    const [location, setlocation] = useState('');
    const [size, setsize] = useState('');
    const [price, setprice] = useState('');
    const [amenities, setamenities] = useState([]);
    const [overview, setoverview] = useState('');
    const [featuredproject, setfeaturedproject] = useState(false);
    const [prelease, setprelease] = useState(false);

    const editor = useRef(null);
    const [content, setcontent] = useState('');

    const handleCheckboxChange = (value) => {
        setamenities((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    useEffect(()=>{
        document.title = props.title
    })

    const [videoFile, setVideoFile] = useState(null);
    const [imageFile, setImageFile] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleVideoChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setImageFile(files);
        
        const newImagePreviews = [];
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews(prevPreviews => [...prevPreviews, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    };
    const handleDeleteImage = (index) => {
        setImageFile(prevFiles => prevFiles.filter((_, i) => i !== index));
        setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Video File:', videoFile);
        console.log('Image File:', imageFile);
    };

    const [sitelocation,setsitelocation] = useState('')

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
                { label: 'Commercial', value: 'commercial' },
                { label: 'Residential', value: 'residential' },
                {label:'Plots', value:'Plots'}
            ],
            onchange: (e) => setcategory(e.target.value),
        },
        {
            label: 'Project Type*',
            placeholder: 'Project Type',
            type: 'text',
            value: projectType,
            onchange: (e) => setprojectType(e.target.value),
        },
        {
            label: 'Developer*',
            placeholder: 'Developer',
            type: 'text',
            value: developer,
            onchange: (e) => setdeveloper(e.target.value),
        },
        {
            label: 'City*',
            type: 'select',
            value: city,
            options: [
                { label: 'Noida', value: 'Noida' },
                { label: 'Gurugram', value: 'Gurugram' }
            ],
            onchange: (e) => setcity(e.target.value),
        },
        {
            label: 'Location*',
            placeholder: 'Location',
            type: 'text',
            value: location,
            onchange: (e) => setlocation(e.target.value),
        },
        {
            label: 'Size*',
            placeholder: 'Size',
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
        },{
            type:"text",
            placeholder:"https://map.google.com",
            label:"Site Location*",
            name:'sitelocation',
            value: sitelocation,
            onchange:(e)=>setsitelocation(e.target.value)
        },
        {
            label: 'Amenities*',
            type: 'checkbox',
            value: amenities,
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
            onchange: handleCheckboxChange,
        },
        {
            label: 'Overview*',
            placeholder: 'Overview',
            type: 'textarea',
            value: overview,
            onchange: (e) => setoverview(e.target.value),
        },
        {
            label: 'Featured Project*',
            placeholder: 'Featured Project',
            type: 'radio',
            name: 'featuredproject',
            options: [
                { label: 'Yes', value: true },
                { label: 'No', value: false },
            ],
            checked: featuredproject,
            onchange: (value) => setfeaturedproject(value),
        },
        {
            label: 'Prelease*',
            type: 'radio',
            name: 'prelease',
            options: [
                { label: 'Yes', value: true },
                { label: 'No', value: false },
            ],
            checked: prelease,
            onchange: (value) => setprelease(value),
        }
    ];

    return (
        <>
            <div className='welcome'>
                <h3><b>Post Your Property now!</b></h3>
            </div>
            <div className='forms-data'>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr className="td-data">
                                <td colSpan="2">The following are the basic details we would require to make your property live.</td>
                            </tr>
                            {formsdata.map((item, index) => (
                                <tr key={index}>
                                    <td className='label1 labels-data'>{item.label}</td>
                                    <td className='label2'>
                                        {item.type === 'select' ? (
                                            <select value={item.value} onChange={item.onchange} className='selection'>
                                                {item.options.map((option, idx) => (
                                                    <option key={idx} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : item.type === 'radio' ? (
                                            item.options.map((option, idx) => (
                                                <label key={idx} className='checkbox label'>
                                                    <input
                                                        type="radio"
                                                        name={item.name}
                                                        value={option.value}
                                                        checked={item.checked === option.value}
                                                        onChange={() => item.onchange(option.value)}
                                                        className='checkbox2'
                                                        required
                                                    />
                                                    {option.label}
                                                </label>
                                            ))
                                        ) : item.type === 'checkbox' && item.label === 'Amenities*' ? (
                                            item.options.map((option, idx) => (
                                                <label key={idx} className='checkbox'>
                                                    <input
                                                        type="checkbox"
                                                        value={option.value}
                                                        checked={item.value.includes(option.value)}
                                                        onChange={(e) => item.onchange(e.target.value)}
                                                        className='checkbox2'
                                                        required
                                                    />
                                                    {option.label}  <br />
                                                </label>
                                            ))
                                        ) : item.type === 'textarea' ? (
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                onChange={newContent => setcontent(newContent)}
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
                                <td className='labels'>Video*</td>
                                <td>
                                    <input
                                        type="file"
                                        name="video"
                                        id="video"
                                        accept="video/*"
                                        onChange={handleVideoChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='labels'>Image*</td>
                                <td>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                required
                            />
                           {
                                imageFile.length > 0 && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        {imagePreviews.map((preview, index) => (
                                            <div key={index} style={{ position: 'relative', margin: '5px' }}>
                                                <img
                                                    src={preview}
                                                    alt={`Selected ${index}`}
                                                    style={{ width: '10em', height: '10em', cursor: 'pointer' }}EM
                                                    onClick={() => handleDeleteImage(index)}
                                                />
                                                <button
                                                    onClick={() => handleDeleteImage(index)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                        background: 'red',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '50%',
                                                        cursor: 'pointer',
                                                        padding:"10px"
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='buttons'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default UserAddProject;
