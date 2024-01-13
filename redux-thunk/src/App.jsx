import { useState } from "react";
import './App.css'
import action_provider from './Components/Action'
import store from "./Components/Store";

function App() {
  const [data, setData] = useState([]);
  const [removeBtn, setRemoveBtn] = useState(false)

  store.subscribe(() => {
    const newData = store.getState().data.data;
    setData(newData);
    console.log(newData);
  });

  const fetchData = () => {
    store.dispatch(action_provider());
    setRemoveBtn(true)
  };

  const removeData = () => {
    setRemoveBtn(false)

    setData([]);
  };

  return (
    <div className="main">
      <div className="btn-container">
        <button className="btn" onClick={fetchData}>Fetch data</button>
        {removeBtn && (
          <button className="btn" onClick={removeData}>Remove data</button>
        )}

      </div>
      <div className="output">
        {data.map((item) => (
          <div className="box" key={item.id}>
            <li className="name">{item.name}</li>
            <li>{item.email}</li>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
