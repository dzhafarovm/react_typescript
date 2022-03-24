import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };

  const dropHAndler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dragWithPreventHAndler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <>
      <div>
        <input
          value={value}
          onChange={changeHandler}
          type="text"
          placeholder="управляемый"
        />

        <input ref={inputRef} type="text" placeholder="НЕ управляемый" />

        <button onClick={clickHandler}>Button</button>

        <div
          onDrag={dragHandler}
          draggable
          style={{ width: 150, height: 150, background: "tomato" }}
        ></div>

        <div
          onDrop={dropHAndler}
          onDragLeave={leaveHandler}
          onDragOver={dragWithPreventHAndler}
          style={{
            width: 150,
            height: 150,
            background: isDrag ? "teal" : "yellow",
            marginTop: 15,
          }}
        ></div>
      </div>
    </>
  );
};

export default EventsExample;
