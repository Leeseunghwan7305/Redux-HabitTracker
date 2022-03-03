import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { increase } from "../../modules/todos";
import styles from "./header.module.css";
const Header = () => {
  let dispatch = useDispatch();
  let [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.head}>
      <h1>HabitTracker</h1>
      <div>
        <input
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
          placeholder="내용을 입력해주세요"
        ></input>
        <button
          onClick={() => {
            dispatch(increase(input));
            setInput("");
            inputRef.current?.focus();
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default Header;
