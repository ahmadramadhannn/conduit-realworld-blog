import { createSignal } from "solid-js";

export const CounterSolid = () => {
  const [count, setCount] = createSignal(100)

  const increment = () => setCount(count() + 1)

  return (
    <>

      <p>count now in solid : {count()}</p>
      <button onMouseDown={increment}>add count</button>
    </>
  )
}
