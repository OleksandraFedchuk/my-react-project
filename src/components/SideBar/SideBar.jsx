import { useEffect } from "react";
import css from "./SideBar.module.css";

export default function SideBar({ onClose }) {
  useEffect(() => {
    const handlerCleanUp = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handlerCleanUp);

    return () => {
      document.removeEventListener("keydown", handlerCleanUp);
    };
  }, [onClose]);

  return (
    <div className={css.wrapper}>
      <button className={css.closeButton} onClick={onClose}>
        Close
      </button>
      <p className={css.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatum culpa modi? Quaerat repellat sit error officia dolore?
        Suscipit nisi aliquam voluptates accusamus repellat illo expedita
        necessitatibus laudantium animi quo?
      </p>
    </div>
  );
}
