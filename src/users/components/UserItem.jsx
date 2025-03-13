import Avatar from "../../share/components/UIElements/Avatar.jsx";
import { Link } from "react-router-dom";

const UserItem = ({id, image, name, placeCount}) => {
    return (
        <li className="border-[0.2rem] border-[#5588a3] rounded-[0.5rem] px-[2em] py-[1em] bg-[#145374] ">
                <Link to={`/${id}/places`} className="flex justify-center gap-[2rem] items-center ">
                    <div className="w-[5rem] rounded-[full] h-auto">
                        <Avatar image={image} alt={name}/>
                    </div>
                    <div className="text-[#e8e8e8]">
                        <h2 className="font-bold">{name}</h2>
                        <h3 className="font-bold">{placeCount} {placeCount === 1 ? "Place" : "Places"}</h3>
                    </div>
                </Link>
        </li>
    );
};

export default  UserItem;