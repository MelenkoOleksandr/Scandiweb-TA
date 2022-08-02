import { Component } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import CategoryContainer from "./containers/CategoryContainer";
import HeaderContainer from "./containers/HeaderContainer";
import Spinner from "./components/Spinner/Spinner";
import ProductContainer from "./containers/ProductContainer";

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
              <Route exact path={'/'}>
                <Redirect to={'/all'}/>
              </Route>
              <Route path="/:category/:productId" ><ProductContainer /></Route>
              <Route path="/:category" >
                <CategoryContainer />
              </Route>
              <Route index path="/cart" ><Cart /></Route>
            </Switch>
          </div>
        </> ) : <Spinner />}
      
       

      </BrowserRouter>
    )
  }
}

export default App;
