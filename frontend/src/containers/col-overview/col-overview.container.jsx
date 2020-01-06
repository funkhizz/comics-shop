import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import {selectComicsIsFetching} from '../../redux/comics/comics.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import ProductPage from '../../pages/product-page/product.page'

const mapStateToProps = createStructuredSelector({
    isLoading: selectComicsIsFetching
})

const ColOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ProductPage)

export default ColOverviewContainer