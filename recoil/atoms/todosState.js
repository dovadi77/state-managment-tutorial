import { atom } from "recoil";

export const todosState = atom({
	key: `${Math.floor(Math.random() * 10000)}-TodosState`,
	default: [],
});
