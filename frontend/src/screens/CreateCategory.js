import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

import axios from "axios";

const CreateCategory = () => {
  const [name, setName] = useState("");

  const history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      axios.post("http://localhost:3004/api/categories/", { name }).then(() => {
        history("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Create Category</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="py-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-2">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default CreateCategory;
