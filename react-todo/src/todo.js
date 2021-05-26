import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Todo(props) {
  const handleDelete = () => {
    props.ondeleteMessage(props.index);
  };
  return (
    <div>
      <List>
        <ListItem style={{ border: "1px solid " }}>
          <span>{props.user}: &nbsp;</span>
          <ListItemText>{props.text}</ListItemText>
          <span style={{ cursor: "pointer" }} onClick={handleDelete}>
            delete
          </span>
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
