import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const NewActivityForm = ({ addActivity, handleInputChange, newActivity }) => (
  <Form onSubmit={addActivity} className="form">
    <FormGroup>
      <Input
        value={newActivity}
        onChange={handleInputChange}
        placeholder="Enter new task"
      />
      <Button color="primary" type="submit" className="submitButton">
        Add
      </Button>
    </FormGroup>
  </Form>
);

export default NewActivityForm;
