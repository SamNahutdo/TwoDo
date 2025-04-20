import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, setInput, setNewTask } from "../app/todo/todoSlice";

function Input({ setLocalTasks }) {
	const [message, setMessage] = useState("");
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const currentMessage = e.target.value;
		setMessage(currentMessage);
		dispatch(setInput(currentMessage));
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			dispatch(setNewTask());
			setMessage("");
		}
	};

	return (
		<div className="add-new">
			<input
				placeholder="Create a new todo..."
				onChange={handleOnChange}
				onKeyDown={handleKeyDown}
				type="text"
				className="input-todo"
				value={message}
			/>
		</div>
	);
}

export default Input;
