import { Route,Routes} from "react-router-dom"
import User from "./users/pages/User"
import NewPlace from "./places/pages/NewPlace"
import MainNavigation from "./share/components/Navigation/MainNavigation"
import MobileNav from "./share/components/Navigation/MobileNav"
import NavLinks from "./share/components/Navigation/NavLinks"
import UserPlaces from "./places/pages/UserPlaces"
import UpdatePlace from "./places/pages/UpdatePlace"
import Auth from "./places/pages/Auth.jsx"
import { AuthContext } from "./share/context/auth-context.jsx"
import { useCallback, useState } from "react"
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handlelogin = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const handlelogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (<>
          <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: handlelogin, logout: handlelogout}}>
            <MainNavigation/>
            <Routes> 
                <Route path="/" element={<User/>}/>
                <Route path="/places/new" element={<NewPlace/>}/>
                <Route path="/:userId/places" element={<UserPlaces/>}/>
                <Route path="/places/:placeId" element={<UpdatePlace/>}/>
                <Route path="/auth" element={<Auth/>}/>
            </Routes>
           </AuthContext.Provider>
          </>
  )
}

export default App