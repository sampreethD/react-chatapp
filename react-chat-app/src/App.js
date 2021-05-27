import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import Todo from "./todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, settodo] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    db.collection("react-app")
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => {
        settodo(
          snap.docs.map((doc) => {
            var docMessage = doc.data().message;
            var docId = doc.id;
            var docUser = doc.data().user;
            let chatObj = {
              message: docMessage,
              id: docId,
              user:docUser
            };
            return chatObj;
          })
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("react-app").add({
      message: input,
      user:localStorage.getItem('username'),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  const deleteMessage = (ind) => {
    db.collection("react-app").doc(ind).delete();
  };


  return (
    <div className="App">   
      <form className="form-placement">
        <FormControl style={{ width: "80%" }}>
          <InputLabel></InputLabel>
          <OutlinedInput
            variant="outlined"
            value={input}
            onChange={(event) => setinput(event.target.value)}
          />
        </FormControl>
        <Button
          style={{ margin: "0.5rem" }}
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </form>

      <ul style={{padding:"1rem"}}>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            ondeleteMessage={deleteMessage}
            index={todo.id}
            text={todo.message}
            user= {todo.user}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
