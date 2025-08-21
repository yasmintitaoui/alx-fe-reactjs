import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">
        Recipe Sharing Platform
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-800 mb-2 hover:text-blue-500 transition-colors duration-300">
                {recipe.title}
              </h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="mt-3 inline-block text-blue-700 hover:text-blue-500 underline"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
