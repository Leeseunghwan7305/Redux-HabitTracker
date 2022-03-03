import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/index";
import { decrease } from "../../modules/todos";
import styles from "./body.module.css";
import { toggle } from "../../modules/todos";
const Body = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className={styles.body}>
      {todos.map((item, i) => {
        return (
          <div key={i}>
            <p
              className={item.check ? styles.check : ""}
              onClick={() => {
                dispatch(toggle(item.id));
              }}
            >
              {item.text}
            </p>
            <button
              onClick={() => {
                dispatch(decrease(item.id));
              }}
            >
              삭제하기
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
