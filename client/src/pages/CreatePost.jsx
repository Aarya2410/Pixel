import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets'; 
import { getRandomPrompt } from '../utils'; 
import FormField from '../components/FormField.jsx';
import Loader from '../components/loader.jsx';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '', // This will store the generated image URL
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt) {
      setGeneratingImg(true);
      // Simulate API call to generate image (you can replace this with actual API call)
      setTimeout(() => {
        const generatedImageUrl = 'https://example.com/generated_image.jpg'; // Replace with actual generated image URL
        setForm({ ...form, photo: generatedImageUrl });
        setGeneratingImg(false);
      }, 2000); // Simulated delay for image generation
    }
  };

  const handleShare = async () => {
    if (form.photo && form.prompt && form.name) {
      setLoading(true);
      // Simulate API call to share the post (replace with actual logic)
      setTimeout(() => {
        alert('Image shared with the community!');
        setLoading(false);
        navigate('/'); // Redirect to the home page after sharing
      }, 1500);
    } else {
      alert('Please generate an image and fill out all the fields before sharing.');
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 min-h-screen py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Create Your AI-Generated Image
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Create and share imaginative and visually stunning images with the community.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <FormField
              LabelName="Your Name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField
              LabelName="Prompt"
              type="text"
              name="prompt"
              placeholder="A comic book cover of a superhero wearing headphones"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe={true}
              handleSurpriseMe={handleSurpriseMe}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold rounded-lg px-6 py-2 transition-transform transform hover:scale-105"
              >
                {generatingImg ? 'Generating...' : 'Generate Image'}
              </button>
            </div>

            <div className="relative bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-4 flex justify-center items-center">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-9/12 h-9/12 object-cover opacity-50"
                />
              )}

              {generatingImg && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 rounded-lg">
                  <Loader />
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-700 mb-3">
              Once you've generated an image that you like, share it with the community!
            </p>
            <button
              type="button"
              onClick={handleShare}
              className="bg-green-500 text-white font-semibold rounded-lg px-6 py-2 transition-transform transform hover:scale-105"
              disabled={loading || !form.photo} // Disable if loading or no image
            >
              {loading ? 'Sharing...' : 'Share with the Community'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
