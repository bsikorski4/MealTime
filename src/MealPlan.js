import React from "react";
import Meal from "./Meal";

function MealPlan({ mealData }) {
    const nutrients = mealData.nutrients;

    return (
        <main>
            <section className="macronutrients">
                <h2>Macronutrients</h2>
                <ul>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates}</li>
                    <li>Fat: {nutrients.fat}</li>
                    <li>Protein: {nutrients.protein}</li>
                </ul>
            </section>
            <section className="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}
            </section>

        </main>
    );
}

export default MealPlan;