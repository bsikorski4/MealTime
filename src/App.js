import React, { useState } from "react";
import MealPlan from "./MealPlan";

function App() {
    const [recipe, setRecipe] = useState(null);
    const [calories, setCalories] = useState(0);

    function getMealData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=c1c5201201834698aec912ff9a7d0cc3&targetCalories=${calories}&timeFrame=day`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "data");
                if (parseInt(data.code) === 402) {
                    setRecipe({
                        nutrients: {
                            calories: 100,
                            carbohydrates: 10,
                            fat: 20,
                            protein: 30
                        },
                        meals: [
                            {
                            id: 123,
                            title: "soja"
                            },
                            {
                                id: 124,
                                title: "kurczak"
                            },
                            {
                                id: 145,
                                title: "ryż"
                            }
                        ]
                    })
                }
                else {
                    setRecipe(data);
                }
            })
            .catch(() => {
                console.log("WHAT????");
            });
    }

    function handleChange(event) {
        setCalories(event.target.value);
    }

    return (
        <div className="app-container">
            <section className="meal-search">
                <div className="app-logo">
                    <a href="#"><i className="fas fa-pepper-hot"></i>MealTime</a>
                </div>
                <div className="meal-search-box">
                    <input
                        type="number"
                        placeholder="Calories"
                        className="calories-input"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="search-btn btn"
                        onClick={getMealData}
                    >
                        <i className="fas fa-search"/>
                    </button>
                </div>

            </section>
            {recipe && <MealPlan mealData={recipe} />}
        </div>



    );
}

export default App;