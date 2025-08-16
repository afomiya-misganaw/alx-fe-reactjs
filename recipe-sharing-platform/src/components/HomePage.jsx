import { useState, useEffect } from 'react';
import recipeData from '../data.json';

import { Link } from 'react-router-dom';


<Link to={`/recipe/${recipe.id}`}>
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    {Recipe}
    import { Link } from 'react-router-dom';

// Add this button somewhere in your HomePage:
<Link to="/add-recipe" className="bg-green-500 text-white px-4 py-2 rounded inline-block mt-4">
  Add New Recipe
</Link>
  </div>
</Link>
export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData); // Load mock data
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
