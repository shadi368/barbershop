import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/logo.jpg';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section 
        className="bg-blue-500 text-white h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className="text-lg md:text-xl mb-8 bg-black-500/75 p-2 rounded text-red-500">
          Get the best haircut in town at affordable prices!
        </p>
        <Link to="/services">
          <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-gray-200">
            View Services
          </button>
        </Link>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Haircut</h3>
              <p className="text-gray-700">
                A classic cut for all hair types. Precision and style.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Beard Trim</h3>
              <p className="text-gray-700">
                Get your beard perfectly trimmed and shaped.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Shave</h3>
              <p className="text-gray-700">
                A smooth and clean shave for a fresh look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Barber Shop. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:text-gray-200">Facebook</a>
            <a href="#" className="hover:text-gray-200">Instagram</a>
            <a href="#" className="hover:text-gray-200">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
