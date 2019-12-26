import React from 'react';
import CollectionPage from '../collection-page/collection.page';
import ProductPage from '../product-page/product.page';
import {Route} from 'react-router-dom';
import { setComics } from '../../redux/comics/comics.actions'
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
    state = {
        loading: true,
    }

    componentDidMount() {
        this.getComics()
    };

    getComics = async () => {

        let res = await axios.get('https://comics-djreact.herokuapp.com/comics/api/comics/');
        let data = res.data;
        const {setComics} = this.props
        setComics(data);
        this.setState({loading: false})
    }

    render() {
        const {match} = this.props
        const {loading} = this.state
        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
             render={props => (
             <CollectionPageOverviewWithSpinner isLoading={loading} {...props}/>) }/>
            <Route path={`${match.path}/:categoryId`}
            render={props => (
            <ProductPageOverviewWithSpinner isLoading={loading} {...props} />) }/>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setComics: comics => dispatch(setComics(comics))
})


export default connect(null, mapDispatchToProps)(ShopPage);