import { createPortal } from "react-dom";

const SideDrawer = ({reference, children}) => {
    const content = (<aside className="fixed 
                              left-0 
                              top-0 
                              z-100 
                              h-[100vh] 
                              w-[70%] 
                              bg-[#e8e8e8]
                              flex
                              items-center
                              justify-center"
                            ref={reference}
                    >
                                {children}
                    </aside>);
    return createPortal(content, document.getElementById("drawer-hook"))
};

export default SideDrawer;

