import React from 'react'
import './directory.styles.scss'
import MenuItem from '../Menu-Item/menu-item.component';
import {connect} from 'react-redux'
import {SelectSections} from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => (

  <div className="directory-menu">
    {
     sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))
    }
  </div>

)

const mapStateToProps = (state) => ({
  sections:  SelectSections(state)
})

export default connect(mapStateToProps)(Directory);