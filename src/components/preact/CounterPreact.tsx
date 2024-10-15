import { useState } from "preact/hooks";

export function CounterPreact() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>count now in preact {count}</p>
      <button onMouseDown={() => setCount((prev) => prev + 1)}>
        add count
      </button>
    </>
  );
}
