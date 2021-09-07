import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css"

const AddUser = (props) => {
    const [data, setData] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        setData ((prevState)=>{
            return [...event.target.value, prevState];
        })
       console.log(data);

    };
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler} value={data}>
                <label htmlFor="username" >Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" />
                <Button type="button"> Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
