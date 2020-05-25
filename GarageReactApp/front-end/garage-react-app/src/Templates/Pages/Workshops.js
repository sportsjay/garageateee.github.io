import React, { useState,useEffect } from 'react';
import CreateWorkshops from './CreateWorkshops';

const Workshop = ({name, location}) => {
  return(
    <div> 
      <p>{name}</p>
      <p>{location}</p>
    </div>
  )}

function Workshops() {

  const [workshop, setWorkshop] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:4000/workshops-data');
    const data = await response.json();
    console.log(data);
    setWorkshop(data);
  }

  return (
    <div>
      <div>
        {workshop.map(workshop => (
          <Workshop 
            key={workshop.id}
            name={workshop.name}
            location={workshop.location}
          />
        ))}
      </div>
      <CreateWorkshops />
    </div>
  );
}

export default Workshops;

