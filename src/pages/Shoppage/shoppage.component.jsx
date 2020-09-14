import React from 'react'
import './shoppage.styles.scss'
import SHOP_DATA from './Shoppage.data'

import CollectionPreview from '../../components/Collection-Preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({id, ...othercollectionprops}) => (
                        <CollectionPreview key={id} {...othercollectionprops}/>
                    ))}
            </div>
        )
    }

}

export default ShopPage;