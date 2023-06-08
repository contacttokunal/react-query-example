import "./App.css";
import { useReducer } from "react";
import tasksReducer from "./state-management/reducers/tasksReducers";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
