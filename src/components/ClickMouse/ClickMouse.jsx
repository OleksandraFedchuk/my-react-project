import { useState } from "react";

export default function ClickMouse({ text = "Click:" }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {text}
        {clicks}
      </button>
    </div>
  );
}
