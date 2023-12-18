/* eslint-disable react/prop-types */
import classes from '../styles/MealCard.module.css'
import { Link } from 'react-router-dom'

const MealCard = ({meal}) => {
  return (
	<Link to={`/meal/${meal.idMeal}`} className={classes.card}>
		<div className={classes.img} style={{backgroundImage: `url(${meal.strMealThumb})`}}></div>
		<div className={classes.content}>
			<h3 className={classes.name}>{meal.strMeal}</h3>
			{meal.difficulty && <h6 className={classes.saved}>Saved</h6>}
		</div>
	</Link>
  )
}

export default MealCard