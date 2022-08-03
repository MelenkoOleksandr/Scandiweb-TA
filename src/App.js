import { Component } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import CategoryContainer from "./containers/CategoryContainer";
import HeaderContainer from "./containers/HeaderContainer";
import Spinner from "./components/Spinner/Spinner";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";

class App extends Component {
  componentDidMount() {
    this.props.getAllCategories();
    this.props.handleGetAllCurrencies();
    this.props.restoreCart()
  }

  render() {
    return (
      <BrowserRouter>
        {this.props.isContentLoaded ? (<>
          <HeaderContainer />
          <div className="content">
            <Switch>
              
              <Route exact path={'/'}>
                <Redirect to={'/all'}/>
              </Route>
              <Route exact path="/cart" ><CartContainer /></Route>
              <Route path="/:category/:productId" ><ProductContainer /></Route>
              <Route path="/:category" >
                <CategoryContainer />
              </Route>
             
            </Switch>
          </div>
        </> ) : <Spinner />}
      
       

      </BrowserRouter>
    )
  }
}

export default App;
