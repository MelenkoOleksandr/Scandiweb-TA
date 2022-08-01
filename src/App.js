import { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import client from "./app/client";
import { GET_ALL_CURRENCIES } from "./queries/queries";
import CategoryContainer from "./containers/CategoryContainer";
import HeaderContainer from "./containers/HeaderContainer";
class App extends Component {

  componentWillMount() {
    client.query({
      query: GET_ALL_CURRENCIES,
    }).then(result => this.props.handleSetCurrency(result.data.currencies[0]));
  }

  render() {
    return (
      <BrowserRouter>
        <HeaderContainer />
        <div className="content">
          <Switch>
            <Route path="/:categoryName" >
              <CategoryContainer />
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
