import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Container, Row } from "react-bootstrap";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3004/api/categories/${params.name}`)
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, [params.name]);

  return (
    <>
      <Container>
        <Row className="m-5">
          <Link to={`/`} className="mr-auto hover">
            Go Back
          </Link>
          <Button>Create Product</Button>
        </Row>
        <h2>Product List :: {params.name}</h2>
        {products.map((product) => {
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

              <Button variant="info">edit</Button>
              <Button variant="danger">delete</Button>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Products;
