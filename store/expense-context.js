import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2026-01-11"), // today
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2026-01-10"), // yesterday
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2026-01-09"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2026-01-08"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2026-01-06"),
  },

  // 🔽 Older expenses (for "All Expenses" screen)
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2025-12-05"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2025-11-28"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.99,
    date: new Date("2025-10-19"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 18.59,
    date: new Date("2025-09-18"),
  },
  {
    id: "e11",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-08-19"),
  },
  {
    id: "e12",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2025-07-05"),
  },
  {
    id: "e13",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2025-06-01"),
  },
  {
    id: "e14",
    description: "A book",
    amount: 14.99,
    date: new Date("2025-05-19"),
  },
  {
    id: "e15",
    description: "Another book",
    amount: 18.59,
    date: new Date("2025-04-18"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      return state.map((expense) =>
        expense.id === action.payload.id ? { ...expense, ...action.payload.data } : expense
      );
    default:
      return state;
  }
}

export default function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return <ExpenseContext value={value}>{children}</ExpenseContext>;
}
