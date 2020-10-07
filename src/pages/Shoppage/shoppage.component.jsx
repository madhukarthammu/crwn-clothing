import React from 'react'
import './shoppage.styles.scss'
import CollectionOverview from '../../components/Collection-Overview/collection-overview.component'
import CollectionPage from '../Collection/collection.component'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCollectionsAsync} from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect';
import {SelectIsCollectionFetching} from '../../redux/shop/shop.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsAsync} = this.props

        fetchCollectionsAsync();
    }


    render() {
        const {match, loading} = this.props;
        return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )} />
            <Route path={`${match.path}/:collectionId`} render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}/>
            </div>
        )
    }
} 

const mapStateToProps = createStructuredSelector({
    loading: SelectIsCollectionFetching
  });

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: collectionMap => dispatch(fetchCollectionsAsync(collectionMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);