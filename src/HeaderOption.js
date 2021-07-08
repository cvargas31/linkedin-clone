import React from 'react'
import './HeaderOption.css'
// Material Ui Imports
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const HeaderOption = ({avatar, Icon, title, onClick}) => {

  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className="headerOption">
      {/* Condicional que solo renderea si pasamos Icon via props */}
      {Icon && <Icon className="headerOption__icon"/>}
      {avatar && <Avatar className="headerOption__icon">{user?.email[0].toUpperCase()} </Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
