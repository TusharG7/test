import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3004/api/categories")
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {categories.map((category) => {
        return (
          <Link to={`/categories/${category.name}`}>
            <div key={category._id}>{category.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
