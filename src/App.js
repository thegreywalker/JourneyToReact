import React, { useState } from "react";
import UsersList from "./Components/Users/UsersList";
import AddUser from "./Components/Users/AddUser";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevState) => {
            return [
                ...prevState,
                { name: userName, age: userAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
