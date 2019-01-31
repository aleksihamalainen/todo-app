import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Button } from "reactstrap";

const DisplayTodo = ({ activity, deleteActivity }) => {
  return (
    <ListGroup className="todos">
      <ListGroupItem>
        {activity.content}
        <Button
          color="danger"
          onClick={deleteActivity}
          id={activity.id}
          className="deleteButton"
        >
          Delete
        </Button>
      </ListGroupItem>
    </ListGroup>
  );
};

export default DisplayTodo;
