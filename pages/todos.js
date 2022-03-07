import { useRecoilValue } from "recoil";
import { todosState } from "../recoil/atoms/todosState";
import { TodoItemCreate } from "../components/TodoItemCreate";
import { TodoItem } from "../components/todoItem";
import { TodosStats } from "../components/TodosStats";
import { todosSelector } from "../recoil/selectors/todosSelector";
import styles from "../styles/Home.module.css";

const Todos = () => {
	const todoList = useRecoilValue(todosSelector(todosState));

	return (
		<div className={styles.container}>
			<TodosStats />
			<TodoItemCreate />

			{todoList.map((todoItem, index) => (
				<TodoItem key={todoItem.id} item={todoItem} index={index} />
			))}
		</div>
	);
};

export default Todos;
