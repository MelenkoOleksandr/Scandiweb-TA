import { connect } from 'react-redux'
import ProductCard from './../components/ProductCard/ProductCard';

const mapStateToProps = state => ({
    currency: state.currency
})

export default connect(mapStateToProps, null)(ProductCard)