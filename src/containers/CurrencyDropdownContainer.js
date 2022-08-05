import {connect} from 'react-redux'
import CurrencyDropdown from '../components/Header/Currency/CurrencyDropdown/CurrencyDropdown';
import { setCurrency } from '../features/currencies/currenciesSlice';

const mapStateToProps = state => ({
    currencies: state.currencies.currencies,
    currentCurrency: state.currencies.currentCurrency
})

const mapDispatchToProps = dispatch => ({
    handleSetCurrency: currency => dispatch(setCurrency(currency)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown)