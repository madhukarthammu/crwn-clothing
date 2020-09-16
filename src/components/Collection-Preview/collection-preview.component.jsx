import React from 'react'

import './collection-preview.styles.scss'
import CollectionItem from '../Collection-Item/collection-item.component'

const CollectionPreview = ({title, items }) => {

return (
    <div className="collection-preview">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
            {
            items.filter((item, idx) => idx < 4).map(({id, ...otheritemprops}) => (
                <CollectionItem key={id} {...otheritemprops} />                
            ))
            }
            </div>
    </div>
)
}


export default CollectionPreview;