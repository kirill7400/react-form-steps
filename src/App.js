import './App.css';
import Add from "./components/Add";
import List from "./components/List";
import { useState } from "react";

function App() {
  let [data, setData] = useState([
    { date: '11.11.2011', passed: '1'},
    { date: '12.11.2011', passed: '56'},
    { date: '16.11.2011', passed: '45'},
    { date: '13.11.2011', passed: '45'}
  ])

  const add = (data) => {
    setData(prevState => {
      let token = false

      prevState.forEach(item => {

        if (item.date === data.date) {
          token = true
          console.log(item, Number(item.passed), Number(data.passed))
          item.passed = (Number(item.passed) + Number(data.passed)).toString()
        }
      })

      return token ? [...prevState] : [...prevState, data]
    })
  }

  const deleteItem = (i) => {
    setData(prevState => {
      console.log(prevState[i])
      prevState.splice(i, 1)
      return [...prevState]
    })
  }

  return (
    <div className="App">
      <Add add={ add }/>
      <List data={ data } deleteItem={ deleteItem }/>
    </div>
  );
}

export default App;
