import { useRef, useState } from "react";

function Header() {
  const log = useRef(null);
  const [output, setOutput] = useState("");
  const [color, setColor] = useState("");

  function show() {
    if (log.current.value === "kim") {
      setOutput("login");
      setColor("green");
      setTimeout(() => {
        setOutput("");
      }, 2000);
    } else {
      setColor("red");
      setOutput("Not login");
      setTimeout(() => {
        setOutput("");
      }, 2000);
    }
    log.current.value = "";
  }

  return (
    <>
      <header>
        <button onClick={show}>click</button>
        <input ref={log} type="text" placeholder="add text"></input>
        <p style={{ color }}>{output}</p>
      </header>
    </>
  );
}
export default Header;
