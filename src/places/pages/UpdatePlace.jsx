import { useParams } from "react-router-dom";
import Input from "../../share/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../share/util/validator";
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


const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
    if (!identifiedPlace) 
        return (<div className="text-center">
                <h2>Could not find place!</h2>
        </div>);
    return (
        <form>
            <Input id="title" 
                    element="input" 
                    label="Title"
                    type="text"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid title."
                    onInput={() => {}}
                    content={identifiedPlace.title}
                    valid={true}                    
            />
            <Input id="description" 
                    element="textarea" 
                    label="Description"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid description (min. 5 characters)."
                    onInput={() => {}}
                    content={identifiedPlace.description}
                    valid={true}                    
            />
            <button disabled={true} type="submit">UPDATE PLACE</button>
        </form>

    );
};

export default UpdatePlace;