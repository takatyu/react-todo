import React from "react";

const getKey = () => Math.random().toString(32).substring(2)
function Todo() {
  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);
  return (
    <div className="panel">
      <div className="panel-heading">
        React Todo
      </div>
      {items.map(item => (
        <label className="panel-block">
          <input type="checkbox" />
          {item.text}
        </label>
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container is-fluid">
      <Todo />
    </div>
  );
}

export default App;
