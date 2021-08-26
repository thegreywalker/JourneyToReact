import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [formState, setFormState] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() 
        };

        props.onAddExpense(expenseData);
        setFormState(false);
    };

    const showForm = () => {
        setFormState(true);
    };
    const notShowForm = () => {
        setFormState(false);
    }

    return (
        <div className="new-expense">
            {!formState && <button onClick={showForm}>Add Expense</button>}

            {formState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm = {notShowForm}/>}
        </div>
    )
};
export default NewExpense;