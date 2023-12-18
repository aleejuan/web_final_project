/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import classes from '../styles/SideBarButton.module.css'

const SidebarButton = ({txt, src, isCurrent}) => {
  return (
	<Link className={classes.button} to={src} style={isCurrent ? {backgroundColor: "#dc3000", border: '2px #dc3000 solid'} : {border: '2px #e9e9e9 solid'}}>
		<h3 className={classes.txt}>{txt}</h3>
	</Link>
  )
}

export default SidebarButton