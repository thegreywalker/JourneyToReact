import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    // const [filteredYear, setFilteredYear] = useState("2020"); // Used only when we want to manage the state of the Option here ... 

    const optionHandler = (event) => {
        // console.log(event.target.value);
        // props.onChangedValue(event.target.value);
        // setFilteredYear(() => {
        //     return event.target.value;
        // }); // In this Way we can define State of the Option here and pass it on the Parent Component ... Or we can pass the value directly and manage the state there ...
        props.onChangedValue(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={optionHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
