/* eslint-disable react/prop-types */
import axios from 'axios'
import { useState, useEffect } from 'react';
import classes from '../styles/MealPage.module.css'
import { useParams } from 'react-router';
import Modal from '../components/Modal';

const MealPage = ({saveMeal}) => {

	const {mealId} = useParams()

	const [meal, setMeal] = useState()
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		fetchData()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchData = async () => {
		try {
			const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
			console.log(response.data)
			setMeal(response.data.meals[0])
		} catch (error) {
			console.error('Error fetching data:', error.message);
		}
	};

	if (!meal) {
		return <div className={classes.loader}></div>
	} 

  return (
	<div className={classes.page}>
		<Modal saveMeal={(id, difficulty) => saveMeal(id, difficulty)} mealId={mealId} isOpen={isOpen} setIsOpen={(val) => setIsOpen(val)}/>
		<div className={classes.header}>
			<div className={classes.img} style={{backgroundImage: `url(${meal.strMealThumb})`}}></div>
			<div className={classes.main}>
				<h1 className={classes.name}>{meal.strMeal}</h1>
				<div className={classes.category}>Category:{" "+meal.strCategory}</div>
				<button className={classes.button} onClick={() => setIsOpen(true)}>Save Recipe</button>
			</div>
		</div>
		<div className={classes.tocook}>
			<div className={classes.instructions}>
				<h1 className={classes.title}>Instruction:</h1>
				<div className={classes.instruction}>
					{meal.strInstructions}
				</div>
			</div>
			<hr />
			<div className={classes.ingridients}>
				<h1 className={classes.title}>Ingridients:</h1>
				<div className={classes.ingridientsList}>
					<h3 className={classes.ingrident}>{meal.strIngredient1}</h3>
					<h3 className={classes.ingrident}>{meal.strIngredient2}</h3>
					<h3 className={classes.ingrident}>{meal.strIngredient3}</h3>
					<h3 className={classes.ingrident}>{meal.strIngredient4}</h3>
					<h3 className={classes.ingrident}>{meal.strIngredient5}</h3>
				</div>
			</div>
		</div>
		<div className={classes.info}>
			<div className={classes.tags}>
				{meal.strTags && <h1 className={classes.title}>Tags:</h1>}
				{meal.strTags && <div className={classes.tagsList}>
					{meal.strTags.split(',').map(tag => 
						<div key={tag}>{tag}</div>	
					)}
				</div>}
				{meal.strSource.length && <h1 className={classes.title}>Source:</h1>}
				{meal.strSource.length && <a href={meal.strSource} className={classes.ingrident}>{meal.strSource}</a>}
			</div>
			{meal.strYoutube.length && <iframe className={classes.video} src={`https://www.youtube.com/embed/${meal.strYoutube.slice(32, meal.strYoutube.length)}?si=X8OaR6pxTxosp3ei`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
		</div>
	</div>
  )
}

export default MealPage