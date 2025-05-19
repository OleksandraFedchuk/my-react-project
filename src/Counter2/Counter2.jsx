export default function Counter2({ value, onUpdate }) {
  return (
    <div>
      <button onClick={onUpdate}>Click:{value}</button>
    </div>
  );
}
