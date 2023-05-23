import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "./screens/Categories";
import CreateUpdateForm from "./screens/CreateUpdateForm";
import Products from "./screens/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/categories/create"
          element={<CreateUpdateForm Category={true} Create={true} />}
          exact
        />
        <Route
          path="/categories/:id"
          element={<CreateUpdateForm Category={true} Update={true} />}
          exact
        />
        <Route
          path="/categories/:id/products/:pageNumber"
          element={<Products />}
          exact
        />
        <Route
          path="/categories/:id/products/:pageNumber/:productId"
          element={<CreateUpdateForm Product={true} Update={true} />}
          exact
        />
        <Route
          path="/categories/:id/products/:pageNumber/create"
          element={<CreateUpdateForm Product={true} Create={true} />}
          exact
        />
        <Route path="/" element={<Categories />} exact />
      </Routes>
    </Router>
  );
}

export default App;
