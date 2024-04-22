import { useEffect, useState } from "react";

const ShopList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    console.log(text);
    const data = text;
    if (text) {
      setTodos((list) => [...list, text]);
      setText("");
    }
  };

  const deleteData = (i) => {
    let total = [...todos];
    total.splice(i, 1);
    setTodos(total)
  };
  return (
    <>
      <h1>Shopping List</h1>
      <div style={{marginBottom:"5px"}}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="button"
        style={{ marginLeft: "2px" }}
        onClick={handleSubmit}
        className="btn-add"
      >
        &nbsp;
        <b>Add</b>{" "}
      </button>
      </div>
      {todos.map((obj,i) => {
        return (
          <ul >
            {/* <li ></li> */}
            <li key={i}>
              {obj}{" "}
              <span>
                <button  className="btn-del" onClick={()=>deleteData(i)}>Delete Item</button>
              </span>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ShopList;
