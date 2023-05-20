import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

import axios from "axios";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  //   const params = useParams();
  //   const [category_name, setCategoryName] = useState("");

  const history = useNavigate();

  const submitHandler = (e) => {
    // setCategoryName(params.name);
    e.preventDefault();

    try {
      axios
        .post("http://localhost:3004/api/categories/:name", { name, price })
        .then(() => {
          history(`/`);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Create Product</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="py-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="price" className="py-2">
          <Form.Label>Price </Form.Label>
          <Form.Control
            type="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-2">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProduct;
