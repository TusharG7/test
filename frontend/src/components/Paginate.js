import React from "react";
import { Container, Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";

const Paginate = ({ pages, page }) => {
  const params = useParams();

  console.log(pages);
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <>
            <LinkContainer key={x + 1} to={`${x + 1}`}>
              <Pagination.Item>{x + 1}</Pagination.Item>
            </LinkContainer>
          </>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
