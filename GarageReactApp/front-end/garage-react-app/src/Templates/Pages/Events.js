import React, { useState,useEffect } from 'react';


const Event = ({name, location}) => {
  return(
    <div>
      <p>{name}</p>
      <p>{location}</p>
    </div>
  )}

function Events() {

  const [event, setEvent] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:4000/events-data');
    const data = await response.json();
    console.log(data);
    setEvent(data);
  }

  return (
    <div>
      <div>
        {event.map(event => (
          <Event 
            key={event.id}
            name={event.name} 
            location={event.location} 
          />
        ))}
        </div>
    </div>
  );
}

export default Events;