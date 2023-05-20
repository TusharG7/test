import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container, Row } from "react-bootstrap";

import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const history = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3004/api/categories/${params.name}`)
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, [params.name]);
  const deleteHandler = (product_id) => {
    try {
      axios
        .delete(
          `http://localhost:3004/api/categories/${params.name}`,
          product_id
        )
        .then(({ data }) => setProducts(data))
        .catch((err) => console.log(err));
      console.log("product deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row className="m-5">
          <Link to={`/`} className="mr-auto hover">
            Go Back
          </Link>
          <Button onClick={(e) => history("create")}>Create Product</Button>
        </Row>
        <h2>Product List :: {params.name}</h2>
        {products &&
          products.map((product) => {
            return (
              <Card className="my-3 p-3 rounded">
                <Card.Body>
                  <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                      <strong>{product.name}</strong>
                    </Card.Title>
                  </Link>

                  <Card.Text as="h3">${product.price}</Card.Text>
                </Card.Body>

                <Link to={`/${product.name}/edit`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(product._id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </Card>
            );
          })}
      </Container>
    </>
  );
};

export default Products;
