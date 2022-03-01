import { useState } from "react";
import { useSetRecoilState } from "recoil";

export const TodoItemCreate = ({ atom }) => {
	const [text, setText] = useState("");
	const [priority, setPriority] = useState(0);
	const setTodoList = useSetRecoilState(atom);

	const addItem = () => {
		if (priority === 0) {
			return alert("Please choose the priority");
		}
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id: getId(),
				text: text,
				isComplete: false,
				priority: priority,
			},
		]);
		setText("");
		setPriority(0);
	};

	const onChangeDesc = ({ target: { value } }) => {
		setText(value);
	};

	const onChangePrio = ({ target: { value } }) => {
		setPriority(parseInt(value));
	};

	return (
		<div style={{ margin: "2em 0" }}>
			<div>
				<label>Description</label>
				<input type="text" value={text} onChange={onChangeDesc} />
			</div>
			<div>
				<label>Choose priority:</label>
				<select id="priority" onChange={onChangePrio} value={priority}>
					<option value="0">Priority</option>
					<option value="1">Low</option>
					<option value="2">Medium</option>
					<option value="3">High</option>
				</select>
			</div>
			<div>
				<button onClick={addItem}>Add</button>
			</div>
		</div>
	);
};

function getId() {
	return Math.floor(Math.random() * 100);
}
