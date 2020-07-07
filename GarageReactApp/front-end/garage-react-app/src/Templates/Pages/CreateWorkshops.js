import React, { useState,useEffect } from 'react';
import axios from 'axios';


const CreateWorkshops = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [description, setDescription] = useState("");
    const [dataSubmit, setDataSubmit] = useState("");

    let randId = parseInt(1000*Math.random());

    let workshopSubmit = {
        id: randId,
        name: name,
        location: location,
        dateStart: dateStart,
        dateEnd: dateEnd,
        description: description
    }

    const isFormEmpty = (form) =>{
        for(let i=0; i<Object.values(form).length; i++){
            if(Object.values(form)[i] === ''){
                return false
            }
        }
        return true
    }

    const getSubmit = e => {
        e.preventDefault();
        if(isFormEmpty(workshopSubmit)){
            axios.post('http://localhost:4000/workshops-data/add', workshopSubmit)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            setName('');
            setLocation('');
            setDateStart('');
            setDateEnd('');
            setDescription('');
        }
        else{
            alert("Please finish the form");
        }
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
    const onChangeDateStart = e => {
        setDateStart(e.target.value);
    }
    const onChangeDateEnd = e => {
        setDateEnd(e.target.value);
    }
    const onChangeDescription = e => {
        setDescription(e.target.value);
    }

    return (
        <div>
            <h3>Input workshop details below</h3>

            <form onSubmit={getSubmit} className="workshop-data-input">
                <p>name: </p><input className="workshop-name" type="text" onChange={onChangeName} /><br/>
                <p>location: </p><input className="workshop-location" type="text" onChange={onChangeLocation} /><br/>
                <p>starting date: </p><input className="workshop-date" type="date" onChange={onChangeDateStart} /><br/>
                <p>ending date: </p><input className="workshop-date" type="date" onChange={onChangeDateEnd} /><br/>
                <p>description: </p><input className="workshop-description" type="text" onChange={onChangeDescription} /><br />
                <button type="submit">submit</button><br />
            </form>
        </div>
    )}

export default CreateWorkshops;