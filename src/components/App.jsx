// src/App.jsx
import AppBar from "./AppBar";
import PilotList from "./PilotList";
import officers from "../officers.json";

const ActiveOfficers = officers.filter((officer) => officer.active);
const YoungOfficerws = officers.filter((officer) => officer.age < 40);

export default function App() {
  return (
    <div>
      <h1>Officers : Active and Young</h1>
      <h2>Active officers</h2>
      <PilotList items={ActiveOfficers} />
      <h2>Young Officer</h2>
      <PilotList items={YoungOfficerws} />
      <AppBar />
      <PilotList items={officers} />
    </div>
  );
}
