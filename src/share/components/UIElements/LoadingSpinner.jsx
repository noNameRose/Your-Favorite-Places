const LoadingSpinner = props => {
    return (
        <div className="h-full 
                        w-full 
                        absolute 
                        top-0 
                        left-0 
                        bg-[rgba(255,255,255,0.9)]
                        flex
                        justify-center
                        items-center
                        ">
            <div 
                    style={
                        {
                            width: "64px",
                            height: "64px",
                            display: "inline-block"
                        }
                    }
            >
                <div className="block w-[46px] h-[46px] m-[1px] animate-spin"
                    style={
                        {
                            border: "5px solid #00334e",
                            borderRadius: "50%",
                            borderColor: "#00334e transparent #00334e transparent",
                        }
                    }
                ></div>
            </div>
        </div>
    );
}

export default LoadingSpinner