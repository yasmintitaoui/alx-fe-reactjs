import { Link } from "react-router-dom";

// inside the map
<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
  <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        {recipe.title}
      </h2>
      <p className="text-gray-600 text-base">{recipe.summary}</p>
    </div>
  </div>
</Link>
