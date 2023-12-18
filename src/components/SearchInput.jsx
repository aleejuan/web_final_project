/* eslint-disable react/prop-types */
import { IoMdSearch } from "react-icons/io";
import classes from '../styles/SearchInput.module.css'

const SearchInput = ({query, setQuery}) => {

  return (
	<div className={classes.search}>
		<IoMdSearch className={classes.icon}/>
		<input className={classes.input} placeholder='Search' value={query} onChange={(e) => setQuery(e)} type="text" name="" id="" />
	</div>
  )
}

export default SearchInput