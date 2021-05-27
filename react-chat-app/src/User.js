import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";

function Username() {
  const [username, setUsername] = useState('');
  const [input, setInput] = useState('');
  const addUser = (event) => {
    setUsername(input);
    localStorage.setItem('username', input);
  };
  return (
    <>
      <form>
        <FormControl style={{ width: "65%" }}>
          <InputLabel>Enter Username to join chat</InputLabel>
          <OutlinedInput
            variant="outlined"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          style={{ margin: "0.5rem" }}
          disabled={!input}
          type="submit"
          onClick={addUser}
          variant="contained"
          color="primary"
        >
          Add User
        </Button>
      </form>
    </>
  );
}

export default Username;
