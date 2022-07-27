import { connect } from 'react-redux'
import { setCurrency } from "../features/currency/currencySlice"
import App from '../App';

const mapDispatchToProps = dispatch => ({
    handleSetCurrency: currency => dispatch(setCurrency(currency))
})

export default connect(null, mapDispatchToProps)(App)