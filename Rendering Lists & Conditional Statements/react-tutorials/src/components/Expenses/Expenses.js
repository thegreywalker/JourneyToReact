import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState("2020");

    const extractChangedYear = (changedYear) => {
        setfilteredYear(changedYear);
    };

    const filteredExpenses = props.listData.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        // This Section accepts data from the App.js file and then uses it in the ExpenseItem Components with the help of Props
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangedValue={extractChangedYear}
                />
                {/* {filteredExpenses.length === 0 ? (
                <p>No Expenses Found </p>
            ) : (
                filteredExpenses.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    );
                })
            )} */}
                {/* It might Happen that this long ternary Expression are not that readable in that case we could go for && operator ... The && Operator simply Checks for the Condition is true or not and based on that it will either execute the Expression after && or do nothing ... Ex .*/}

                {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>} 
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    );
                })} */}

                {/* Note the Upper Part just checks if the length of the filteredExpenses Array is 0 or not if the condition is true then it shows the p tag content else does nothing ... But only writing this won't show anything even if we encounter an array subset where the length is not zero for that we wrote the second block ... */}

                {/* Now, even this kinds of expression could ve tedious to write so we have a other way to Output Data on Conditions ... JSX does not suopport if & else conditions inside this blocks but we can obviously do some tweaking like this ... */}
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    );
};

export default Expenses;
