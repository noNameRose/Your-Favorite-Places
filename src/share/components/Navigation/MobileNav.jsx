export default function MobileNav({children}) {
  return (
    <div className="fixed w-[100vw] bg-[#e8e8e8] h-[100vh] flex items-center justify-center text-[#00334e] sm:hidden -left-[100%]" id="mobile-nav-page">
      {children}
    </div>
  )
}
