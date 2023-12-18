import './App.css'
import Sidebar from './components/Sidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './pages/Main';
import MealPage from './pages/MealPage';
import { useState } from 'react';
import data, { difficulties } from './data/meals';
import Saved from './pages/Saved';

function App() {

  const [meals, setMeals] = useState(data)

  console.log(meals)

  const saveMeal = (id, difficulty) => {
    console.log(id, difficulty)
    setMeals(prev => prev.map(meal => meal.idMeal == id ? {...meal, saved: true, difficulty: difficulty} : meal))
  }

  const deleteMeal = (id) => {
    console.log(id)
    setMeals(prev => prev.map(meal => meal.idMeal == id ? {...meal, saved: false, difficulty: difficulties.unset} : meal))
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Main meals={meals}/>}/>
          <Route path='/meal/:mealId' element={<MealPage saveMeal={(id, difficulty) => saveMeal(id, difficulty)}/>}/>
          <Route path='/saved' element={<Saved meals={meals.filter(meal => meal.saved == true)} setMeals={(id) => deleteMeal(id)}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
