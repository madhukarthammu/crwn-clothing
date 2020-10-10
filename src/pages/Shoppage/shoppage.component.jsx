import React from 'react'
import './shoppage.styles.scss'
import CollectionOverview from '../../components/Collection-Overview/collection-overview.component'
import CollectionPage from '../Collection/collection.component'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect';
import {SelectIsCollectionFetching, SelectIsCollectionLoaded} from '../../redux/shop/shop.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionStart} = this.props

        fetchCollectionStart();
    }


    render() {
        const {match, isFetchingCollections, isCollectionsLoaded} = this.props;
        return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} render={props => (
            <CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props} />
          )} />
            <Route path={`${match.path}/:collectionId`} render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}/>
            </div>
        )
    }
} 

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: SelectIsCollectionFetching,
    isCollectionsLoaded: SelectIsCollectionLoaded
  });

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);