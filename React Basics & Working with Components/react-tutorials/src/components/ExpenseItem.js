import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props) {
    
    return (
        // Now the data sent using attributes from the Components tags in the App.js file into this file we will access it using props pramas in the function above ... Now, since the data was sent using attributes so we will access the attributes as a property of Props like "props.name" etc ...
        <div className ="expense-item">

            <ExpenseDate date={props.date}/>
            
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
