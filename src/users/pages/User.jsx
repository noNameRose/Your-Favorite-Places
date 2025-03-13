import { useEffect, useState } from "react";
import UserList from "../components/UserList";
import ErrorModal from "../../share/components/UIElements/ErrorModal";
import LoadingSpinner from "../../share/components/UIElements/LoadingSpinner";



const User = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadeUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/api/users/");
        const data = await response.json();
        if (!response.ok)
          throw new Error(data.message);
        setLoadedUsers(data.users);
      }
      catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler}/>
      {isLoading && <LoadingSpinner/>}
      {(!isLoading && loadeUsers) && <UserList items={loadeUsers}/>}
    </>
  )
};

export default User


