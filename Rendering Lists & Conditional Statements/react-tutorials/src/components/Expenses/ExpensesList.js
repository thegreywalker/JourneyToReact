import React from "react";
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
    let expensescontent = <p>No Expenses Found</p>; // We can always bind JSX Code to JavaScript Variables in React ...

    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">
            Found No Expenses 
        </h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                );
            })}
        </ul>
    );
}
