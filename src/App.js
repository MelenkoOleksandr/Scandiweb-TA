import { Component } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import CategoryContainer from "./containers/CategoryContainer";
import Spinner from "./components/Spinner/Spinner";
import ProductContainer from "./containers/ProductContainer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";

class App extends Component {
  componentDidMount() {
    this.props.getAllCategories();
    this.props.handleGetAllCurrencies();
    this.props.restoreCart()
  }

  render() {
    if (!this.props.isContentLoaded) {
      return <Spinner />
    }
    const baseCategory = this.props.categories[0].name
    return (
      <BrowserRouter>
        <>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path={'/'}>
                <Redirect to={`/${baseCategory}`} />
              </Route>
              <Route exact path="/cart" ><Cart /></Route>
              <Route path="/:category/:productId" ><ProductContainer /></Route>
              <Route path="/:category" >
                <CategoryContainer />
              </Route>

            </Switch>
          </div>
        </>
      </BrowserRouter>
    )
  }
}

export default App;
