import React from 'react'
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [{
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world",
    imageUrl: "https://i.pinimg.com/736x/ef/b8/c5/efb8c5bc88e42b13d2b2c73fa76c6c30.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
        lat: 40.769117,
        lng: -73.915924,
    },
    creator: "u1",
}, {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world",
    imageUrl: "https://i.pinimg.com/736x/c0/a1/ac/c0a1aca5b1c97ff79e6167fbbe9e55cd.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
        lat: 40.7484405,
        lng: -73.9882393,
    },
    creator: "u2",
}];


export default function UserPlaces() {
    const userId = useParams().userId;
    const loadPlaces  = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={DUMMY_PLACES}/>
    )
}
