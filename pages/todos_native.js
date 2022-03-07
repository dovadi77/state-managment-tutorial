import { useReducer } from "react";
import { TodoItemCreate } from "../components/TodoItemCreate";
import { TodoItem } from "../components/todoItem";
import { TodosStats } from "../components/TodosStats";
import styles from "../styles/Home.module.css";
import { initState, reducer } from "../reducers/todosReducer";

const Todos = () => {
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<div className={styles.container}>
			<TodosStats state={state} />
			<TodoItemCreate
				add={(value) => dispatch({ type: "add", value: value })}
			/>

			{state.todos.map((todoItem, index) => (
				<TodoItem
					key={todoItem.id}
					item={todoItem}
					index={index}
					edit={(index, value) =>
						dispatch({ type: "edit", index: index, value: value })
					}
					del={(index) => dispatch({ type: "delete", index: index })}
				/>
			))}
		</div>
	);
};

export default Todos;
