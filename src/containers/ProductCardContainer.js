import { connect } from 'react-redux'
import ProductCard from './../components/ProductCard/ProductCard';

const mapStateToProps = state => {
    // console.log("HERE",state.currencies.currencies[0]);
    return ({
        currency: state.currency.currency || state.currencies.currencies[0]
    })
} 

export default connect(mapStateToProps, null)(ProductCard)