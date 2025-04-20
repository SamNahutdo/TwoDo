import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setTasks: (state, action) => {
			state.tasks = action.payload;
		},

		toggleComplete: (state, action) => {
			const index = state.tasks.findIndex((todo) => todo.id === action.payload);
			state.tasks[index].completed = !state.tasks[index].completed;
		},

		setInput: (state, action) => {
			state.newInput = action.payload;
		},

		setNewTask: (state) => {
			if (!state.newInput) return;

			const newTask = {
				id: crypto.randomUUID(),
				name: state.newInput,
				completed: false,
			};

			state.tasks.push(newTask);
			state.newInput = "";
		},

		deleteTask: (state, action) => {
			const newState = state.tasks.filter((task) => task.id !== action.payload);
			state.tasks = newState;
		},

		clearCompleted: (state) => {
			const newState = state.tasks.filter((task) => !task.completed);
			state.tasks = newState;
		},
	},
});

export const {
	setTasks,
	toggleComplete,
	setInput,
	setNewTask,
	deleteTask,
	clearCompleted,
} = todoSlice.actions;

export const selectTodos = (state) => state.todos.tasks;
export const selectTasksLeft = (state) =>
	state.todos.tasks.filter((task) => !task.completed);

export const selectInput = (state) => state.todos.newInput;

export default todoSlice.reducer;
