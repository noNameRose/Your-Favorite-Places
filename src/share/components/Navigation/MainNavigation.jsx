import MainHeader from "./MainHeader"
import { Link} from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Backdrop from "../UIElements/Backdrop";
import { useGSAP } from "@gsap/react";


const MainNavigation = ()=> {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const sideDrawerRef = useRef();
    const backDropRef = useRef();

    const openDrawer = () => {
        setIsDrawerOpen(true);
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }

    useGSAP(() => {
        const sideDrawer = sideDrawerRef.current;
        const backdrop = backDropRef.current;
    
        if (isDrawerOpen) {
            gsap.from(sideDrawer, {
                x: "-100%",
            });
            gsap.from(backdrop, {
                opacity: 0,
            });
        }
        else {
            gsap.set(sideDrawer, {
                x: "-100%"
            })
        }

    }, [isDrawerOpen])
    

    return (
        <>
            {isDrawerOpen && <Backdrop reference={backDropRef} onClick={closeDrawer}/>}
            {isDrawerOpen && (<SideDrawer reference={sideDrawerRef}>
                                <NavLinks isMobile={true}/>
                              </SideDrawer>)}
            <MainHeader>
                <button className="">
                    <h1 className="font-bold">
                        <Link to="/">YourPlaces</Link>
                    </h1>
                </button>
                <div>
                <NavLinks isMobile={false}/>
                </div>
                <svg width='2rem'
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 24 24" fill="rgba(232,232,232,1)" 
                     className="sm:hidden"
                     onClick={openDrawer}
                >
                    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                </svg>
            </MainHeader>
        </>
  )
};

export default MainNavigation
