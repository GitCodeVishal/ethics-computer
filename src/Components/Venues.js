import React from 'react';
import { useNavigate } from 'react-router-dom';
import platinum from '../images/platinum.jpg';
import stellar from '../images/stellar.jpg';
import carnival from '../images/carnival.jpg';
import amigos from '../images/amigos.jpg';
import scarlet from '../images/scarlet.jpg';
import majestic from '../images/majestic.jpg';
import '../styles/Venues.css';

const Venues = () => {

    const navigate = useNavigate();
  
    const handleCheckSlots = (venueId) => {
      
      const dynamicURL = `/venue/${venueId}`;
      navigate(dynamicURL);
    };

  const venuesData = [
    {
      id: 1,
      name: 'Platinum Theatre',
      image: platinum,
      pricing: '₹2799 for 6 or less people\n(Rs 400 per extra person)',
      availability: '3 slots available on 24-01-2024',
      capacity: '2-10 people',
    },
    {
      id: 2,
      name: 'Majestic Theatre',
      image: majestic,
      pricing: '₹2699 for 6 or less people\n(Rs 400 per extra person)',
      availability: '2 slots available on 24-01-2024',
      capacity: '2-10 people',
    },
    {
      id: 3,
      name: 'Stellar Theatre',
      image: stellar,
      pricing: '₹1799 for 4 or less people\n(Rs 400 per extra person)',
      availability: '1 slots available on 24-01-2024',
      capacity: '2-10 people',
    },
    {
      id: 4,
      name: 'Carnival Theatre',
      image: carnival,
      pricing: '₹1899 for 4 or less people\n(Rs 400 per extra person)',
      availability: '4 slots available on 24-01-2024',
      capacity: '2-10 people',
    },
    {
      id: 5,
      name: 'Amigos Theatre',
      image: amigos,
      pricing: '₹1699 for 4 or less people\n(Rs 400 per extra person)',
      availability: '1 slots available on 24-01-2024',
      capacity: '2-4 people',
    },
    {
      id: 6,
      name: 'Scarlet Theatre(Couple)',
      image: scarlet,
      pricing: '₹1499 for 2 people(Decorations Mandatory)',
      availability: '2 slots available on 24-01-2024',
      capacity: '2 people only',
    },
  ];

  return (
   
      <div className="venues-container">
        <p>Choose your theater at Hitec city</p>
        <div className="transparent-box">
          {venuesData.map((venue) => (
            <div className="venue-box" key={venue.id}>
              <img src={venue.image} alt={venue.name} />
              <h2>{venue.name}</h2>
              <h3>{venue.pricing}</h3>
              <p className={`availability ${parseInt(venue.availability) >= 3 ? 'green' : 'orange'}`} >
                {venue.availability}
              </p>
              <button className="check-slots-button">Check Slots</button>
              <p className="capacity">{venue.capacity}</p>
            </div>
          ))}
          <button className="centered-button">JOIN WAITLIST</button>
        </div>
      </div>
  );
};

export default Venues;
