import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020');

    const extractChangedYear = (changedYear) => {
        setfilteredYear(changedYear);

        console.log("In-Expenses.js");
        console.log(changedYear);
    };
    return (
        // This Section accepts data from the App.js file and then uses it in the ExpenseItem Components with the help of Props

        <Card className="expenses">
            <ExpensesFilter selected = {filteredYear} onChangedValue={extractChangedYear}/>

            <ExpenseItem
                title={props.expense[0].title}
                amount={props.expense[0].amount}
                date={props.expense[0].date}
            />

            <ExpenseItem
                title={props.expense[1].title}
                amount={props.expense[1].amount}
                date={props.expense[1].date}
            />

            <ExpenseItem
                title={props.expense[2].title}
                amount={props.expense[2].amount}
                date={props.expense[2].date}
            />

            <ExpenseItem
                title={props.expense[2].title}
                amount={props.expense[2].amount}
                date={props.expense[2].date}
            />
        </Card>
    );
};

export default Expenses;
