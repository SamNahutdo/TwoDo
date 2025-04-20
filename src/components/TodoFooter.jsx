import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../app/todo/todoSlice";
import "../style/TodoFooter.scss";
import Sort from "./Sort";

function TodoFooter({ setSort, activeTasks, sort }) {
	const dispatch = useDispatch();
	const { width } = useWindowSize();
	const isMobile = width < 530;

	const sortComponent = () => (
		<Sort setSort={setSort} activeTasks={activeTasks} sort={sort} />
	);

	return (
		<div className="todo-footer">
			<div className="footer">
				<p>{activeTasks.length} items left</p>
				{!isMobile ? sortComponent() : null}
				<button onClick={() => dispatch(clearCompleted())}>
					Clear Completed
				</button>
			</div>
			{isMobile ? sortComponent() : null}
		</div>
	);
}

export default TodoFooter;
