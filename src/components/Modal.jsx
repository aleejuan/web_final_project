/* eslint-disable react/prop-types */
import { difficulties } from '../data/meals'
import classes from '../styles/Modal.module.css'
import { useNavigate } from 'react-router'

const Modal = ({isOpen, setIsOpen, mealId, saveMeal}) => {
	console.log(mealId)
	const nav = useNavigate()

  return (
	<div className={classes.modal} style={{display: isOpen ? 'flex' : 'none'}}>
		<div className={classes.content}>
			<h1 className={classes.title}>Save as:</h1>
			<div className={classes.list}>
				<div className={classes.button} onClick={() => {saveMeal(mealId, difficulties.easy); setIsOpen(false); nav('/')}}>Easy</div>
				<div className={classes.button} onClick={() => {saveMeal(mealId, difficulties.normal); setIsOpen(false); nav('/')}}>Normal</div>
				<div className={classes.button} onClick={() => {saveMeal(mealId, difficulties.hard); setIsOpen(false); nav('/')}}>Hard</div>
			</div>
		</div>
	</div>
  )
}

export default Modal