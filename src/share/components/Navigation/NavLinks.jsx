import { NavLink } from "react-router-dom";

const NavLinks = ({isMobile}) => {
    let clssName = "flex flex-col gap-[1em] justify-center items-center font-bold";
    if (!isMobile)
        clssName = "hidden sm:flex gap-[1em] items-center font-bold";
    return (<ul className={clssName}>
                <li>
                    <NavLink to="/">ALL USERS</NavLink>
                </li>
                <li>
                    <NavLink to="/u1/places">MY PLACES</NavLink>
                </li>
                <li>
                    <NavLink to="/places/new">ADD PLACE</NavLink>
                </li>
                <li>
                    <NavLink to="/auth">AUTHENTICATE</NavLink>
                </li>
            </ul>);
};
export default NavLinks