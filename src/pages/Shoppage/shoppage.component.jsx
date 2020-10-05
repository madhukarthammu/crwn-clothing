import React from 'react'
import './shoppage.styles.scss'
import CollectionOverview from '../../components/Collection-Overview/collection-overview.component'
import CollectionPage from '../Collection/collection.component'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

state = {
    loading: true
}

    componentDidMount() {
        const {updatecollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(async snapShot => {
           const collectionMap = await convertCollectionsSnapshotToMap(snapShot);
            updatecollections(collectionMap);
            this.setState({ loading: false });
        })
    }


    render() {
        const {match} = this.props;
        const {loading} = this.state;
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

const mapDispatchToProps = dispatch => ({
    updatecollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);