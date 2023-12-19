import classes from '../styles/Sidebar.module.css'
import SidebarButton from './SidebarButton'
import { useLocation } from 'react-router'

const Sidebar = () => {

	const location = useLocation()

  return (
	<div className={classes.sidebar}>
		<h1 className={classes.title}>Wolt inc.</h1>
		<div className={classes.list}>
			<SidebarButton txt={'Feed'} src={'/'} isCurrent={location.pathname == '/'}/>
			<SidebarButton txt={'Saved'} src={'/saved'} isCurrent={location.pathname == '/saved'}/>
		</div>
	</div>
  )
}

export default Sidebar