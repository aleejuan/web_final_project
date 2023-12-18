/* eslint-disable react/prop-types */
import classes from '../styles/Main.module.css'
import { useState } from 'react'
import MealCard from '../components/MealCard'
import { Container, Row } from 'react-bootstrap'
import SearchInput from '../components/SearchInput'


const Main = ({meals}) => {

	const [query, setQuery] = useState('')

  return (
	<div className={classes.main}>
		<Container>
			<Row className={classes.filters}>
				<SearchInput query={query} setQuery={(e) => setQuery(e.target.value)}/>
			</Row>
			<Row className={classes.list}>
				{meals.filter(meal => meal.strMeal.toLowerCase().startsWith(query.toLowerCase())).sort((a, b) => a.strMeal.localeCompare(b.strMeal, undefined, { sensitivity: 'base' })).map(meal => 
					<MealCard key={meal.idMeal} meal={meal}/>
				)}
			</Row>
		</Container>
	</div>
  )
}

export default Main