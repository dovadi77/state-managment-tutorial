import { useRecoilState } from "recoil";
import { countState } from "../recoil/atoms/countState";

const Counter = () => {
	const [value, setValue] = useRecoilState(countState);

	const add = () => setValue(value + 1);
	const subtract = () => value !== 0 && setValue(value - 1);
	const clear = () => value !== 0 && setValue(0);
	return (
		<div>
			<div>Count: {value}</div>
			<button onClick={add}>+</button>
			<button onClick={subtract}>-</button>
			<button onClick={clear}>Clear</button>
		</div>
	);
};

export default Counter;
