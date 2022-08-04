import { connect } from 'react-redux'
import ProductCard from './../components/ProductCard/ProductCard';

const mapStateToProps = state => ({
    currency: state.currencies.currentCurrency
})       

export default connect(mapStateToProps, null)(ProductCard)