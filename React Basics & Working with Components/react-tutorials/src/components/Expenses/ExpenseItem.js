import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'



const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title); // This Way of writing COde in JavaScript is known as Array Destructuring ... Here we initialized the intial Value of the title as "props.title" also define a function which eventually is named setTitle which can be called to change the State of the Variable title and while the function is called the entire React Function Component ExpenseItem Component will re-render ... NOTE: This kinds of useState and Other Hooks in React must be written in the React Function Component/React Class Component directly and not anywhere else;

    const clickHandler = () => {
        setTitle('UPDATED!!')
        console.log(title);
    }; // You could use this naming convention ... whenever you will use a function in a on... property in the JSX Element then Consider ending the Variable Name with "Handler"
    
    return (
        // Now the data sent using attributes from the Components tags in the App.js file into this file we will access it using props pramas in the function above ... Now, since the data was sent using attributes so we will access the attributes as a property of Props like "props.name" etc ...
        <Card className ="expense-item">

            <ExpenseDate date={props.date}/>
            
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
