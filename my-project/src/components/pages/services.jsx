import React, { useState } from 'react';

const services = () => {
  // State to handle booking form details
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
  });

  // State for booking confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic (e.g., send data to backend or display confirmation)
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Book a Service</h2>

        {/* Show confirmation after booking */}
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Booking Confirmed!</h3>
            <p>Thank you, {formData.name}. Your {formData.service} is booked for {formData.date} at {formData.time}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                Select a Service
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="Haircut">Haircut</option>
                <option value="Beard Trim">Beard Trim</option>
                <option value="Shave">Shave</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                Select a Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                Select a Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Book Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default services;
