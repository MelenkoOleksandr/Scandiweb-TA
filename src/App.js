import { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch
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
          <Switch>
            <Route path="/:categoryName" >
              <Category />
            </Route>
            <Route path="/products/:productId" ><Product /></Route>
            <Route index path="/cart" ><Cart /></Route>
          </Switch>
        </div>

      </BrowserRouter>
    )
  }
}

export default App;
