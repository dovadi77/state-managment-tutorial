import { useRecoilValue } from "recoil";
import { todosStatSelector } from "../recoil/selectors/todosStatSelector";

export const TodosStats = ({ atom }) => {
	const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
		useRecoilValue(todosStatSelector(atom));

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
