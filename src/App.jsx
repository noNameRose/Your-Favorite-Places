import { Route,Routes} from "react-router-dom"
import User from "./users/pages/User"
import NewPlace from "./places/pages/NewPlace"
import MainNavigation from "./share/components/Navigation/MainNavigation"
import MobileNav from "./share/components/Navigation/MobileNav"
import NavLinks from "./share/components/Navigation/NavLinks"
import UserPlaces from "./places/pages/UserPlaces"
import UpdatePlace from "./places/pages/UpdatePlace"
const App = () => {
  return (<>
          <MainNavigation/>
           <Routes> 
              <Route path="/" element={<User/>}/>
              <Route path="/places/new" element={<NewPlace/>}/>
              <Route path="/:userId/places" element={<UserPlaces/>}/>
              <Route path="/places/:placeId" element={<UpdatePlace/>}/>
           </Routes>
          </>
  )
}

export default App