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
import { gql } from '@apollo/client';
import client from "./app/client";
class App extends Component {

  componentWillMount() {
    client.query({
      query: gql`
        {
          currencies {
            label
            symbol
          }
        }
      `,
    }).then(result => this.props.handleSetCurrency(result.data.currencies[0]));
  }
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
