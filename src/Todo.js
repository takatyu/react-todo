import React from "react";

const getKey = () => Math.random().toString(32).substring(2)

// Todoコンポーネント
function Todo() {
  // フィルタリング

  // TODO 初期値
  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);

  // チェックボックスのハンドラ
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems)
  };

  // Todo追加ハンドラ
  const handleAdd = text => {
    setItems([...items, {key: getKey(), text, done: false}]);
  };

  // Todoリスト・追加入力フィールド 出力返却
  return (
    <div className="panel">
      <div className="panel-heading">
        React Todo
      </div>
      {items.map(item => (
        <TodoItem key={item.key} item={item} onCheck={handleCheck}/>
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
      <Input onAdd={handleAdd} />
    </div>
  );
}

// TodoItemコンポーネント
function TodoItem({ item, onCheck }) {
  const handleChage = () => {
    onCheck(item);
  };
  return (
    <label className="panel-block">
      <input
        type="checkbox" 
        checked={item.done} 
        onChange={handleChage}
      />
      <span className={item.done ? 'has-text-grey-light' : ''} >
        {item.text}
      </span>
    </label>
  );
}

function Input({ onAdd }) {
  const [text, setText] = React.useState('');
  // onChange Event
  const handleChage = e => setText(e.target.value);
  // KeyDown Event
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onAdd(text);
      setText('');
    }
  };

  // return Element
  return (
    <div className="panel-block">
      <input 
        class="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChage}
        onKeyDown={handleKeyDown}
      />
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
