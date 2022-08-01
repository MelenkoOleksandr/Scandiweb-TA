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
import Spinner from "./components/Spinner/Spinner";
class App extends Component {
  componentDidMount() {
    this.props.getAllCategories();
    this.props.handleGetAllCurrencies();
  }

  render() {
    console.log(this.props.isContentLoaded);
    return (
      <BrowserRouter>
        {this.props.isContentLoaded ? (<>
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
        </> ) : <Spinner />}
      
       

      </BrowserRouter>
    )
  }
}

export default App;
