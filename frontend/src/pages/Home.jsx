import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <section className="hero bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm [Your Name]</h1>
          <p className="text-xl text-gray-600 mb-8">A passionate [Your Profession] specializing in [Your Niche].</p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to my personal portfolio. Here you can explore my projects, learn more about my skills and experience, and get in touch.
          </p>
          {/* Add buttons or links to other sections if desired */}
        </div>
      </section>
    </Layout>
  );
};

export default Home;