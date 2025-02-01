import { useState } from "react"
import Map from "../../share/components/UIElements/Map.jsx";
import Modal from "../../share/components/UIElements/Modal";
import { NavLink } from "react-router-dom";



export default function PlaceItem({id, image, description, creatorId, coordinates, address, title}) {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  return (
    <>
      <Modal show={showMap} header={address} onCancel={closeMapHandler} footer={<button onClick={closeMapHandler} className="p-[0.5em] bg-[#5588a3] font-bold text-[#e8e8e8] rounded-[0.5rem]">CLOSE</button>}>
        <div>
          <Map center={coordinates} zoom={16}/>
        </div>
      </Modal>
      <li className="flex flex-col gap-[1em] items-center border-[0.1rem] rounded-[0.3rem] pb-[1em] bg-[#e8e8e8] border-[#00334e]"
          style={
              {
                  boxShadow: "0 3px 3px rgba(0, 0, 0, 0.15)",
              }
          }
      >
          <div className="w-full h-[10rem] sm:h-[15rem]">
              <img src={image} className="w-[100%] h-[100%] object-cover -z-20"/>
          </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="font-bold sm:text-[1.5rem]">{title}</h2>
          <h3 className="font-bold sm:text-[1.2rem]">{address}</h3>
          <p className="text-center sm:text-[1rem]">{description}</p>
        </div>
        <div className="flex gap-[1rem] flex-wrap">
          <button className="sm:text-[1rem] p-[0.6em] bg-[#00334e] text-[#e8e8e8] font-bold rounded-[0.5em] text-[0.5rem]" onClick={() => openMapHandler()}>VIEW ON MAP</button>
          <button className=" sm:text-[1rem] p-[0.6em] bg-[#00334e] text-[#e8e8e8] font-bold rounded-[0.5em] text-[0.5rem]" ><NavLink to={`/places/${id}`}>EDIT</NavLink></button>
          <button className=" sm:text-[1rem] p-[0.6em] bg-[#00334e] text-[#e8e8e8] font-bold rounded-[0.5em] text-[0.5rem]">DELETE</button>
        </div>
      </li>
    </>
  )
}
