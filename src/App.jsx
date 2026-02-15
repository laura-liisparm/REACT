import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import Expenses from "./components/Expenses/Expenses.jsx";
import {useState} from "react";

let fakeExpenses = [
  {
    id: "id1",
    date: new Date(2024, 10, 12),
    title: "new Book",
    price: 30.99,
  },
  {
    id: "id2",
    date: new Date(2026, 0, 1),
    title: "new Jeans",
    price: 30.99,
  },
  {
    id: "id3",
    date: new Date(2025, 6, 2),
    title: "new Dress",
    price: 25.29,
  },
  {
    id: "id4",
    date: new Date(2026, 1, 1),
    title: "new Phone",
    price: 300.99,
  },
]

function App() {

  const [expenses, SetExpenses] = useState(fakeExpenses);

  const addExpenseHandler = (expense) => {
    SetExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });

  }

  return (
      <>
        <div className="App">
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses expenses={expenses} />
        </div>
      </>
  )
}

export default App;
