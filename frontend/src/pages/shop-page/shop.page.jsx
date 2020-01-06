import React from 'react';
import CollectionPage from '../collection-page/collection.page';
import ProductPage from '../product-page/product.page';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect'
import { fetchComicsStartAsync } from '../../redux/comics/comics.actions'
import {selectComicsIsFetching} from '../../redux/comics/comics.selector'
import { connect } from 'react-redux'
import axios from 'axios'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
// const ShopPage = ({match}) => (
//     <div className='shop-page'>
//         <Route exact path={`${match.path}`} component={CollectionPage}/>
//         <Route path={`${match.path}/:categoryId`} component={ProductPage}/>
//     </div>
// )

const CollectionPageOverviewWithSpinner = WithSpinner(CollectionPage);
const ProductPageOverviewWithSpinner = WithSpinner(ProductPage);

class ShopPage extends React.Component {


    componentDidMount() {
        const { fetchComicsStartAsync } = this.props;
        fetchComicsStartAsync()
    };



    render() {
        const {match, isComicsFetching} = this.props

        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
             render={props => (
             <CollectionPageOverviewWithSpinner isLoading={isComicsFetching} {...props}/>) }/>
            <Route path={`${match.path}/:categoryId`}
            render={props => (
            <ProductPageOverviewWithSpinner isLoading={isComicsFetching} {...props} />) }/>
        </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isComicsFetching: selectComicsIsFetching
})

const mapDispatchToProps = dispatch => ({
    fetchComicsStartAsync: () => dispatch(fetchComicsStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);