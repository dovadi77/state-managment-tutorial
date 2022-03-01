import { selector } from "recoil";

export const todosStatSelector = (atom) =>
	selector({
		key: `${Math.floor(Math.random() * 10000)}-TodosStatSelector`,
		get: ({ get }) => {
			const todoList = get(atom);
			const totalNum = todoList.length;
			const totalCompletedNum = todoList.filter(
				(item) => item.isComplete
			).length;
			const totalUncompletedNum = totalNum - totalCompletedNum;
			const percentCompleted =
				totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

			return {
				totalNum,
				totalCompletedNum,
				totalUncompletedNum,
				percentCompleted,
			};
		},
	});
