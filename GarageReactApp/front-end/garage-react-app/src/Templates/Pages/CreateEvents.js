import React, { useState,useEffect } from 'react';
import axios from 'axios';


const CreateEvents = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [dataSubmit, setDataSubmit] = useState("");

    let randId = parseInt(1000*Math.random());

    let eventSubmit = {
        id: randId,
        name: name,
        location: location,
        date: date,
        description: description
    }

    const getSubmit = e => {
        
        axios.post('http://localhost:4000/events-data/add', eventSubmit)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        console.log('This effect has ran');
    }, [dataSubmit]);

    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeLocation = e => {
        setLocation(e.target.value);
    }
    const onChangeDate = e => {
        setDate(e.target.value);
    }
    const onChangeDescription = e => {
        setDescription(e.target.value);
    }

    return (
        <div>
            <h3>Input event details below</h3>

            <form onSubmit={getSubmit} className="event-data-input" >
                <p>name: </p><input className="event-name" type="text" value={name} onChange={onChangeName} /><br/>
                <p>location: </p><input className="event-location" type="text" value={location} onChange={onChangeLocation} /><br/>
                <p>date: </p><input className="event-date" type="date" value={date} onChange={onChangeDate} /><br/>
                <p>description: </p><input className="event-description" type="text" value={description} onChange={onChangeDescription} /><br />
                <button type="submit">submit</button><br />
            </form>
        </div>
    
)}

export default CreateEvents;
