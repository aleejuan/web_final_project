/* eslint-disable react/prop-types */
import classes from '../styles/SavedMeal.module.css'
import { Link } from 'react-router-dom'

const SavedMeal = ({meal, deleteMeal}) => {
  return (
	<div  className={classes.card}>
		<div className={classes.img} style={{backgroundImage: `url(${meal.strMealThumb})`}}>
			{meal.difficulty && <h6 className={classes.saved} style={{backgroundColor: meal.difficulty == 'Hard' ? 'red' : meal.difficulty == 'Normal' ? 'orange' : 'lime'}}>{meal.difficulty}</h6>}
		</div>
		<div className={classes.content}>
			<h3 className={classes.name}>{meal.strMeal}</h3>
			<div className={classes.buttons}>
				<button className={classes.delete} onClick={() => {deleteMeal(meal.idMeal)}}>Delete</button>
				<Link to={`/meal/${meal.idMeal}`} className={classes.explore}>Explore</Link>
			</div>
		</div>
	</div>
  )
}

export default SavedMeal