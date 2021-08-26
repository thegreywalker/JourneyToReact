import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    // Now, this is a way with which we work on Multiple States in a single React Component ... As we know that React Works on the principle of individual State for individual Components ... But, here as we see that we are eventually changing the State of the same form ... so considering that the form is same we could eventually merge this Three States into one ... 

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // See how the Three States get Merged into One

    // const [userData, setUserData] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // Now since, we have Merged the Three States into One we will use the following way of using the function
        // setUserData({
        //     ...userData,
        //     enteredTitle: event.target.value,
        // })
        // Although, this is not the way we should do it ... As we know that React Schedules the Updates and not instantly Update it, so it might happen that it might provide you with the Outdated Previous State of the Variables applied in the seUserData function with Spread Operator ... To ensure we have the latest Snapshot of the Variables we will use this Syntax
    //     setUserData((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value};
    //     });
    };
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // As we saw that it's the default behaviour of the Browser to listen for an event on the whole form whenever a form is Submitted ... Now, there is a drawback of that ... Whenever a form is Submitted the Page Reloads as the Browser makes a request to the Server where the WebPage is Hoste, hence we add this default JavaScript method to avoid that default behaviour ... 

        // Now, we will get the Gathered Data from the form and store into the Array we will Create Here, 

        const expenseData = {
            title: enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle(''); // This concept here is also called Two-Way Binding in Forms ... which let's you add as well change the data while submitting the form ... This is done with the help of Value Property set to each state Variable of each Element ... and then as the submithandler gets called everytime we submit the form we then set the state of each of those state variable with the help of the State Functions in the submitHandler itself ... like you see here and below ...
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    };

    return ( 
        // Now, had we added an onSubmit event listener into my Button that's not the way we should do, as whenever a form get's submitted it's for the entire form for which the event will be listened ... Hence we directly add the onSubmit the Event Listener on the whole form itself ...
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;
