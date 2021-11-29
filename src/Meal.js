import React, { useState, useEffect } from "react";

function Meal({ meal }) {

    const [image, setImage] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=c1c5201201834698aec912ff9a7d0cc3`
        )
            .then((response) => response.json())
            .then((data) => {
                setImage(data.image);
                console.log(meal);
                console.log(data);
            })
            .catch(() => {
                console.log("WHAT????");
            });
    }, [meal.id]);

    return (
        <section className="recipes">
            <img src={image} alt="meal" />
            <h3>{meal.title}</h3>

            <ul className="details">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl} className="recipe-btn">Get Recipe</a>
        </section>
    );
}

export default Meal;