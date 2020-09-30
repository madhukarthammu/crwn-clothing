import React from 'react'
import {connect} from 'react-redux'
import {SelectCollections} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../Collection-Preview/collection-preview.component'
import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({ id, ...othercollectionprops }) => (
                <CollectionPreview key={id} {...othercollectionprops} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections: SelectCollections(state)
})

export default connect(mapStateToProps)(CollectionOverview);