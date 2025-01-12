import React, { useState, useEffect } from 'react';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/recipes')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <ul key={recipe.id}>
                    <li><strong>Name:</strong> {recipe.name}</li>
                    <li><strong>Description:</strong> {recipe.description}</li>
                    <li>
                        <strong>Ingredients:</strong>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default Recipes;
