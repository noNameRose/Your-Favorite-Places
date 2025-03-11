import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
const NavLinks = ({isMobile}) => {
    let clssName = "flex flex-col gap-[1em] justify-center items-center font-bold";
    if (!isMobile)
        clssName = "hidden sm:flex gap-[1em] items-center font-bold gap-[3rem]";
    const auth = useContext(AuthContext);

    return (<ul className={clssName}>
                <li>
                    <NavLink to="/">All Users</NavLink>
                </li>
                {auth.isLoggedIn && (<li>
                                        <NavLink to="/u1/places">My Places</NavLink>
                                    </li>)
                }
                {auth.isLoggedIn && (<li>
                                        <NavLink to="/places/new">Add Place</NavLink>
                                    </li>)
                }
                {!auth.isLoggedIn && (<li>
                                        <NavLink to="/auth">Login</NavLink>
                                      </li>)
                }
                {auth.isLoggedIn && (
                    <li>
                        <button onClick={auth.logout}>Logout</button>
                    </li>
                )}
            </ul>);
};
export default NavLinks