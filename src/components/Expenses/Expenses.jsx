import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";


  const Expenses = (props) => {

    const filterChangeHandler = (year) => {
      console.log(`year is ${year}`);
    };

    props.expenses.map((expense) => {
      console.log(expense);
    });

    return (
        <Card className="expenses">
          <ExpensesFilter onChangeFilter={filterChangeHandler} />
          {props.expenses.map((expense) => {
            return (
                <ExpenseItem expenseData={expense} key={expense.id}></ExpenseItem>
            );
          })}
        </Card>
    );
}

export default Expenses;
