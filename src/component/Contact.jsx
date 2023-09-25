// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 lg:flex justify-between">
        <div className="w-full mx-10 mb-8 lg:mb-0 lg:w-1/3">
        <h3 class="mb-8 mt-0 text-3xl font-medium leading-tight text-primary text-center">
                Tailwind Elements
            </h3>
          <form>
            <div className="mb-6">
              <input
                type="text"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-primary"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-primary"
                placeholder="Email address"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-primary"
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2 text-primary"
                checked
              />
              <label className="cursor-pointer">
                Send me a copy of this message
              </label>
            </div>
            <button
              type="button"
              className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex space-x-4 overflow-x-auto">
            
            {/* Map 1 */}
            <div className="relative h-96 w-1/2 rounded-lg shadow-lg">
              <iframe
                src="http://bit.ly/48lTsDr"
                className="absolute left-0 top-0 h-full w-full rounded-lg"
                allowFullScreen
                title="Map 1"
              ></iframe>
              
            </div>

            {/* Map 2 */}
            <div className="relative h-96 w-1/2 rounded-lg shadow-lg">
              <iframe
                src="http://bit.ly/48lTsDr"
                className="absolute left-0 top-0 h-full w-full rounded-lg"
                frameBorder="0"
                allowFullScreen
                title="Map 2"
              ></iframe>
            </div>

            {/* Map 3 */}
            <div className="relative h-96 w-1/2 rounded-lg shadow-lg">
              <iframe
                src="http://bit.ly/48lTsDr"
                className="absolute left-0 top-0 h-full w-full rounded-lg"
                frameBorder="0"
                allowFullScreen
                title="Map 3"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
