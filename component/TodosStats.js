import { useRecoilValue } from "recoil";
import { todosState } from "../recoil/atoms/todosState";
import { todosStatSelector } from "../recoil/selectors/todosStatSelector";

export const TodosStats = ({ state }) => {
	const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
		state === undefined ? useRecoilValue(todosStatSelector(todosState)) : state;

	const formattedPercentCompleted = Math.round(percentCompleted);

	return (
		<div>
			<ul>
				<li>Total items: {totalNum}</li>
				<li>Items completed: {totalCompletedNum}</li>
				<li>Items not completed: {totalUncompletedNum}</li>
				<li>Percent completed: {formattedPercentCompleted}</li>
			</ul>
		</div>
	);
};
