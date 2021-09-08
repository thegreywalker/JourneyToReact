import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid Input!',
                messege: 'Please enter a valid name & age (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age!',
                messege: 'Please enter a valid Age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge("");
        setEnteredUsername("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = ()=> {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal
                title={error.title}
                messege={error.messege}
                onConfirm={errorHandler}
            />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type="submit"> Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
