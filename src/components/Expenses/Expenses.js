import React, { useState } from 'react';

import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = year => {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

    return (
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}/>
      {/* {filteredExpenses.length === 0 && <p>No expense found.</p> }
      {filteredExpenses.length != 0 && (
        filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
              date={expense.date}
            />
          ))
        )
      } */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        />
        <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        />
        <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
    /> */}
    </Card>
  );
}

export default Expenses;