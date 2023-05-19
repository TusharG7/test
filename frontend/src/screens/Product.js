import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3004/api/categories/${params.name}`)
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:3004/api/categories/${params.name}`)
  //       .then(({ data }) => setProducts(data))
  //       .catch((err) => console.log(err));
  //   }, [params.name]);

  return (
    <>
      <div style={{ display: "grid", justifyItems: "center" }}>
        <Link to={`/`} style={{ margin: "10px" }}>
          Go Back
        </Link>
        <Button style={{ margin: "10px" }}>Create Product</Button>
        <h2>Product List :: {params.name}</h2>
        {products.map((product) => {
          return (
            <Col>
              <Link to={`/product/${product.name}`} key={product._id}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="h3">${product.price}</Card.Text>
            </Col>
          );
        })}
      </div>
    </>
  );
};

export default Products;
