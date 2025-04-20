import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../app/todo/todoSlice";
import Todo from "./Todo";

function TodoList({ tasks }) {
	return (
		<ul className="todo-list">
			{tasks.map((task) => {
				return <Todo key={task.id} {...task} />;
			})}
		</ul>
	);
}

export default TodoList;
