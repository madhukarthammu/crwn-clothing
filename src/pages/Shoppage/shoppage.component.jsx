import React from 'react'
import './shoppage.styles.scss'
import CollectionOverview from '../../components/Collection-Overview/collection-overview.component'
import CollectionPage from '../Collection/collection.component'
import { Route } from 'react-router-dom'

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)


export default ShopPage;