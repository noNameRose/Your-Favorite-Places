import mapboxgl from 'mapbox-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
import { useRef, useEffect} from 'react';

const Map =({center, zoom}) => {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoibm92ZW1icmUyIiwiYSI6ImNtNTdmd2ljdDJqeTkyaXB3enZvYTY2eDcifQ.xs9duwo5VVYHxIS8KIt3SQ'
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          center: [center.lng, center.lat],
          zoom: 16,
        });
    
        return () => {
          mapRef.current.remove()
        }
      }, []);

    return (<div  className="w-full h-[15rem] rounded-[0.5rem]" ref={mapContainerRef}>
            </div>);
};

export default Map