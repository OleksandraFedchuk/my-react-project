import { useEffect, useState } from "react";
import css from "./Reader.module.css";

export default function Reader({ items }) {
  // const [selectedInsex, setSelectedIndex] = useState(0);
  const [selectedInsex, setSelectedIndex] = useState(() => {
    const savedInsex = localStorage.getItem('"Key-index"');

    if (savedInsex === !null) {
      return JSON.parse(savedInsex);
    }
    return 0;
  });

  const currentArticle = items[selectedInsex];

  const handlerPrev = () => {
    setSelectedIndex(selectedInsex - 1);
  };

  const handlerNext = () => {
    setSelectedIndex(selectedInsex + 1);
  };

  useEffect(() => {
    console.log("localStorage.setItem", selectedInsex);
    localStorage.setItem("Key-index", JSON.stringify(selectedInsex));
  }, [selectedInsex]);

  const isFirstElement = selectedInsex === 0;
  const isLastElement = selectedInsex === items.length - 1;

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.controls}>
          <button
            className={css.button}
            onClick={handlerPrev}
            disabled={isFirstElement}
          >
            Prev
          </button>
          <button
            className={css.button}
            onClick={handlerNext}
            disabled={isLastElement}
          >
            Next
          </button>
        </div>
        <p className={css.progress}>
          {selectedInsex + 1}/{items.length}
        </p>
      </header>

      <article className={css.article}>
        <h2 className={css.title}>{currentArticle.topic}</h2>
        <p className={css.text}>{currentArticle.text}</p>
      </article>
    </div>
  );
}
