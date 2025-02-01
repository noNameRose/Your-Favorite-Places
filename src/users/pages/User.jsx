import UserList from "../components/UserList";

const User = () => {
    const USERS = [{
        id: 'u1',
        name: "Kaneki Ken",
        image: "https://i.pinimg.com/736x/96/53/ed/9653ed1abdb4cce956828c211385d304.jpg",
        places: 3,
    }];
  return (
    <UserList items={USERS}>
    </UserList>
  )
};

export default User


