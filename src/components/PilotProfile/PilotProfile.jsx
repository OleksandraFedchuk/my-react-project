// export default function PilotProfile(props){
// const { name, rank, age, spec } = props.pilot
import { BsAirplaneFill, BsBackpack2 } from "react-icons/bs";
import clsx from "clsx";
import css from "./PilotProfiole.module.css";

export default function PilotProfile({
  pilot: { name, rank, age, spec, active },
}) {
  const statusCslx = clsx(css.text, active ? css.active : css.retired);

  return (
    <div>
      <p className={css.text}>Name:{name}</p>
      <p className={css.text}>
        <BsAirplaneFill className={css.icon} />
        Rank:{rank}
      </p>
      <p className={css.text}>Age:{age}</p>
      <p className={css.text}>Speciality: {spec}</p>
      <p className={statusCslx}>
        <BsBackpack2 className={css.icon} />
        Active : {active ? "Active" : "Retired"}
      </p>
    </div>
  );
}
