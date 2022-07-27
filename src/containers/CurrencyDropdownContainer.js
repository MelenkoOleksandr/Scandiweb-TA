import {connect} from 'react-redux'
import { setCurrency } from "../features/currency/currencySlice"
import CurrencyDropdown from '../components/CurrencyDropdown/CurrencyDropdown';

const mapDispatchToProps = dispatch => ({
    handleSetCurrency: currency => dispatch(setCurrency(currency))
})

export default connect(null, mapDispatchToProps)(CurrencyDropdown)