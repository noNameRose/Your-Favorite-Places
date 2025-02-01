import { createPortal } from "react-dom"

const Backdrop = ({onClick, reference}) => {
    return createPortal(<div className="fixed top-0 left-0 w-[100%] h-[100%] z-10"
                             style={{backgroundColor: "rgb(0,0,0,0.75)"}}
                             onClick={onClick}
                             ref={reference}
                        ></div>, document.getElementById("backdrop-hook"));
}

export default Backdrop;