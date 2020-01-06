import React from 'react';
import ColOverviewContainer from '../../containers/col-overview/col-overview.container'
import CollectionPageContainer from '../../containers/col-page/col-page.container'
import {Route} from 'react-router-dom';
import { fetchComicsStartAsync } from '../../redux/comics/comics.actions'
import { connect } from 'react-redux'

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchComicsStartAsync } = this.props;
        fetchComicsStartAsync()
    };
    render() {
        const {match} = this.props

        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
             component={CollectionPageContainer} />
            <Route path={`${match.path}/:categoryId`}
            component={ColOverviewContainer}
            />
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchComicsStartAsync: () => dispatch(fetchComicsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage);