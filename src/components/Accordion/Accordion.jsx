import { useState } from "react";
import css from "./Accordion.module.css";

export default function Accordion({ items }) {
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  const changeIndex = (value) => {
    setSelectedIndex(SelectedIndex === value ? -1 : value);
  };

  return (
    <div className={css.container}>
      {items.map((item, index) => (
        <div key={index} className={css.item}>
          <button className={css.button} onClick={() => changeIndex(index)}>
            {item.title}
          </button>
          {index === SelectedIndex && (
            <div className={css.content}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
