/* eslint-disable react/prop-types */
import classes from '../styles/Saved.module.css'
import { Container, Row } from 'react-bootstrap'
import SavedMeal from '../components/SavedMeal'

const Saved = ({meals, setMeals}) => {
	console.log(meals)
  return (
	<Container className={classes.page}>
		<h1 className={classes.title}>Saved Recipes:</h1>
		<Row className={classes.list}>
			{meals.length ? meals.map(meal => 
				<SavedMeal deleteMeal={(id) => {setMeals(id)}} key={meal.idMeal} meal={meal}/>
			) : <h1>You dont have any saved recipes</h1>}
		</Row>
	</Container>
  )
}

export default Saved