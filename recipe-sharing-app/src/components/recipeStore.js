import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe]
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));

export default useRecipeStore;
