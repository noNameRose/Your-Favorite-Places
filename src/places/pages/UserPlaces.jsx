import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

import { useHttpClient } from '../../share/hooks/http-hooks';
import ErrorModal from '../../share/components/UIElements/ErrorModal';
import LoadingSpinner from '../../share/components/UIElements/LoadingSpinner';

export default function UserPlaces() {
    const [loadePlaces, setLoadedPlaces] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const userId = useParams().userId;
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const data = await sendRequest(`http://localhost:3000/api/places/user/${userId}`);
                setLoadedPlaces(data.places);
                console.log(data.places);
            }
            catch (err) {

            }
        };
        fetchPlaces();
    }, [sendRequest, userId])
    return (
        <>
            <ErrorModal error={error} onClear={clearError}/>
            {isLoading && <LoadingSpinner/>}
            {(!isLoading && loadePlaces) && <PlaceList items={loadePlaces}/>}
        </>
    )
}
