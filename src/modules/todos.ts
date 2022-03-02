import { checkPrime } from "crypto";
import { createAction, ActionType, createReducer } from "typesafe-actions";

const INIT = "todos/INIT";
const REMOVE = "todos/REMOVE";
const ADD = "todos/ADD";
const CHECK = "todos/CHECK";

export const increase = createAction(ADD)<string>();
export const decrease = createAction(REMOVE)<number>();
export const toggle = createAction(CHECK)<number>();

const actions = { increase, decrease, toggle };

type TodosAction = ActionType<typeof actions>;
//함수 타입 정의

export type Todo = {
  text: string;
  id: number;
  check: boolean;
};

type TodosState = Todo[];

const initialState: TodosState | undefined = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD]: (state, { payload: text }) => {
    let arr = [...state];
    let id = Date.now();
    let check = false;
    arr.push({ text, id, check });
    return arr;
  },
  [REMOVE]: (state, { payload: id }) =>
    state.filter((item) => {
      return item.id !== id;
    }),
  [CHECK]: (state, { payload: id }) => {
    return state.map((item) =>
      item.id === id ? { ...item, check: !item.check } : item
    );
  },
});

export default todos;
