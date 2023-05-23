import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const getCategoriesData = async () => {
      const { data } = await axios.get("/api/categories/allCategories");
      console.log(data);
      setCategories(data);
    };
    getCategoriesData();
  }, []);

  const createHandler = (e) => {
    e.preventDefault();
    history("/categories/create");
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/categories/${id}`);
  };

  return (
    <>
      <Container className="justify-content-center p-2">
        <Row className="m-3">
          <Button onClick={(e) => createHandler(e)}>Create Category</Button>
        </Row>
        <h1 className="text-center">All Categories</h1>
        <hr />

        <Row>
          {categories.map((category) => {
            return (
              <Col md={6} lg={4} sm={12} key={category.id}>
                <Card className="my-3 p-3 rounded">
                  <Card.Body>
                    <Link to={`/categories/${category.id}/products/1`}>
                      <Card.Title as="div">
                        <strong>{category.name}</strong>
                      </Card.Title>
                    </Link>
                  </Card.Body>
                  <Button
                    variant="info"
                    onClick={() => history(`/categories/${category.id}`)}
                  >
                    edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(category.id)}
                  >
                    delete
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Categories;
