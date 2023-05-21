import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const history = useNavigate();
  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get(`/api/categories/${params.id}`);
      console.log(data[0].product);
      setProducts(data[0].product);
    };
    getProductsData();
  }, []);
  const handleDelete = (product_id) => {
    try {
      axios
        .delete(`http://localhost:3004/api/categories/products/${product_id}`)
        .catch((err) => console.log(err));
      console.log("product deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className=" p-3">
        <Row className="auto">
          <Button onClick={() => history("create")}>Create Product</Button>
        </Row>

        <h1 className="text-center">Products</h1>
        <hr />
        <Link to={`/`} className=" hover">
          Go Back
        </Link>

        <Row>
          {products &&
            products.map((product) => {
              return (
                <Col md={6} lg={4} sm={12} key={product.id}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Body>
                      <Card.Title as="div">
                        <strong>{product.name}</strong>
                      </Card.Title>
                    </Card.Body>
                    <Button
                      variant="info"
                      onClick={() => history(`/${product.id}`)}
                    >
                      edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      delete
                    </Button>
                  </Card>
                </Col>

                // <Card className="my-3 p-3 rounded">
                //   <Card.Body>
                //     <Link to={`/product/${product._id}`}>
                //       <Card.Title as="div">
                //         <strong>{product.name}</strong>
                //       </Card.Title>
                //     </Link>

                //     <Card.Text as="h3">${product.price}</Card.Text>
                //   </Card.Body>

                //   <Link to={`/${product.name}/edit`}>
                //     <Button variant="light" className="btn-sm">
                //       <i className="fas fa-edit"></i>
                //     </Button>
                //   </Link>
                //   <Button
                //     variant="danger"
                //     className="btn-sm"
                //     onClick={() => deleteHandler(product.id)}
                //   >
                //     <i className="fas fa-trash"></i>
                //   </Button>
                // </Card>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Products;
