import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import Loader from '../components/loader.jsx';
import FormField from '../components/FormField.jsx';
import { Button } from '@/components/ui/button.jsx';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card.jsx';


const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => (
      <Card
        key={post.id}
        {...post}
        className="transform transition duration-500 hover:scale-105 hover:shadow-xl"
      />
    ));
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-2xl uppercase text-center">
      {title}
    </h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');

  return (
    <section className="max-w-7xl mx-auto px-5 py-12 bg-gradient-to-r from-[#f3f4f6] to-[#ffffff]">
      <div className="text-center mb-12">
        <h1 className="font-extrabold text-[#222328] text-[40px] leading-tight">
          The Community Showcase
        </h1>
        <p className="mt-4 text-[#666e75] text-[16px] max-w-[600px] mx-auto">
          Discover and be inspired by a collection of imaginative and visually stunning AI-generated images.
        </p>
      </div>


      <div className="mb-12">
        <FormField
          name="search"
          placeholder="Search for AI-generated images..."
          value={searchText}
          handleChange={(e) => setSearchText(e.target.value)}
          className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6449ff] w-full"
        />
      </div>

      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3 text-center">
                Showing results for{' '}
                <span className="text-[#222328] font-semibold">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {searchText ? (
                <RenderCards data={[]} title="No search results found" />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
