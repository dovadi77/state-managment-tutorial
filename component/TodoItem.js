import { useRecoilState } from "recoil";

export const TodoItem = ({ item, atom }) => {
	const [todoList, setTodoList] = useRecoilState(atom);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = ({ target: { value } }) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value,
		});

		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
	};

	const changePriorityItem = ({ target: { value } }) => {
		if (parseInt(value) !== 0) {
			const newList = replaceItemAtIndex(todoList, index, {
				...item,
				priority: parseInt(value),
			});

			setTodoList(newList);
		}
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	return (
		<div>
			<div>
				<label>Description</label>
				<input type="text" value={item.text} onChange={editItemText} />
			</div>
			<div>
				<label>Completed</label>
				<input
					type="checkbox"
					checked={item.isComplete}
					onChange={toggleItemCompletion}
				/>
			</div>
			<div>
				<label>Choose priority:</label>
				<select
					id="priority"
					onChange={changePriorityItem}
					value={item.priority}
				>
					<option value="1">Low</option>
					<option value="2">Medium</option>
					<option value="3">High</option>
				</select>
			</div>
			<div>
				<button onClick={deleteItem}>X</button>
			</div>
		</div>
	);
};

function replaceItemAtIndex(arr, index, newValue) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
