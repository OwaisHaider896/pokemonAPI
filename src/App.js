import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [move, setMove] = useState("");
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }
    getData();
  });

  return (
    <div className="App">
      <select
        onChange={(e) => setNum(e.target.value)}
        className="mt-2 w-40 p-1"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <h1 className="mt-4 text-2xl font-bold ">
        You Choose: <span style={{ color: "red" }}> {num}</span>{" "}
      </h1>
      <h1 className="mt-4 text-2xl font-bold ">
        My Name is :<span style={{ color: "red" }}> {name}</span>{" "}
      </h1>
      <h1 className="mt-4 text-2xl font-bold ">
        I have <span style={{ color: "red" }}>{move} moves</span>{" "}
      </h1>
    </div>
  );
}
