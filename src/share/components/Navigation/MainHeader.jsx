const MainHeader = ({children}) => {
  return (
    <header className="bg-[#00334e] text-[#e8e8e8] flex justify-around max-w-[100vw] mx-auto p-[1em]">
        {children}
    </header>
  )
};

export default MainHeader;
