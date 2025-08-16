import { useState } from 'react';

export default function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.steps.trim()) newErrors.steps = 'Steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add logic to save data (e.g., to data.json or API)
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block text-gray-700 mb-2">Ingredients (one per line)</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows={4}
            className={`w-full p-2 border rounded ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps Field */}
        <div>
          <label className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows={6}
            className={`w-full p-2 border rounded ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
