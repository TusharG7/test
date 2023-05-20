import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "./screens/Categories";
import Products from "./screens/Product";
import CreateCategory from "./screens/CreateCategory";
import CreateProduct from "./screens/CreateProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/categories/:name" element={<Products />} exact />
        <Route
          path="/categories/:name/create"
          element={<CreateProduct />}
          exact
        />
        <Route path="/" element={<Categories />} exact />
        <Route path="/categories/create" element={<CreateCategory />} exact />
      </Routes>
    </Router>
  );
}

export default App;
