import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Button } from "react-bootstrap";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/api/categories")
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row className="m-3">
        <Button>Create Category</Button>
      </Row>
      {categories.map((category) => {
        return (
          <Card className="my-3 p-3 rounded">
            <Card.Body>
              <Link to={`/categories/${category.name}`} key={category._id}>
                <Card.Title as="div">
                  <strong>{category.name}</strong>
                </Card.Title>
              </Link>
            </Card.Body>
            <Button variant="info">edit</Button>
            <Button variant="danger">delete</Button>
          </Card>
        );
      })}
    </Container>
  );
};

export default Categories;
