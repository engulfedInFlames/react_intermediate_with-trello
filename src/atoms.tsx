import { atom, selector } from "recoil";

export interface IToDoState {
  [key: string]: string[];
} // interface를 작성하지 않으면 TS는 toDoState의 state로 "toDo", "doing", "done"만을 인식한다. 즉, 그외 값(any)을 허용하지 않는다.

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "f"],
    Doing: ["c", "d"],
    Done: ["e"],
  },
});
