import { Component } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Product from "./pages/Product";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route index path="/" element={<Category />} />
            <Route index path="/products/:productId" element={<Product />} />
            <Route index path="/cart" element={<Cart />} />
          </Routes>
        </div>
       
      </BrowserRouter>
    )
  }
}

export default App;
