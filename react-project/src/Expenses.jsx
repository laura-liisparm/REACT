import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {}
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expenseData={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
