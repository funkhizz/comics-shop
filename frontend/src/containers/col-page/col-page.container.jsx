import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import {selectIsComicsLoaded} from '../../redux/comics/comics.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from '../../pages/collection-page/collection.page'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsComicsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer