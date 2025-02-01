
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
const ModalOverLay = ({style, className, header, onSubmit, children, footer}) => {
    const content = (
        <div className="z-100 fixed top-[22vh] left-[10%] w-[80%] bg-[#e8e8e8] rounded-[0.5rem] border-[0.1rem] border-[#e8e8e8]">
            <header className="w-[100%] px-[1rem] py-[0.5rem] bg-[#5588a3] rounded-[0.5rem]">
                <h2 className="m-[0.5rem] text-center font-bold text-[#e8e8e8]">{header}</h2>
            </header>
            <form onSubmit={onSubmit ? onSubmit : event => event.preventDefault()}>
                <div className="px-[1rem] py-[0.5rem]">{children}</div>
            </form>
            <footer className="px-[1rem] py-[0.5rem]">
                {footer}
            </footer>
        </div>
    );
    return createPortal(content, document.getElementById("modal-hook"));
}


const Modal = (props) => {
    const {show, onCancel} = props;
    return (
            <>
                {show && <Backdrop onClick={onCancel}/>}
                {show && <ModalOverLay {...props}/>}
            </>)
}


export default Modal;