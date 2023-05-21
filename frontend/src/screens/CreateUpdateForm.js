import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

import axios from "axios";

// CorP - CreateORUpdate    CorU - CreateORUpdate

const CreateUpdateForm = ({ Category, Product, Create, Update }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const params = useParams();
  const id = params.id;

  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (Category && Create) {
        await axios
          .post("http://localhost:3004/api/categories/addCategory", { name })
          .then(() => {
            history("/");
          });
      }
      if (Category && Update) {
        await axios
          .put(`http://localhost:3004/api/categories/${id}`, { name })
          .then(() => {
            history("/");
          });
      }
      if (Product && Create) {
        await axios
          .post(`http://localhost:3004/api/categories/${id}`, { name, price })
          .then(() => {
            history("/");
          });
      }
      if (Product && Update) {
        await axios
          .put(`http://localhost:3004/api/categories/products/${id}`, {
            name,
            price,
          })
          .then(() => {
            history("/");
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>
        {Update ? "Update  " : "Create  "}
        {Product ? "Product" : "Category"}
      </h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="py-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder={`Enter ${Product ? "Product" : "Category"} Name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {Product && (
          <Form.Group controlId="price" className="py-2">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
        )}

        <Button type="submit" variant="primary" className="my-2">
          {Update ? "Update" : "Create"}
        </Button>
      </Form>
      <Link to={`/`} className="ml-auto hover">
        Go Back
      </Link>
    </Container>
  );
};

CreateUpdateForm.defaultProps = {
  Product: false,
  Category: false,
  Create: false,
  Update: false,
};

export default CreateUpdateForm;
