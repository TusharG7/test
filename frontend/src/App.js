import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "./screens/Categories";
import Products from "./screens/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/categories/:name" element={<Products />} exact />
        <Route path="/" element={<Categories />} exact />
      </Routes>
    </Router>
  );
}

export default App;
