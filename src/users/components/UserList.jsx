import UserItem from "./UserItem";

const UserList = ({items}) => {
    console.log(items);
    if (items.length === 0) {
        return (<div className="text-center flex justify-center items-center">
                    <h2>No users found.</h2>
                </div>);
    }
    return (<ul className="flex w-[100%] mx-auto justify-center py-[2em] bg-[#00334e] flex-wrap items-center gap-[3rem]">
                {items.map(user => (<UserItem key={user.id} 
                                              id={user.id} 
                                              image={user.image} 
                                              name={user.name} 
                                              placeCount={user.places.length}
                                    />)
                )}
            </ul>)
};

export default UserList;