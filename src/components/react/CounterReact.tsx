import { useState } from "react";

export function CounterReact() {
  const [count, setCount] = useState<number>(100)

  return (
    <>
      <p>count now in react : {count}</p>

      <button onMouseDown={() => setCount((prev) => prev + 1)}>add count</button>
    </>
  )
}
