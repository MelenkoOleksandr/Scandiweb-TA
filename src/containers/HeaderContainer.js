import { connect } from 'react-redux'
import { getAllCategories } from '../features/categories/categoriesSlice';
import Header from './../components/Header/Header';

const mapStateToProps = state => ({
    categories: state.categories
})

const mapDispatchToProps = dispatch => ({
    getAllCategories: () => dispatch(getAllCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)