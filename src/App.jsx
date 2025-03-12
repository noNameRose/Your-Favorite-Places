import { Route,Routes} from "react-router-dom"
import User from "./users/pages/User"
import NewPlace from "./places/pages/NewPlace"
import MainNavigation from "./share/components/Navigation/MainNavigation"
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

  let routes;
  if (isLoggedIn) 
    routes = (<Routes>
                <Route path="/" element={<User/>}/>
                <Route path="/places/new" element={<NewPlace/>}/>
                <Route path="/:userId/places" element={<UserPlaces/>}/>
                <Route path="/places/:placeId" element={<UpdatePlace/>}/>
              </Routes>);
  else 
    routes = (<Routes>
                <Route path="/" element={<User/>}/>
                <Route path="/:userId/places" element={<UserPlaces/>}/>
                <Route path="/auth" element={<Auth/>}/>
              </Routes>
              );
  return (<>
          <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: handlelogin, logout: handlelogout}}>
            <MainNavigation/>
            {routes}
           </AuthContext.Provider>
          </>
  )
}

export default App