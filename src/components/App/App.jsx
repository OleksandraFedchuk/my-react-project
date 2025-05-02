// src/App.jsx
import PilotList from "../PilotList/PilotList";
import ClickMouse from "../ClickMouse/ClickMouse";
import Accordion from "../Accordion/Accordion";
import ClickTracker from "../ClickTracker/ClickTracker";
import SideBar from "../SideBar/SideBar";
import Reader from "../Reader/Reader";
import officers from "../../officers.json";
import accordionitems from "../../accordionItems.json";
import articles from "../../articles.json";
import AppBar from "../AppBar/AppBar";
import css from "./App.module.css";
import { useState } from "react";

const ActiveOfficers = officers.filter((officer) => officer.active);
const YoungOfficerws = officers.filter((officer) => officer.age < 40);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openSideBar = () => setIsOpen(true);
  const closeSideBar = () => setIsOpen(false);

  return (
    <div>
      <h1 className={css.title}>Officers : Active and Young</h1>
      <h2>Active officers</h2>
      <button onClick={openSideBar}>Open</button>
      {isOpen && <SideBar onClose={closeSideBar} />}
      <ClickTracker />
      <Reader items={articles} />
      <ClickMouse />
      <ClickMouse text="Hi:" />
      <ClickMouse text="Hello:" />
      <ClickMouse text="Bonsoir:" />
      <PilotList items={ActiveOfficers} />
      <h2>Young Officer</h2>
      <PilotList items={YoungOfficerws} />
      <AppBar />
      <Accordion items={accordionitems} />
      <PilotList items={officers} />
    </div>
  );
}
