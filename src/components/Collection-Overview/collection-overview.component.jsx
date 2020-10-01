import React from 'react'
import {connect} from 'react-redux'
import CollectionPreview from '../Collection-Preview/collection-preview.component'
import './collection-overview.styles.scss'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...othercollectionprops }) => (
                <CollectionPreview key={id} {...othercollectionprops} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections:selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview);