import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, setTasks } from "./app/todo/todoSlice";
import Input from "./components/Input";
import Sort from "./components/Sort";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";
import "./style/App.scss";

function App() {
	const [sort, setSort] = useState({
		All: true,
		Active: false,
		Completed: false,
	});

	const allTasks = useSelector(selectTodos);
	if (!allTasks) return;
	const activeTasks = allTasks.filter((task) => !task.completed);
	const completedTasks = allTasks.filter((task) => task.completed);

	const tasks = sort.All
		? allTasks
		: sort.Active
		? activeTasks
		: completedTasks;

	return (
		<div className="container">
			<h1>TODO</h1>
			<Input />
			<div className="todo-container">
				<TodoList tasks={tasks} />
				<TodoFooter setSort={setSort} sort={sort} activeTasks={activeTasks} />
			</div>
		</div>
	);
}

export default App;
