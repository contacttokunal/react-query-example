import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/Auth/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
