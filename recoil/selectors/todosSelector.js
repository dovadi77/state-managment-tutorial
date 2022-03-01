import { selector } from "recoil";

const sortTodos = (todos) => {
	const todoList = [...todos];
	if (todos.length > 0) {
		return todoList.sort((a, b) =>
			a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
		);
	}
	return todoList;
};

export const todosSelector = (atom) =>
	selector({
		key: `${Math.floor(Math.random() * 10000)}-TodosSelector`,
		get: ({ get }) => {
			const todos = get(atom);
			return sortTodos(todos);
		},
	});
