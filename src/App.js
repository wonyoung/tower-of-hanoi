import React, { useState } from "react";
import solveHanoi from "./solveHanoi";
import "./App.css";

function createTower(n) {
  return [...Array(n)].map((_, i) => n - i);
}

function createTowers(h) {
  return [createTower(h), [], []];
}

function move(blocks, from, to) {
  blocks[to].push(blocks[from].pop());
  return [...blocks];
}

function Block({ value, ...props }) {
  return (
    <div {...props} className="hanoi-block" style={{ width: value * 24 }}></div>
  );
}

function Bottom({ index, ...props }) {
  return (
    <>
      <div className="hanoi-bottom"></div>
      <div className="hanoi-desc">{index}</div>
    </>
  );
}

function HanoiTower({ blocks, ...props }) {
  const height = blocks.reduce((acc, l) => acc + l.length, 0);
  const xs = [...Array(blocks.length)].map((_, x) => {
    const h = blocks[x].length;
    return (
      <div key={x} className="hanoi-block-container">
        {[...Array(height)].map((_, y) => {
          const idx = height - y - 1;
          return <Block key={idx} value={idx < h ? blocks[x][idx] : 0} />;
        })}
        <Bottom index={x + 1} />
      </div>
    );
  });
  return <div className="hanoi-container">{xs}</div>;
}

function Solutions({ value, cursor, ...props }) {
  return (
    <div {...props}>
      {value.map(({ num, from, to }, i) => (
        <div
          key={i}
          className={i === cursor ? "sol-highlight" : "sol-normal"}
        >{`${num} : ${from} --> ${to}`}</div>
      ))}
    </div>
  );
}

function App() {
  const initialBlockNum = 3;
  const [blocks, setBlocks] = useState(createTowers(initialBlockNum));
  const [cursor, setCursor] = useState(0);
  const [solution, setSolution] = useState(solveHanoi(initialBlockNum));

  const handleInputNum = e => {
    if (e.keyCode === 13) {
      const num = Number(e.target.value);
      if (!isNaN(num) && num < 11) {
        const blks = createTowers(num);
        setBlocks(blks);
        setCursor(0);
        setSolution(solveHanoi(num));
      }
      e.target.value = "";
    }
  };

  const handleLeft = e => {
    if (cursor > 0) {
      const { from, to } = solution[cursor - 1];
      setBlocks(move(blocks, to - 1, from - 1));
      setCursor(cursor - 1);
    }
  };
  const handleRight = e => {
    if (cursor < solution.length) {
      const { from, to } = solution[cursor];
      setBlocks(move(blocks, from - 1, to - 1));
      setCursor(cursor + 1);
    }
  };
  return (
    <div className="App">
      <div className="App-header">Tower of Hanoi</div>
      <div className="App-body">
        <HanoiTower blocks={blocks} />
      </div>
      <div className="App-tail">
        <div>
          Height : <input onKeyDown={handleInputNum} />
        </div>
        <div>
          {`Move `}
          <button onClick={handleLeft}>{"<"}</button>
          <button onClick={handleRight}>{">"}</button>
        </div>
        <Solutions value={solution} cursor={cursor} />
      </div>
    </div>
  );
}

export default App;
