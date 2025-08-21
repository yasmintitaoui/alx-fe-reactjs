import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipe(data.find((r) => r.id === parseInt(id))));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-blue-800 mb-4">{recipe.title}</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Steps</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.steps.map((step, index) => (
            <li key={index} className="mb-1">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
