import {connect} from 'react-redux'
import { setCurrency } from "../features/currency/currencySlice"
import CurrencyDropdown from '../components/CurrencyDropdown/CurrencyDropdown';

const mapStateToProps = state => ({
    currencies: state.currencies
})

const mapDispatchToProps = dispatch => ({
    handleSetCurrency: currency => dispatch(setCurrency(currency))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown)