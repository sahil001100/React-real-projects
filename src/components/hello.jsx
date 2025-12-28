import React from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function Button1({ onKeyUp }) {
  return (
    <button onKeyUp={onKeyUp} tabIndex="0">
      Press Me Up
    </button>
  );
}

function Button2({ onKeyDown }) {
  return (
    <button onKeyDown={onKeyDown} tabIndex="0">
      Press Down
    </button>
  );
}

function App() {
  const handleClick = () => alert("Button clicked!");
  const pressKey = () => alert("Button pressed up!");
  const pressDown = () => alert("Button pressed down!");

  return (
    <>
      <Button onClick={handleClick} />
      <Button1 onKeyUp={pressKey} />
      <Button2 onKeyDown={pressDown} />
    </>
  );
}

export default App;