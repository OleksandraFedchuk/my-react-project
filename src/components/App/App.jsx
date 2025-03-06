// src/App.jsx
import PilotList from "../PilotList/PilotList";
import officers from "../../officers.json";
import css from "./App.module.css";
import AppBar from "../AppBar/AppBar";

const ActiveOfficers = officers.filter((officer) => officer.active);
const YoungOfficerws = officers.filter((officer) => officer.age < 40);

export default function App() {
  return (
    <div>
      <h1 className={css.title}>Officers : Active and Young</h1>
      <h2>Active officers</h2>
      <App />
      <PilotList items={ActiveOfficers} />
      <h2>Young Officer</h2>
      <PilotList items={YoungOfficerws} />
      <AppBar />
      <PilotList items={officers} />
    </div>
  );
}
