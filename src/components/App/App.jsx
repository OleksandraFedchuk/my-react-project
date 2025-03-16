// src/App.jsx
import PilotList from "../PilotList/PilotList";
import ClickMouse from "../ClickMouse/ClickMouse";
import Accordion from "../Accordion/Accordion";
import officers from "../../officers.json";
import AppBar from "../AppBar/AppBar";
import css from "./App.module.css";

const ActiveOfficers = officers.filter((officer) => officer.active);
const YoungOfficerws = officers.filter((officer) => officer.age < 40);

export default function App() {
  return (
    <div>
      <h1 className={css.title}>Officers : Active and Young</h1>
      <h2>Active officers</h2>
      <ClickMouse />
      <ClickMouse />
      <ClickMouse text="Hello:" />
      <PilotList items={ActiveOfficers} />
      <h2>Young Officer</h2>
      <PilotList items={YoungOfficerws} />
      <AppBar />
      <Accordion />
      <PilotList items={officers} />
    </div>
  );
}
