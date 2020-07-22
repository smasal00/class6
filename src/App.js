import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // componentWillUnMount

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // const getTodoHandle = (e) => {}
  function getTodoHandle(e) {
    setText(e.target.value);
  }

  function addTodoHandle() {
    setTodos([...todos, text]);
  }

  useEffect(() => {
    // componentDidUpdate
    console.log("update");
  });

  useEffect(() => {
    // componentDidMount
    // console.log("mount");
    const timer = setInterval(function () {
      alert("Hello");
    }, 3000);

    return () => {
      // console.log("clean up");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <input onChange={(e) => getTodoHandle(e)} />
      {/* {text} */}
      <button onClick={addTodoHandle}>Add</button>
      {todos.map((todo) => {
        return <div>{todo}</div>;
      })}
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;