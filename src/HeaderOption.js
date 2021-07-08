import React from 'react'
import './HeaderOption.css'
// Material Ui Imports
import { Avatar } from '@material-ui/core'

const HeaderOption = ({avatar, Icon, title}) => {
  return (
    <div className="headerOption">
      {/* Condicional que solo renderea si pasamos Icon via props */}
      {Icon && <Icon className="headerOption__icon"/>}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
