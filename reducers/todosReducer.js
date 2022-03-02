export const initState = {
	todos: [],
	totalNum: 0,
	totalCompletedNum: 0,
	totalUncompletedNum: 0,
	percentCompleted: 0,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			return calculateTodos(state, [...state.todos, action.value]);
		case "edit":
			return calculateTodos(
				state,
				sortTodos(replaceItemAtIndex(state.todos, action.index, action.value))
			);
		case "delete":
			return calculateTodos(
				state,
				removeItemAtIndex(state.todos, action.index)
			);

		default:
			return calculateTodos(state, sortTodos(state.todos));
	}
};

const sortTodos = (todos) => {
	const todoList = [...todos];
	if (todos.length > 0) {
		return todoList.sort((a, b) =>
			a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
		);
	}
	return todoList;
};

function replaceItemAtIndex(arr, index, newValue) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function calculateTodos(oldState, todos) {
	const todoList = [...todos];
	const totalNum = todoList.length;
	const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
	const totalUncompletedNum = totalNum - totalCompletedNum;
	const percentCompleted =
		totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

	return {
		todos,
		totalNum,
		totalCompletedNum,
		totalUncompletedNum,
		percentCompleted,
	};
}
