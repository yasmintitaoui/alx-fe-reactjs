import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Recipe Sharing App</h1>
            <SearchBar />
            <AddRecipeForm />
            <RecipeList />
          </div>
        } />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
