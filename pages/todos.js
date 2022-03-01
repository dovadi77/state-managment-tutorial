import { useRecoilValue } from "recoil";
import { todosState } from "../recoil/atoms/todosState";
import { TodoItemCreate } from "../component/TodoItemCreate";
import { TodoItem } from "../component/todoItem";
import { TodosStats } from "../component/TodosStats";
import { todosSelector } from "../recoil/selectors/todosSelector";
import styles from "../styles/Home.module.css";

const Todos = () => {
	const todoList = useRecoilValue(todosSelector(todosState));

	return (
		<div className={styles.container}>
			<TodosStats atom={todosState} />
			{/* <TodoListFilters /> */}
			<TodoItemCreate atom={todosState} />

			{todoList.map((todoItem) => (
				<TodoItem key={todoItem.id} item={todoItem} atom={todosState} />
			))}
		</div>
	);
};

export default Todos;
